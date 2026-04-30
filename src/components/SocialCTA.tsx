import { motion } from 'motion/react';
import { Instagram, Facebook } from 'lucide-react';

export default function SocialCTA() {
  return (
    <section className="py-20 bg-[#1A1A1A] border-t border-gray-900 border-b relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-[#FF1F1F]/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-display font-bold text-white mb-6"
        >
          Quer ver mais serviços realizados?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-300 text-lg mb-10"
        >
          Acompanhe a ALX nas redes sociais e veja mais trabalhos de entrada de energia, poste padrão Copel e instalações elétricas.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://www.instagram.com/alxinstalacoes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white px-8 py-4 rounded-md font-semibold text-lg transition-opacity"
          >
            <Instagram size={24} />
            Ver mais no Instagram
          </a>
          <a
            href="https://www.facebook.com/alxinstalacoeseletricas.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#1864D9] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
          >
            <Facebook size={24} />
            Ver mais no Facebook
          </a>
        </motion.div>
      </div>
    </section>
  );
}
