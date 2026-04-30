import { motion } from 'motion/react';
import { Star, Shield, HardHat, Clock, ThumbsUp, DollarSign, Users, MapPin } from 'lucide-react';

const diffs = [
  { icon: HardHat, text: 'Especialistas em poste padrão Copel' },
  { icon: Clock, text: 'Atendimento com agilidade' },
  { icon: ThumbsUp, text: 'Serviço de qualidade comprovada' },
  { icon: DollarSign, text: 'Preço justo' },
  { icon: Users, text: 'Equipe qualificada' },
  { icon: Shield, text: 'Segurança e responsabilidade' },
  { icon: Star, text: '5 estrelas no Google' },
  { icon: MapPin, text: 'Atendimento em Colombo e região' }
];

export default function Differentials() {
  return (
    <section className="py-20 bg-[#FF1F1F] text-white overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-display font-bold text-center mb-12"
        >
          Por que escolher a ALX?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diffs.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-4 bg-black/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-black/20 transition-colors"
              >
                <div className="bg-white/20 p-2 rounded-md">
                  <Icon className="text-white" size={24} />
                </div>
                <span className="font-semibold text-lg">{item.text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
