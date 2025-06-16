'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Eye, MessageCircle, Ruler, Wrench } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    description: string;
    material: string;
    dimensoes: string;
    image: string;
    price: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleWhatsAppContact = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = `Olá! Tenho interesse na ${product.title}. Gostaria de mais informações!`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="flex-1 bg-white/90 hover:bg-white text-gray-900"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Detalhes
                  </Button>
                </DialogTrigger>
                
                {isMounted && (
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-gray-900">
                        {product.title}
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                      {/* Image */}
                      <div className="relative aspect-square rounded-xl overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      
                      {/* Details */}
                      <div className="space-y-6">
                        <div>
                          <Badge className="bg-amber-500 text-white mb-4">
                            {product.price}
                          </Badge>
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {product.description}
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-900 text-lg">Especificações:</h4>
                          
                          <div className="space-y-3">
                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                              <Wrench className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                              <div>
                                <div className="font-medium text-gray-900">Material</div>
                                <div className="text-gray-600">{product.material}</div>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                              <Ruler className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                              <div>
                                <div className="font-medium text-gray-900">Dimensões</div>
                                <div className="text-gray-600">{product.dimensoes}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button 
                            onClick={handleWhatsAppContact}
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                          >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Solicitar Orçamento via WhatsApp
                          </Button>
                          
                          <p className="text-sm text-gray-500 text-center mt-2">
                            Atendimento personalizado • Entrega em todo o Brasil
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                )}
              </Dialog>
              
              <Button 
                size="sm" 
                onClick={handleWhatsAppContact}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contatar
              </Button>
            </div>
          </div>
          
          {/* Price badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-3 py-1">
              {product.price}
            </Badge>
          </div>
        </div>

        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
              {product.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-2 text-sm">
              <Wrench className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{product.material}</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <Ruler className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{product.dimensoes}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}