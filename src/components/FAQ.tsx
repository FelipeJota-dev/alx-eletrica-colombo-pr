import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "A ALX trabalha com poste padrão Copel?",
    a: "Sim, somos especialistas em instalação e adequação de poste padrão Copel para residências, comércios e indústrias, seguindo todas as normas técnicas vigentes."
  },
  {
    q: "Vocês fazem entrada de energia?",
    a: "Sim, executamos projetos e instalações completas de entrada de energia, garantindo segurança e conformidade com as exigências da Copel."
  },
  {
    q: "Atendem Colombo e região?",
    a: "Sim, nossa sede fica em Colombo - PR e atendemos toda a região metropolitana com agilidade e compromisso."
  },
  {
    q: "Vocês fazem redes aéreas de baixa, média e alta tensão?",
    a: "Sim, temos profissionais capacitados e equipamentos adequados para montagem e manutenção de redes aéreas de baixa, média e alta tensão."
  },
  {
    q: "Como solicitar orçamento?",
    a: "Você pode solicitar um orçamento de forma rápida e prática enviando uma mensagem para o nosso WhatsApp: (41) 99912-6840."
  },
  {
    q: "O atendimento é de segunda a sábado?",
    a: "Sim, funcionamos de segunda a sábado, das 08h às 18h, sempre prontos para atender você."
  },
  {
    q: "O serviço segue padrões de segurança?",
    a: "Com certeza. A segurança é nossa prioridade. Todos os nossos serviços são executados respeitando rigorosamente as normas técnicas da Copel e da ABNT."
  },
  {
    q: "Vocês trabalham com telefonia e postes para posto de transformação?",
    a: "Sim, atuamos também na área de telefonia e instalações de postes para posto de transformação."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#1A1A1A] border-t border-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold text-white mb-6"
          >
            Dúvidas Frequentes
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-[#FF1F1F] mx-auto"
          ></motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className={`border border-gray-800 rounded-xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'bg-[#2E2E2E]/30 border-gray-600' : 'bg-[#0A0A0A] hover:bg-[#111111]'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleOpen(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-lg text-white pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`text-[#FF1F1F] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} 
                  size={24} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400">
                      <p>{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
