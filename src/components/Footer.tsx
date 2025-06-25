import React from 'react';
import { Phone, Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-amber-400 mb-4">
              JSL Artesanatos
            </h3>
            <p className="font-inter text-gray-300 mb-4 leading-relaxed">
              Especialistas em expositores premium personalizados para colecionadores exigentes.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={16} />
              <span className="font-inter text-sm">Santa Catarina, Brasil</span>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-inter font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/554791334961" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-300"
              >
                <MessageCircle size={18} />
                <span className="font-inter">(47) 9133-4961</span>
              </a>
              <a 
                href="tel:+554791334961"
                className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-300"
              >
                <Phone size={18} />
                <span className="font-inter">(47) 9133-4961</span>
              </a>
              <a 
                href="mailto:contato@jslartesanatos.com.br"
                className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-300"
              >
                <Mail size={18} />
                <span className="font-inter">contato@jslartesanatos.com.br</span>
              </a>
            </div>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-inter font-semibold text-white mb-4">Redes Sociais</h4>
            <div className="space-y-3">
              <a 
                href="https://instagram.com/jslartesanatos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-300"
              >
                <Instagram size={18} />
                <span className="font-inter">@jslartesanatos</span>
              </a>
            </div>
            
            <div className="mt-6 p-4 bg-neutral-900 rounded-xl border border-neutral-800">
              <p className="font-inter text-sm text-gray-400 mb-2">Horário de Atendimento:</p>
              <p className="font-inter text-sm text-white">Segunda a Sexta: 8h às 18h</p>
              <p className="font-inter text-sm text-white">Sábado: 8h às 12h</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 pt-6 text-center">
          <p className="font-inter text-sm text-gray-400">
            © 2024 JSL Artesanatos. Todos os direitos reservados. | 
            <span className="text-amber-400"> Expositores Premium Personalizados</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;