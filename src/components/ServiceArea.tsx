import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function ServiceArea() {
  return (
    <section id="atendimento" className="py-24 bg-[#0A0A0A] border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              Atendimento em Colombo - PR e região
            </h2>
            <div className="w-20 h-1 bg-[#FF1F1F] mb-8"></div>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Nossa sede está localizada em Colombo - PR. Atendemos toda a região metropolitana com agilidade e compromisso em oferecer os melhores serviços elétricos com qualidade e segurança.
            </p>
            
            <div className="flex items-start gap-4 bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
              <div className="bg-[#FF1F1F]/10 p-3 rounded-lg flex-shrink-0 mt-1">
                <MapPin className="text-[#FF1F1F]" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Endereço</h3>
                <p className="text-gray-400 leading-relaxed">
                  R. das Camélias, 270 - São Dimas<br />
                  Colombo - PR, 83411-300
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] w-full rounded-xl overflow-hidden border border-gray-800 shadow-2xl relative bg-gray-900"
          >
            <iframe 
              src="https://maps.google.com/maps?q=R.%20das%20Cam%C3%A9lias%2C%20270%20-%20S%C3%A3o%20Dimas%2C%20Colombo%20-%20PR%2C%2083411-300&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              title="Mapa ALX Instalações Elétricas"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
