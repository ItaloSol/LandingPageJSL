'use client';
import { Hammer, Shield, Heart, Award, Users, Clock } from 'lucide-react';

export default function Differentials() {
  const differentials = [
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Fabricação Artesanal",
      description: "Cada faca é forjada à mão com técnicas tradicionais, garantindo unicidade e qualidade superior."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Materiais Premium",
      description: "Utilizamos apenas aços de alta qualidade e madeiras nobres selecionadas criteriosamente."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Atendimento Personalizado",
      description: "Cada cliente recebe atenção exclusiva, desde o projeto até a entrega da sua faca especial."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Exclusividade Garantida",
      description: "Peças únicas para colecionadores exigentes que valorizam a verdadeira arte da cutelaria."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experiência Comprovada",
      description: "Mais de 10 anos de experiência e centenas de clientes satisfeitos em todo o Brasil."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Tradição Preservada",
      description: "Mantemos vivas as técnicas ancestrais da cutelaria, passadas de geração em geração."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 transform translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
            Nossos Diferenciais
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Por que escolher a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              {' '}JSL ARTESANATOS?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Combinamos tradição, qualidade e inovação para criar facas artesanais 
            que superam expectativas e se tornam verdadeiros tesouros.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-amber-200 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center text-amber-600 group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white transition-all duration-300 mb-6">
                {differential.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                  {differential.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {differential.description}
                </p>
              </div>

              {/* Hover effect decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 transform translate-x-8 -translate-y-8"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-amber-100">Anos de Experiência</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-amber-100">Facas Produzidas</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-amber-100">Satisfação dos Clientes</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">5.0</div>
              <div className="text-amber-100">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}