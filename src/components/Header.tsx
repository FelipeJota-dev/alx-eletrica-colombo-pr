import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Galeria', href: '#galeria' },
  { name: 'Avaliações', href: '#avaliacoes' },
  { name: 'Área de Atendimento', href: '#atendimento' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg shadow-black/50 py-3 border-b border-gray-900' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-3 relative z-50">
          <img src="https://i.imgur.com/uUz5E9r.png" alt="ALX Instalações Elétricas Logo" className="h-[52px] w-auto relative scale-[1.15]" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5541999126840?text=Olá,%20vim%20pelo%20site%20da%20ALX%20Instalações%20Elétricas%20e%20gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF1F1F] hover:bg-[#D91414] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-colors shadow-[0_0_15px_rgba(255,31,31,0.3)] hover:shadow-[0_0_25px_rgba(255,31,31,0.5)] ml-2"
          >
            Chamar no WhatsApp
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="xl:hidden relative z-50 p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden absolute top-full left-0 w-full bg-[#1A1A1A] border-b border-gray-800 shadow-xl"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-300 hover:text-white block"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/5541999126840?text=Olá,%20vim%20pelo%20site%20da%20ALX%20Instalações%20Elétricas%20e%20gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF1F1F] text-white text-center px-5 py-3 rounded-md font-semibold text-base mt-4 block shadow-[0_0_15px_rgba(255,31,31,0.3)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Chamar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
