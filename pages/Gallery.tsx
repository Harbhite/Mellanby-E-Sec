
import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  event: string;
  date: string;
  location: string;
  category: 'Events' | 'Heritage' | 'Sports' | 'Academic';
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    url: 'https://picsum.photos/seed/mellanby-dinner/800/600',
    title: 'Hall Dinner 2023',
    event: 'Annual Hall Dinner',
    date: 'December 2023',
    location: 'Hall Quadrangle',
    category: 'Events'
  },
  {
    id: 'g2',
    url: 'https://picsum.photos/seed/mellanby-heritage/800/600',
    title: 'The Original Mellanby Block',
    event: 'Heritage Collection',
    date: 'Est. 1952',
    location: 'Block A',
    category: 'Heritage'
  },
  {
    id: 'g3',
    url: 'https://picsum.photos/seed/mellanby-sports/800/600',
    title: 'Inter-Hall Football Finals',
    event: 'Sports Week 2023',
    date: 'November 2023',
    location: 'Sports Complex',
    category: 'Sports'
  },
  {
    id: 'g4',
    url: 'https://picsum.photos/seed/mellanby-symposium/800/600',
    title: 'Academic Symposium',
    event: 'Mellanby Lecture Series',
    date: 'October 2023',
    location: 'JCR',
    category: 'Academic'
  },
  {
    id: 'g5',
    url: 'https://picsum.photos/seed/mellanby-inaug/800/600',
    title: 'Council Inauguration',
    event: 'Executive Handover',
    date: 'September 2023',
    location: 'Conference Room',
    category: 'Events'
  },
  {
    id: 'g6',
    url: 'https://picsum.photos/seed/mellanby-arch/800/600',
    title: 'The Mellanby Arch',
    event: 'Heritage Collection',
    date: 'Est. 1952',
    location: 'Main Entrance',
    category: 'Heritage'
  },
  {
    id: 'g7',
    url: 'https://picsum.photos/seed/mellanby-basket/800/600',
    title: 'Basketball Championship',
    event: 'Inter-Block Games',
    date: 'August 2023',
    location: 'Basketball Court',
    category: 'Sports'
  },
  {
    id: 'g8',
    url: 'https://picsum.photos/seed/mellanby-grad/800/600',
    title: 'Graduation Celebration',
    event: 'Class of 2023 Send-off',
    date: 'July 2023',
    location: 'Hall Quadrangle',
    category: 'Events'
  }
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const currentIndex = selectedImage 
    ? filteredImages.findIndex(img => img.id === selectedImage.id) 
    : -1;

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="p-6 sm:p-12 lg:p-24 animate-in fade-in duration-700">
      <header className="mb-12 border-b-2 border-[#1a2a40] pb-8 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#1a2a40] uppercase tracking-tighter">GALLERY</h1>
          <p className="mono text-[#c5a059] mt-2 uppercase tracking-widest text-xs sm:text-sm">Capturing Mellanby Moments & Heritage</p>
        </div>
        <div className="flex flex-wrap gap-1 border-t xl:border-t-0 xl:border-l-2 border-black/10 pt-4 xl:pt-0 xl:pl-4">
          {['All', 'Events', 'Heritage', 'Sports', 'Academic'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 mono text-[9px] sm:text-[10px] uppercase border border-[#1a2a40] transition-all flex-grow sm:flex-grow-0
                ${filter === cat ? 'bg-[#1a2a40] text-white' : 'bg-transparent text-[#1a2a40] hover:bg-black/5'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {filteredImages.map((image) => (
          <div 
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="group relative aspect-[4/3] overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#c5a059] transition-all"
          >
            <img 
              src={image.url} 
              alt={image.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a40] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="block mono text-[8px] text-[#c5a059] uppercase tracking-widest mb-1">{image.category}</span>
              <h3 className="text-white font-bold text-sm uppercase leading-tight">{image.title}</h3>
            </div>
            <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera size={14} className="text-[#1a2a40]" />
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-black/10">
          <Camera size={48} className="text-black/5 mb-4" />
          <p className="mono text-xs text-black/30 uppercase">No images found in this category</p>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <div 
            className="absolute inset-0 bg-[#1a2a40]/95 backdrop-blur-sm" 
            onClick={() => setSelectedImage(null)} 
          />
          
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-10 bg-white/10 hover:bg-white/20 text-white p-3 transition-colors"
          >
            <X size={24} />
          </button>

          <button 
            onClick={() => navigateImage('prev')}
            className="absolute left-2 sm:left-8 z-10 bg-white/10 hover:bg-white/20 text-white p-3 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={() => navigateImage('next')}
            className="absolute right-2 sm:right-8 z-10 bg-white/10 hover:bg-white/20 text-white p-3 transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          <div className="relative z-10 max-w-5xl w-full animate-in zoom-in-95 duration-200">
            <div className="bg-[#1a2a40] border-4 border-[#c5a059] shadow-2xl overflow-hidden">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="w-full max-h-[60vh] object-contain bg-black"
              />
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <span className="mono text-[10px] text-[#c5a059] uppercase tracking-widest">{selectedImage.event}</span>
                    <h2 className="text-xl sm:text-2xl font-black text-white uppercase mt-1">{selectedImage.title}</h2>
                  </div>
                  <div className="flex flex-wrap gap-4 mono text-[10px] text-white/60 uppercase">
                    <span className="flex items-center gap-2">
                      <Calendar size={12} className="text-[#c5a059]" />
                      {selectedImage.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={12} className="text-[#c5a059]" />
                      {selectedImage.location}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="mono text-[9px] text-white/40 uppercase">
                    {currentIndex + 1} of {filteredImages.length}
                  </span>
                  <span className="px-3 py-1 bg-white/10 mono text-[9px] text-white uppercase tracking-widest">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="mt-16 pt-8 border-t border-black/10 mono text-[9px] text-black/30 uppercase tracking-widest text-center">
        Kenneth Mellanby Hall Archives • Preserving Our Legacy Since 1952
      </footer>
    </div>
  );
};

export default Gallery;
