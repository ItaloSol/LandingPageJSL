'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Mail, MapPin, Clock, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppSubmit = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = `Olá! Meu nome é ${formData.name}. ${formData.message} Meu telefone: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleQuickWhatsApp = () => {
    const phoneNumber = "5511999999999";
    const message = "Olá! Tenho interesse em suas facas artesanais e gostaria de mais informações!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Resposta rápida",
      value: "(11) 99999-9999",
      action: handleQuickWhatsApp
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      description: "Orçamentos detalhados",
      value: "contato@jslartesanatos.com.br",
      action: () => window.open('mailto:contato@jslartesanatos.com.br', '_blank')
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      description: "Atendimento presencial",
      value: "São Paulo, SP",
      action: () => {}
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário",
      description: "Seg à Sex",
      value: "08:00 às 18:00",
      action: () => {}
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
            Entre em Contato
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Vamos conversar sobre
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              {' '}sua próxima faca
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco para orçamentos, projetos personalizados 
            ou esclarecimento de dúvidas. Estamos aqui para ajudar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Fale Conosco Diretamente
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className={`group border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                      (info.title === 'WhatsApp' || info.title === 'E-mail')
                        ? 'cursor-pointer hover:-translate-y-1' 
                        : ''
                    }`}
                    onClick={info.action}
                  >
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center text-amber-600 group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white transition-all duration-300 mx-auto">
                        {info.icon}
                      </div>
                      
                      <div className="space-y-1">
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        <p className="text-sm text-gray-500">{info.description}</p>
                        <p className="text-sm font-medium text-gray-700">{info.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-2xl p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              
              <div className="space-y-2">
                <h4 className="font-bold text-gray-900 text-lg">Atendimento Imediato</h4>
                <p className="text-gray-600">
                  Clique no botão abaixo para falar conosco agora mesmo via WhatsApp
                </p>
              </div>
              
              <Button 
                onClick={handleQuickWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Conversar no WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Envie sua Mensagem
              </CardTitle>
              <p className="text-gray-600">
                Preencha o formulário e entraremos em contato via WhatsApp
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Digite seu nome completo"
                    className="border-gray-300 focus:border-amber-500 focus:ring-amber-500 rounded-xl"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    className="border-gray-300 focus:border-amber-500 focus:ring-amber-500 rounded-xl"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre o que você está procurando, tipo de faca desejada, orçamento, etc."
                    rows={5}
                    className="border-gray-300 focus:border-amber-500 focus:ring-amber-500 rounded-xl resize-none"
                    required
                  />
                </div>
              </div>
              
              <Button 
                onClick={handleWhatsAppSubmit}
                disabled={!formData.name || !formData.phone || !formData.message}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar via WhatsApp
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Ao clicar em &quot;Enviar&ldquo;, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}