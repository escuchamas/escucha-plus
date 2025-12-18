import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png';

const Home = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section - Full width image with blue overlay */}
            <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${heroImage})` }}
                />
                {/* Blue Overlay / Veil */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0093d0]/90 to-[#0077a3]/80" />

                {/* Content */}
                <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8 py-16 text-white">
                    <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                        ✨ Promoción 2025
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-2xl">
                        Financia tus audífonos a 0% intereses
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-xl">
                        Disfruta de tu solución auditiva con total tranquilidad. Sin costes ni comisiones adicionales.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/contacto"
                            className="inline-block bg-white text-[#0093d0] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors text-center shadow-lg"
                        >
                            Reserva Cita Gratis
                        </Link>
                        <Link
                            to="/productos"
                            className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors text-center"
                        >
                            Ver Audífonos
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Badges - GAES style */}
            <section className="bg-white py-6 border-b">
                <div className="max-w-[1200px] mx-auto px-4 flex flex-wrap justify-center md:justify-between gap-6 text-gray-600 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <span className="text-[#0093d0] text-xl">✓</span> 0% Intereses
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#0093d0] text-xl">✓</span> Prueba Gratuita 30 días
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#0093d0] text-xl">✓</span> Garantía de Satisfacción
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#0093d0] text-xl">✓</span> Atención Personalizada
                    </div>
                </div>
            </section>

            {/* Product Grid - GAES "ampli" style */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Nuestras Soluciones Auditivas</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Tecnología avanzada para cada estilo de vida. Encuentra el audífono perfecto para ti.
                    </p>

                    <div className="grid md:grid-cols-4 gap-6">
                        <ProductCard
                            name="Invisible"
                            description="Diseño discreto que nadie notará"
                            emoji="👁️"
                        />
                        <ProductCard
                            name="Conectado"
                            description="Streaming directo desde tu móvil"
                            emoji="📱"
                        />
                        <ProductCard
                            name="Recargable"
                            description="24h de autonomía sin pilas"
                            emoji="🔋"
                        />
                        <ProductCard
                            name="Potente"
                            description="Máxima claridad para pérdidas severas"
                            emoji="🔊"
                        />
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            to="/productos"
                            className="inline-block text-[#0093d0] font-bold hover:underline"
                        >
                            Ver todos los modelos →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - GAES style */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">¿Por qué Escucha+?</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon="🏥"
                            title="Expertos Audiólogos"
                            description="Profesionales certificados con años de experiencia en salud auditiva."
                        />
                        <FeatureCard
                            icon="🎯"
                            title="Test Auditivo Gratuito"
                            description="Conoce el estado de tu audición sin coste ni compromiso."
                        />
                        <FeatureCard
                            icon="💳"
                            title="Financiación 0%"
                            description="Elige plazo y cuota sin costes añadidos. Facilidades de pago."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Banner - GAES "Reserva cita" style */}
            <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                <div className="max-w-[1200px] mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Reserva una cita gratuita</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Visita tu centro Escucha+ y revisa tu audición gratis y sin compromiso.
                    </p>
                    <Link
                        to="/contacto"
                        className="inline-block bg-[#0093d0] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#0077a3] transition-colors shadow-lg"
                    >
                        Pedir Cita Ahora
                    </Link>
                    <p className="text-gray-400 mt-6 text-sm">
                        📞 También puedes llamarnos: 912 345 678
                    </p>
                </div>
            </section>
        </div>
    );
};

const ProductCard = ({ name, description, emoji }) => (
    <Link
        to="/productos"
        className="block bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 group"
    >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0093d0] to-[#0077a3] flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform">
            {emoji}
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
        <span className="inline-block mt-4 text-[#0093d0] font-semibold text-sm group-hover:underline">
            Más información →
        </span>
    </Link>
);

const FeatureCard = ({ icon, title, description }) => (
    <div className="text-center p-6">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default Home;
