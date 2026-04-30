import { motion } from 'motion/react';
import { Zap, Cable, Radio, Activity, ShieldCheck, Wrench, Settings, Navigation, Ruler, Bolt } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Poste padrão Copel',
    description: 'Instalação completa seguindo as exigências e normas técnicas vigentes.'
  },
  {
    icon: Cable,
    title: 'Entrada de energia',
    description: 'Projetos e adequações para garantir o fornecimento seguro ao seu local.'
  },
  {
    icon: Bolt,
    title: 'Poste de transformação',
    description: 'Infraestrutura robusta para suportar equipamentos de transformação.'
  },
  {
    icon: Navigation,
    title: 'Redes de baixa tensão',
    description: 'Distribuição eficiente e segura de energia para o consumidor final.'
  },
  {
    icon: Activity,
    title: 'Redes de média tensão',
    description: 'Soluções para demandas maiores com rigoroso padrão de segurança.'
  },
  {
    icon: Ruler,
    title: 'Redes de alta tensão',
    description: 'Infraestrutura de grande porte executada com excelência técnica.'
  },
  {
    icon: Radio,
    title: 'Telefonia',
    description: 'Instalação de postes e estrutura para cabeamento telefônico e dados.'
  },
  {
    icon: Settings,
    title: 'Adequações elétricas',
    description: 'Modernização e correção de sistemas elétricos para total segurança.'
  },
  {
    icon: Wrench,
    title: 'Instalações externas',
    description: 'Serviços em redes externas com equipamentos e frota adequados.'
  },
  {
    icon: ShieldCheck,
    title: 'Manutenção',
    description: 'Diagnóstico e reparos para manter sua rede sempre regular e segura.'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#1A1A1A] relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold text-white mb-6"
          >
            Nossos Serviços
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-[#FF1F1F] mx-auto mb-6 origin-center"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg"
          >
            Executamos todas as obras de infraestrutura elétrica com rigoroso padrão técnico, garantindo segurança e rápida aprovação de orçamento.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[#0A0A0A] border border-gray-800 p-6 rounded-xl hover:border-[#FF1F1F]/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF1F1F] opacity-0 group-hover:opacity-[0.03] rounded-bl-full transition-opacity duration-500"></div>
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FF1F1F]/10 transition-colors">
                  <Icon className="text-[#FF1F1F]" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-tight font-display">{service.title}</h3>
                <p className="text-sm text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
