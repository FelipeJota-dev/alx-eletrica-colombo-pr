import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const galleryImages = [
  "https://i.imgur.com/tl6eyd1.png",
  "https://i.imgur.com/OIHULBg.png",
  "https://i.imgur.com/AabdU5D.png",
  "https://i.imgur.com/eMpJucT.png",
  "https://i.imgur.com/GOkg4mC.png",
  "https://i.imgur.com/V0HaJvW.png",
  "https://i.imgur.com/L3UCUWJ.png",
  "https://i.imgur.com/Trysoiy.png",
  "https://i.imgur.com/REc0Fg0.png",
  "https://i.imgur.com/Tuwm4IL.png",
  "https://i.imgur.com/F9CZdYe.png",
  "https://i.imgur.com/DVuSB9l.png",
  "https://i.imgur.com/OBk0lYR.png",
  "https://i.imgur.com/T9IUR4A.png",
  "https://i.imgur.com/zzs6FBK.png",
  "https://i.imgur.com/DqgsjTA.png",
  "https://i.imgur.com/ocwvQb9.png",
  "https://i.imgur.com/CBrJD8S.png",
  "https://i.imgur.com/Opq53KO.png"
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="galeria" className="py-24 bg-[#0A0A0A] border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold text-white mb-6"
          >
            Serviços Realizados
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-[#FF1F1F] mx-auto"
          ></motion.div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-900/50 leading-none border border-gray-800 break-inside-avoid"
              onClick={() => openLightbox(idx)}
            >
              <img 
                src={src} 
                alt={`Serviço realizado por ALX Instalações Elétricas ${idx + 1}`} 
                loading="lazy"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center lightbox-overlay"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-[101]"
              onClick={closeLightbox}
              aria-label="Fechar galeria"
            >
              <X size={36} />
            </button>
            
            <button 
              className="absolute left-4 sm:left-10 text-white/50 hover:text-white transition-colors z-[101] p-2 bg-black/20 hover:bg-black/50 rounded-full"
              onClick={prevImage}
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={48} />
            </button>
            
            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              src={galleryImages[selectedIndex]}
              alt={`Serviço realizado ampliado ${selectedIndex + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button 
              className="absolute right-4 sm:right-10 text-white/50 hover:text-white transition-colors z-[101] p-2 bg-black/20 hover:bg-black/50 rounded-full"
              onClick={nextImage}
              aria-label="Próxima imagem"
            >
              <ChevronRight size={48} />
            </button>
            
            <div className="absolute bottom-6 left-0 w-full text-center text-white/70 font-medium tracking-widest text-sm z-[101] select-none">
              {selectedIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
