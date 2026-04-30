import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const features = [
    "Profissionais preparados",
    "Serviço com capricho",
    "Atendimento ágil",
    "Qualidade técnica",
    "Comprometimento com segurança"
  ];

  return (
    <section id="sobre" className="py-24 bg-[#0A0A0A] relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6 leading-tight">
              Sobre a ALX Instalações Elétricas
            </h2>
            <div className="w-20 h-1 bg-[#FF1F1F] mb-8"></div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              A ALX Instalações Elétricas é especializada em entrada de energia, poste padrão Copel, postes para posto de transformação, telefonia e redes aéreas de baixa, média e alta tensão. Com atendimento em Colombo - PR e região, a empresa se destaca pela responsabilidade, agilidade, preço justo e qualidade na execução dos serviços.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle2 className="text-[#FF1F1F] flex-shrink-0" size={20} />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-gray-800 rounded-2xl transform rotate-3 -z-10 bg-[#1A1A1A]/30"></div>
            <div className="absolute -inset-4 border border-[#FF1F1F]/20 rounded-2xl transform -rotate-2 -z-10"></div>
            <img 
              src="https://i.imgur.com/WfWlkrx.jpeg" 
              alt="Sobre a ALX Instalações Elétricas" 
              className="w-full h-auto object-cover rounded-xl shadow-2xl relative z-10 aspect-[4/3] lg:aspect-[4/5] xl:aspect-[4/4]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
