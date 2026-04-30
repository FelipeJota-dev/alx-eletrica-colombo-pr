import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "André Pizoni",
    text: "Super recomendo! Excelente trabalho! Com qualidade e profissionais preparados.",
    rating: 5
  },
  {
    name: "Pedro Alves",
    text: "Excelente atendimento, serviço de qualidade, preço bom, nota 10, indico com certeza.",
    rating: 5
  },
  {
    name: "Tiago Zilio",
    text: "Empresa de muita responsabilidade e agilidade. Super indico.",
    rating: 5
  },
  {
    name: "Carla De Bona",
    text: "Profissionais muito educados e qualificados, serviço bem executado e com preço justo.",
    rating: 5
  },
  {
    name: "Fernanda Rosa",
    text: "Preço justo e serviço de qualidade. Profissional muito atencioso e agilidade na entrega.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-display font-bold text-white mb-6"
            >
              O que os clientes dizem
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-[#FF1F1F]"
            ></motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 bg-[#1A1A1A] px-6 py-3 rounded-full border border-gray-800"
          >
            <span className="text-2xl font-bold text-white">5,0</span>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-400 text-sm ml-2">16 avaliações</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#1A1A1A] p-8 rounded-xl border border-gray-800 relative group hover:border-gray-700 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-gray-800 group-hover:text-gray-700 transition-colors" size={48} />
              <div className="flex text-yellow-500 mb-4 relative z-10">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 relative z-10 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex flex-shrink-0 items-center justify-center text-gray-400 font-bold">
                  {review.name.charAt(0)}
                </div>
                <span className="font-semibold text-white">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
