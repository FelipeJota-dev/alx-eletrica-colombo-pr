import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, Zap } from 'lucide-react';

export default function Popup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup every 2 minutes (120,000 ms)
    const showPopup = () => {
      setIsVisible(true);
    };

    const initialTimer = setTimeout(showPopup, 120000);
    
    let intervalTimer: ReturnType<typeof setInterval>;
    if (!isVisible) {
       intervalTimer = setInterval(() => {
         setIsVisible(true);
       }, 120000);
    }

    return () => {
      clearTimeout(initialTimer);
      if (intervalTimer) clearInterval(intervalTimer);
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          ></motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-[#1A1A1A] border border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 max-w-sm w-full relative z-10 text-center"
          >
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              aria-label="Fechar popup"
            >
              <X size={24} />
            </button>

            <div className="w-16 h-16 bg-[#FF1F1F]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="text-[#FF1F1F]" size={32} />
            </div>

            <h3 className="text-xl font-display font-bold text-white mb-4">
              Precisa de poste padrão Copel ou entrada de energia?
            </h3>
            
            <p className="text-gray-400 mb-8">
              Fale com a ALX pelo WhatsApp e solicite um orçamento sem compromisso com nossos especialistas.
            </p>

            <a
              href="https://wa.me/5541999126840?text=Olá,%20vim%20pelo%20site%20da%20ALX%20Instalações%20Elétricas%20e%20gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="w-full bg-[#FF1F1F] hover:bg-[#D91414] text-white px-6 py-4 rounded-lg font-bold text-base transition-colors shadow-[0_0_15px_rgba(255,31,31,0.3)] flex items-center justify-center gap-2"
            >
              <MessageSquare size={20} />
              Solicitar orçamento
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
