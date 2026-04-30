import { motion } from 'motion/react';
import { MessageSquare, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-[#0A0A0A] border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              Fale conosco
            </h2>
            <div className="w-20 h-1 bg-[#FF1F1F] mb-8"></div>
            
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Tem alguma dúvida ou precisa de um orçamento para poste padrão Copel, entrada de energia ou instalações em geral? Entre em contato, nossa equipe está pronta para atender com agilidade.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#1A1A1A] p-3 rounded-lg flex-shrink-0 text-[#FF1F1F] border border-gray-800">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">WhatsApp / Telefone</h3>
                  <a href="https://wa.me/5541999126840?text=Olá,%20vim%20pelo%20site%20da%20ALX%20Instalações%20Elétricas%20e%20gostaria%20de%20solicitar%20um%20orçamento." target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-lg">
                    (41) 99912-6840
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#1A1A1A] p-3 rounded-lg flex-shrink-0 text-[#FF1F1F] border border-gray-800">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Endereço</h3>
                  <p className="text-gray-400">
                    R. das Camélias, 270 - São Dimas<br />
                    Colombo - PR, 83411-300
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#1A1A1A] p-3 rounded-lg flex-shrink-0 text-[#FF1F1F] border border-gray-800">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Horário de Atendimento</h3>
                  <p className="text-gray-400">
                    Segunda a Sábado, das 08h às 18h
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-white mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/alxinstalacoes/" target="_blank" rel="noopener noreferrer" className="bg-[#1A1A1A] p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-500 transition-all border border-gray-800 group" aria-label="Instagram">
                  <Instagram size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.facebook.com/alxinstalacoeseletricas.com.br/" target="_blank" rel="noopener noreferrer" className="bg-[#1A1A1A] p-3 rounded-lg text-gray-400 hover:text-white hover:bg-[#1877F2] transition-all border border-gray-800 group" aria-label="Facebook">
                  <Facebook size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1A1A1A] border border-gray-800 rounded-2xl p-8 lg:p-12 h-full flex flex-col justify-center"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="text-green-500" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Orçamento pelo WhatsApp</h3>
              <p className="text-gray-400">
                A maneira mais rápida de obter seu orçamento. Clique no botão abaixo para nos enviar uma mensagem diretamente.
              </p>
            </div>
            
            <a
              href="https://wa.me/5541999126840?text=Olá,%20vim%20pelo%20site%20da%20ALX%20Instalações%20Elétricas%20e%20gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#128C7E] hover:bg-[#075E54] text-white px-8 py-5 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(18,140,126,0.3)] hover:shadow-[0_0_30px_rgba(18,140,126,0.5)] flex items-center justify-center gap-3"
            >
              <MessageSquare size={24} />
              Chamar agora no WhatsApp
            </a>
            
            <p className="text-center text-gray-500 text-sm mt-6">
              Respondemos rapidamente durante o horário comercial.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
