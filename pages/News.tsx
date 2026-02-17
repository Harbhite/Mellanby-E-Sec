
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { ArrowRight, User, Calendar } from 'lucide-react';
import { NewsArticle } from '../types';

const News: React.FC = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

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
      const mappedNews: NewsArticle[] = data.map((item: any) => ({
        id: item.id,
        title: item.title,
        summary: item.summary,
        content: item.content,
        date: item.date,
        author: item.author,
        category: item.category,
        imageUrl: item.image_url
      }));
      setNews(mappedNews);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 sm:p-12 lg:p-24 animate-in fade-in duration-700">
      <header className="mb-12 lg:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#1a2a40] uppercase tracking-tighter">HALL NEWS</h1>
        <div className="flex items-center gap-4 mt-4">
          <div className="h-[1px] w-12 sm:w-24 bg-[#1a2a40]" />
          <p className="mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-[#1a2a40] uppercase opacity-50">Latest Updates from Mellanby</p>
        </div>
      </header>

      {loading ? (
        <div className="h-64 flex flex-col items-center justify-center">
           <p className="mono text-xs text-[#1a2a40] uppercase animate-pulse">Loading Updates...</p>
        </div>
      ) : news.length === 0 ? (
        <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-black/10">
          <p className="mono text-xs text-black/30 uppercase">No news updates available.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-16 lg:gap-24">
          {news.map((article, index) => (
            <article
              key={article.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-start`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-[#c5a059] translate-x-2 translate-y-2 lg:translate-x-3 lg:translate-y-3 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                <img
                  src={article.imageUrl || 'https://via.placeholder.com/800x400?text=News+Image'}
                  alt={article.title}
                  className="w-full h-[250px] sm:h-[350px] lg:h-[450px] object-cover grayscale hover:grayscale-0 transition-all duration-700 border-2 border-[#1a2a40]"
                />
                <div className="absolute top-4 left-4 bg-[#1a2a40] text-white px-3 py-1 mono text-[9px] uppercase tracking-widest">
                  {article.category}
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-4 mono text-[9px] sm:text-[10px] text-black/40 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} className="text-[#c5a059]" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={12} className="text-[#c5a059]" />
                    {article.author}
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1a2a40] mb-6 leading-tight uppercase group-hover:text-[#c5a059] transition-colors break-words">
                  {article.title}
                </h2>

                <p className="text-sm sm:text-lg text-[#1a2a40]/70 mb-8 border-l-4 border-[#c5a059] pl-4 sm:pl-6 italic leading-relaxed">
                  {article.summary}
                </p>

                <button className="flex items-center gap-4 group w-fit transition-all hover:translate-x-2">
                  <span className="mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a2a40]">Read Full Update</span>
                  <div className="p-2 border border-[#1a2a40] group-hover:bg-[#1a2a40] group-hover:text-white transition-all shadow-sm">
                    <ArrowRight size={16} />
                  </div>
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      <footer className="mt-24 pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6 mono text-[10px] opacity-30 uppercase tracking-[0.2em]">
        <span>Kenneth Mellanby Press Bureau</span>
        <span>Est. 1952 — University of Ibadan</span>
      </footer>
    </div>
  );
};

export default News;
