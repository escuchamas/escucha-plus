import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Info } from 'lucide-react';

const Products = () => {
    const products = [
        {
            id: 1,
            name: "Invisible",
            description: "Máxima discreción. Se coloca profundamente en el canal auditivo.",
            features: ["100% Invisible", "Sonido Natural"],
            price: "Gama Premium"
        },
        {
            id: 2,
            name: "Conectado",
            description: "Smart Hearing. Control total desde tu smartphone.",
            features: ["Bluetooth", "Streaming Directo", "App Control"],
            price: "Gama Avanzada"
        },
        {
            id: 3,
            name: "Recargable",
            description: "Olvídate de las pilas con nuestra batería de larga duración.",
            features: ["24h Autonomía", "Carga Rápida"],
            price: "Gama Confort"
        },
        {
            id: 4,
            name: "Potencia",
            description: "Para pérdidas severas. Robustez y claridad máxima.",
            features: ["Super Potencia", "Cancelación Ruido"],
            price: "Gama Essential"
        }
    ];

    return (
        <div className="bg-white">
            {/* Header - Visual gradient */}
            <div className="bg-gradient-to-r from-[#0093d0] to-[#0077a3] py-20 text-center text-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestras Soluciones</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        Trabajamos con tecnología líder para ofrecerte el sonido más puro y natural.
                        Encuentra el dispositivo que se adapta a tu estilo de vida.
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {products.map((product) => (
                        <div key={product.id} className="group border border-gray-100 rounded-3xl p-10 hover:shadow-xl transition-all duration-300 bg-white hover:border-blue-50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-blue-50 text-primary px-4 py-2 rounded-bl-2xl text-xs font-bold uppercase tracking-wider">
                                {product.price}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                {product.description}
                            </p>

                            <div className="flex flex-wrap gap-3 mb-10">
                                {product.features.map((feature, idx) => (
                                    <span key={idx} className="bg-gray-50 text-gray-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5">
                                        <Check size={14} className="text-primary" /> {feature}
                                    </span>
                                ))}
                            </div>

                            <Link to="/contacto" className="w-full btn btn-outline group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                                Más Información
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
