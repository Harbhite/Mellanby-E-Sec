
import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { NewsArticle } from '../../types';
import { Plus, Edit2, Trash2, X, Search, Image as ImageIcon } from 'lucide-react';

const NewsAdmin: React.FC = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsArticle | null>(null);

  // Form State
  const initialNewsState: Omit<NewsArticle, 'id'> = {
    title: '',
    summary: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    author: 'Hall Secretary',
    category: 'Announcement',
    imageUrl: ''
  };
  const [formData, setFormData] = useState<Omit<NewsArticle, 'id'>>(initialNewsState);
  const [formError, setFormError] = useState<string | null>(null);
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching news:', error);
    } else {
      // Map DB columns to NewsArticle type
      const mappedNews: NewsArticle[] = data.map((item: any) => ({
        id: item.id,
        title: item.title,
        summary: item.summary,
        content: item.content,
        date: item.date,
        author: item.author,
        category: item.category,
        imageUrl: item.image_url // DB: image_url, Type: imageUrl
      }));
      setNews(mappedNews);
    }
    setLoading(false);
  };

  const handleOpenAdd = () => {
    setEditingNews(null);
    setFormData(initialNewsState);
    setFormError(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (article: NewsArticle) => {
    setEditingNews(article);
    setFormData({
      title: article.title,
      summary: article.summary,
      content: article.content,
      date: article.date,
      author: article.author,
      category: article.category,
      imageUrl: article.imageUrl
    });
    setFormError(null);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this article? This action cannot be undone.')) return;

    const { error } = await supabase.from('news').delete().eq('id', id);
    if (error) {
      console.error('Error deleting news:', error);
      alert('Failed to delete article');
    } else {
      setNews(news.filter(n => n.id !== id));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError(null);

    const payload = {
      title: formData.title,
      summary: formData.summary,
      content: formData.content,
      date: formData.date,
      author: formData.author,
      category: formData.category,
      image_url: formData.imageUrl
    };

    try {
      if (editingNews) {
        // Update
        const { error } = await supabase
          .from('news')
          .update(payload)
          .eq('id', editingNews.id);

        if (error) throw error;
      } else {
        // Create
        const { error } = await supabase
          .from('news')
          .insert([payload]);

        if (error) throw error;
      }

      await fetchNews(); // Refresh list
      setIsModalOpen(false);
    } catch (err: any) {
      console.error('Error saving news:', err);
      setFormError(err.message || 'An error occurred while saving the article.');
    } finally {
      setFormLoading(false);
    }
  };

  const filteredNews = news.filter(n =>
    n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    n.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b-2 border-[#1a2a40] pb-6">
        <div>
          <h1 className="text-3xl font-black text-[#1a2a40] uppercase tracking-tighter">News Manager</h1>
          <p className="mono text-[#c5a059] mt-2 uppercase tracking-widest text-xs">Announcements & Updates</p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="bg-[#1a2a40] text-white px-6 py-3 mono text-xs font-bold uppercase tracking-widest hover:bg-[#c5a059] hover:text-[#1a2a40] transition-colors flex items-center gap-2"
        >
          <Plus size={16} /> New Article
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="SEARCH NEWS..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#e0e0dc] focus:border-[#1a2a40] outline-none mono text-xs uppercase"
        />
      </div>

      {/* List */}
      <div className="bg-white border border-[#e0e0dc] shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center mono text-xs uppercase text-gray-500">Loading news...</div>
        ) : filteredNews.length === 0 ? (
          <div className="p-8 text-center mono text-xs uppercase text-gray-500">No articles found.</div>
        ) : (
          <div className="divide-y divide-[#e0e0dc]">
            {filteredNews.map(article => (
              <div key={article.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#f9f9f9] transition-colors group">
                <div className="flex items-start gap-4">
                  {article.imageUrl ? (
                    <img src={article.imageUrl} alt={article.title} className="w-16 h-16 object-cover rounded border border-[#e0e0dc]" />
                  ) : (
                    <div className="w-16 h-16 bg-[#f4f4f2] border border-[#e0e0dc] flex items-center justify-center rounded text-gray-400">
                      <ImageIcon size={24} />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white rounded-sm
                        ${article.category === 'Announcement' ? 'bg-orange-600' :
                          article.category === 'Press Release' ? 'bg-blue-600' :
                          'bg-gray-600'}
                      `}>
                        {article.category}
                      </span>
                      <span className="mono text-[10px] text-gray-400">
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#1a2a40] text-lg">{article.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-1">{article.summary}</p>
                    <p className="text-xs text-gray-400 mt-1 mono uppercase tracking-wider">By {article.author}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleOpenEdit(article)}
                    className="p-2 text-gray-400 hover:text-[#1a2a40] hover:bg-gray-100 rounded"
                    title="Edit"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(article.id)}
                    className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border-t-4 border-[#c5a059]">
            <div className="flex justify-between items-center p-6 border-b border-[#e0e0dc]">
              <h2 className="text-xl font-black text-[#1a2a40] uppercase tracking-wide">
                {editingNews ? 'Edit Article' : 'New Article'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-rose-500">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {formError && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 text-sm">
                  {formError}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block mono text-[10px] font-bold uppercase text-[#1a2a40] mb-2">Headline</label>
                  <input
                    required
                    type="text"
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    className="w-full p-3 bg-[#f4f4f2] border border-[#e0e0dc] focus:border-[#1a2a40] outline-none transition-colors"
                    placeholder="e.g. New Solar Installation"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mono text-[10px] font-bold uppercase text-[#1a2a40] mb-2">Category</label>
                    <select
                      value={formData.category}
                      onChange={e => setFormData({...formData, category: e.target.value as any})}
                      className="w-full p-3 bg-[#f4f4f2] border border-[#e0e0dc] focus:border-[#1a2a40] outline-none transition-colors"
                    >
                      <option value="Announcement">Announcement</option>
                      <option value="Press Release">Press Release</option>
                      <option value="Hall News">Hall News</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mono text-[10px] font-bold uppercase text-[#1a2a40] mb-2">Date</label>
                    <input
                      required
                      type="date"
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                      className="w-full p-3 bg-[#f4f4f2] border border-[#e0e0dc] focus:border-[#1a2a40] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mono text-[10px] font-bold uppercase text-[#1a2a40] mb-2">Author</label>
                  <input
                    required
                    type="text"
                    value={formData.author}
                    onChange={e => setFormData({...formData, author: e.target.value})}
                    className="w-full p-3 bg-[#f4f4f2] border border-[#e0e0dc] focus:border-[#1a2a40] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block mono text-[10px] font-bold uppercase text-[#1a2a40] mb-2">Image URL</label>
                  <input
                    type="text"
                    value={formData.imageUrl}
                    onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                    className="w-full p-3 bg-[#f4f4f2] border border-[#e0e0dc] focus:border-[#1a2a40] outline-none transition-colors"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block mono text-[10px] font-bold uppercase text-[#1a2a40] mb-2">Summary</label>
                  <textarea
                    required
                    value={formData.summary}
                    onChange={e => setFormData({...formData, summary: e.target.value})}
                    rows={2}
                    className="w-full p-3 bg-[#f4f4f2] border border-[#e0e0dc] focus:border-[#1a2a40] outline-none transition-colors resize-none"
                    placeholder="Brief overview..."
                  />
                </div>

                <div>
                  <label className="block mono text-[10px] font-bold uppercase text-[#1a2a40] mb-2">Full Content</label>
                  <textarea
                    required
                    value={formData.content}
                    onChange={e => setFormData({...formData, content: e.target.value})}
                    rows={6}
                    className="w-full p-3 bg-[#f4f4f2] border border-[#e0e0dc] focus:border-[#1a2a40] outline-none transition-colors resize-none"
                    placeholder="Full article content..."
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#e0e0dc]">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 mono text-xs font-bold uppercase tracking-widest text-[#1a2a40] hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formLoading}
                  className="bg-[#1a2a40] text-white px-8 py-3 mono text-xs font-bold uppercase tracking-widest hover:bg-[#c5a059] hover:text-[#1a2a40] transition-colors disabled:opacity-50"
                >
                  {formLoading ? 'Saving...' : editingNews ? 'Update Article' : 'Publish Article'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsAdmin;
