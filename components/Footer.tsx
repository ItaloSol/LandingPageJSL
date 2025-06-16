'use client';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Instagram, Facebook, Utensils } from 'lucide-react';

export default function Footer() {
  const handleWhatsAppContact = () => {
    const phoneNumber = "5511999999999";
    const message = "Olá! Gostaria de mais informações sobre as facas artesanais!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">JSL ARTESANATOS</h3>
                <p className="text-gray-400 text-sm">Cutelaria Artesanal</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Tradição e excelência na fabricação de facas artesanais. 
              Cada peça é única, forjada com paixão e dedicação aos detalhes, 
              para colecionadores que valorizam a verdadeira arte da cutelaria.
            </p>
            
            <div className="flex gap-4">
              <Button
                onClick={handleWhatsAppContact}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              
              <Button
                onClick={() => window.open('mailto:contato@jslartesanatos.com.br', '_blank')}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-2 rounded-xl"
              >
                <Mail className="w-4 h-4 mr-2" />
                E-mail
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Navegação</h4>
            <nav className="space-y-3">
              {[
                { label: 'Início', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                { label: 'Sobre', action: () => scrollToSection('sobre') },
                { label: 'Produtos', action: () => scrollToSection('produtos') },
                { label: 'Contato', action: () => scrollToSection('contato') }
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="block text-gray-300 hover:text-amber-400 transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contato</h4>
            <div className="space-y-4 text-gray-300">
              <div>
                <div className="font-medium text-white">WhatsApp</div>
                <div>(11) 99999-9999</div>
              </div>
              
              <div>
                <div className="font-medium text-white">E-mail</div>
                <div>contato@jslartesanatos.com.br</div>
              </div>
              
              <div>
                <div className="font-medium text-white">Localização</div>
                <div>São Paulo, SP</div>
              </div>
              
              <div>
                <div className="font-medium text-white">Horário</div>
                <div>Seg à Sex: 08:00 às 18:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-white mb-2">Siga-nos nas Redes Sociais</h4>
              <p className="text-gray-400 text-sm">Acompanhe nossos trabalhos e novidades</p>
            </div>
            
            <div className="flex gap-4">
              <Button
                onClick={() => window.open('https://instagram.com/jslartesanatos', '_blank')}
                variant="outline"
                size="icon"
                className="border-gray-600 text-gray-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:border-transparent hover:text-white rounded-xl"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              
              <Button
                onClick={() => window.open('https://facebook.com/jslartesanatos', '_blank')}
                variant="outline"
                size="icon"
                className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-transparent hover:text-white rounded-xl"
              >
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="text-center md:text-left">
              <p>© 2025 JSL ARTESANATOS. Todos os direitos reservados.</p>
            </div>
            
            <div className="flex gap-6 text-center md:text-right">
              <span>Desenvolvido com ❤️ para a arte da cutelaria</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}