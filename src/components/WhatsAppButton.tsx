import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href="https://wa.me/5541999126840?text=Olá,%20vim%20pelo%20site%20da%20ALX%20Instalações%20Elétricas%20e%20gostaria%20de%20solicitar%20um%20orçamento."
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] flex items-center justify-center rounded-full text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Chamar no WhatsApp"
      >
        <MessageSquare size={32} className="group-hover:animate-pulse" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-white text-black font-semibold text-sm py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap shadow-lg">
          Solicitar orçamento
          <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 border-[6px] border-transparent border-l-white"></div>
        </div>
      </a>
    </motion.div>
  );
}
