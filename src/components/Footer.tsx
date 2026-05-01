import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-16 pb-8 border-t border-gray-900 border-opacity-50 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <img 
              src="https://i.imgur.com/UxNDsrv.png" 
              alt="ALX Instalações Elétricas Logo" 
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empresa com atuação sólida, oferecendo soluções completas com agilidade, preço justo e qualidade total, do padrão à alta tensão.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/alxinstalacoes/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram ALX">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/alxinstalacoeseletricas.com.br/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors" aria-label="Facebook ALX">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#servicos" className="text-gray-400 hover:text-vermelho-energia transition-colors text-sm">Poste padrão Copel</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-vermelho-energia transition-colors text-sm">Entrada de energia</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-vermelho-energia transition-colors text-sm">Poste de transformação</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-vermelho-energia transition-colors text-sm">Redes aéreas (BT, MT, AT)</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-vermelho-energia transition-colors text-sm">Telefonia</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Links Úteis</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors text-sm">Início</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors text-sm">Sobre a empresa</a></li>
              <li><a href="#galeria" className="text-gray-400 hover:text-white transition-colors text-sm">Galeria de serviços</a></li>
              <li><a href="#avaliacoes" className="text-gray-400 hover:text-white transition-colors text-sm">Avaliações</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">Dúvidas Frequentes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">
                <strong className="block text-gray-300 font-semibold mb-1">Telefone / WhatsApp:</strong>
                (41) 99912-6840
              </li>
              <li className="text-gray-400 text-sm">
                <strong className="block text-gray-300 font-semibold mb-1">Endereço:</strong>
                R. das Camélias, 270 - São Dimas<br/>Colombo - PR, 83411-300
              </li>
              <li className="text-gray-400 text-sm">
                <strong className="block text-gray-300 font-semibold mb-1">Horário:</strong>
                Seg a Sáb, 08h às 18h
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} ALX Instalações Elétricas. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Poste padrão Copel, entrada de energia e instalações elétricas em Colombo - PR.
          </p>
        </div>
      </div>
    </footer>
  );
}
