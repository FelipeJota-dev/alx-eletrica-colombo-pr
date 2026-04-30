import { motion } from 'motion/react';
import { Star, MessageSquare, Image, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="bg-[#0A0A0A] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-3xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6 bg-[#1A1A1A] border border-gray-800 w-fit px-4 py-2 rounded-full"
            >
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={`star-${i}`} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-200">5,0 estrelas no Google • 16 avaliações</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-display font-bold leading-[1.1] mb-6 text-white"
            >
              Poste Padrão Copel e <span className="text-[#FF1F1F]">Entrada de Energia</span> em Colombo - PR
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed"
            >
              Especialistas em entrada de energia, poste padrão Copel, postes para posto de transformação, telefonia e redes aéreas de baixa, média e alta tensão.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/5541999126840?text=Olá,%20vim%20pelo%20site%20da%20ALX%20Instalações%20Elétricas%20e%20gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#FF1F1F] hover:bg-[#D91414] text-white px-8 py-4 rounded-md font-semibold text-lg transition-all shadow-[0_0_20px_rgba(255,31,31,0.4)] hover:shadow-[0_0_30px_rgba(255,31,31,0.6)]"
              >
                <MessageSquare size={20} />
                Solicitar orçamento no WhatsApp
              </a>
              <a
                href="#galeria"
                className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#2E2E2E] border border-gray-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
              >
                <Image size={20} />
                Ver serviços realizados
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 flex items-center gap-3 text-sm text-gray-400"
            >
               <ShieldCheck className="text-[#FF1F1F]" size={24} />
               <span>Serviço executado com segurança e normas rigorosas.</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-auto w-full"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF1F1F]/20 to-transparent blur-3xl rounded-full z-0 pointer-events-none"></div>
            <img 
              src="https://i.imgur.com/V4DcVrY.png" 
              alt="Instalação de Poste Padrão Copel" 
              className="w-full h-auto object-cover rounded-xl shadow-2xl relative z-10 border border-gray-800"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
