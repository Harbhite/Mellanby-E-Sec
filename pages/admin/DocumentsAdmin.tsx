import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Search, Trash2, X, FileText, Download, Lock, Unlock } from 'lucide-react';

interface Document {
  id: string;
  name: string;
  size: string;
  date: string;
  type: string;
  url: string;
  restricted: boolean;
  category: string;
}

const DocumentsAdmin: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Form State
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState('Meeting Minutes');
  const [restricted, setRestricted] = useState(false);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const { data, error } = await supabase
        .from('documents')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setDocuments(data || []);
    } catch (error) {
      console.error('Error fetching documents:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setUploadError(null);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      // 1. Upload to Storage
      const { error: uploadErr } = await supabase.storage
        .from('documents')
        .upload(filePath, file);

      if (uploadErr) throw uploadErr;

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('documents')
        .getPublicUrl(filePath);

      // 3. Insert into Database
      const { error: dbError } = await supabase
        .from('documents')
        .insert([
          {
            name: file.name,
            size: formatFileSize(file.size),
            type: fileExt?.toUpperCase() || 'FILE',
            url: publicUrl,
            category,
            restricted,
            date: new Date().toISOString().split('T')[0]
          }
        ]);

      if (dbError) throw dbError;

      // Reset and refresh
      setFile(null);
      setIsModalOpen(false);
      fetchDocuments();
    } catch (error: any) {
      console.error('Error uploading document:', error);
      setUploadError(error.message || 'Failed to upload document');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string, url: string) => {
    if (!window.confirm('Are you sure you want to delete this document?')) return;

    try {
      // Extract file path from URL to delete from storage
      // URL format: .../storage/v1/object/public/documents/filename.ext
      const path = url.split('/documents/').pop();

      if (path) {
        const { error: storageError } = await supabase.storage
          .from('documents')
          .remove([path]);

        if (storageError) console.error('Error deleting from storage:', storageError);
      }

      const { error } = await supabase
        .from('documents')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setDocuments(documents.filter(doc => doc.id !== id));
    } catch (error) {
      console.error('Error deleting document:', error);
      alert('Failed to delete document');
    }
  };

  const toggleRestricted = async (doc: Document) => {
    try {
      const { error } = await supabase
        .from('documents')
        .update({ restricted: !doc.restricted })
        .eq('id', doc.id);

      if (error) throw error;

      setDocuments(documents.map(d =>
        d.id === doc.id ? { ...d, restricted: !d.restricted } : d
      ));
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e0e0dc] pb-6">
        <div>
          <h1 className="text-3xl font-black text-[#1a2a40] uppercase tracking-tighter">Documents</h1>
          <p className="mono text-xs text-gray-500 uppercase tracking-widest mt-2">Archive Management</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#1a2a40] text-white px-6 py-3 mono text-xs font-bold uppercase tracking-widest hover:bg-[#c5a059] hover:text-[#1a2a40] transition-colors flex items-center gap-2"
        >
          <Plus size={16} /> Upload Document
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="SEARCH DOCUMENTS..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#e0e0dc] focus:border-[#1a2a40] outline-none mono text-xs uppercase"
        />
      </div>

      {/* List */}
      <div className="bg-white border border-[#e0e0dc] shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center mono text-xs uppercase text-gray-500">Loading documents...</div>
        ) : filteredDocuments.length === 0 ? (
          <div className="p-8 text-center mono text-xs uppercase text-gray-500">No documents found.</div>
        ) : (
          <div className="divide-y divide-[#e0e0dc]">
            {filteredDocuments.map(doc => (
              <div key={doc.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#f9f9f9] transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f4f4f2] border border-[#e0e0dc] flex items-center justify-center rounded text-gray-400 shrink-0">
                    <FileText size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white bg-gray-600 rounded-sm">
                        {doc.category}
                      </span>
                      <span className="mono text-[10px] text-gray-400">
                        {new Date(doc.date).toLocaleDateString()}
                      </span>
                      {doc.restricted && (
                        <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-rose-600">
                          <Lock size={10} /> Restricted
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-[#1a2a40] text-lg break-all">{doc.name}</h3>
                    <p className="text-xs text-gray-400 mt-1 mono uppercase tracking-wider">
                      {doc.type} • {doc.size}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => toggleRestricted(doc)}
                    className={`p-2 rounded hover:bg-gray-100 ${doc.restricted ? 'text-rose-500' : 'text-gray-400'}`}
                    title={doc.restricted ? "Make Public" : "Restrict Access"}
                  >
                    {doc.restricted ? <Unlock size={18} /> : <Lock size={18} />}
                  </button>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-[#1a2a40] hover:bg-gray-100 rounded"
                    title="Download"
                  >
                    <Download size={18} />
                  </a>
                  <button
                    onClick={() => handleDelete(doc.id, doc.url)}
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
          <div className="bg-white w-full max-w-lg shadow-2xl border-t-4 border-[#c5a059]">
            <div className="flex justify-between items-center p-6 border-b border-[#e0e0dc]">
              <h2 className="text-xl font-black text-[#1a2a40] uppercase tracking-wide">
                Upload Document
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-rose-500">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleUpload} className="p-6 space-y-6">
              {uploadError && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 text-sm">
                  {uploadError}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block mono text-[10px] font-bold uppercase text-[#1a2a40] mb-2">File</label>
                  <input
                    required
                    type="file"
                    onChange={handleFileChange}
                    className="w-full p-3 bg-[#f4f4f2] border border-[#e0e0dc] focus:border-[#1a2a40] outline-none transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block mono text-[10px] font-bold uppercase text-[#1a2a40] mb-2">Category</label>
                  <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className="w-full p-3 bg-[#f4f4f2] border border-[#e0e0dc] focus:border-[#1a2a40] outline-none transition-colors"
                  >
                    <option value="Meeting Minutes">Meeting Minutes</option>
                    <option value="Legislation">Legislation</option>
                    <option value="Finance">Finance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="restricted"
                    checked={restricted}
                    onChange={e => setRestricted(e.target.checked)}
                    className="w-4 h-4 text-[#1a2a40] focus:ring-[#1a2a40] border-gray-300 rounded"
                  />
                  <label htmlFor="restricted" className="mono text-[10px] font-bold uppercase text-[#1a2a40]">
                    Restrict Access (Admin Only)
                  </label>
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
                  disabled={uploading}
                  className="bg-[#1a2a40] text-white px-8 py-3 mono text-xs font-bold uppercase tracking-widest hover:bg-[#c5a059] hover:text-[#1a2a40] transition-colors disabled:opacity-50"
                >
                  {uploading ? 'Uploading...' : 'Upload'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentsAdmin;
