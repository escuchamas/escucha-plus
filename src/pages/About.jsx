import React from 'react';
import { Users, Award, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white">
            {/* Header - Visual gradient */}
            <div className="bg-gradient-to-r from-[#0093d0] to-[#0077a3] py-20 text-center text-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Somos un equipo apasionado por la salud auditiva, dedicados a mejorar la calidad de vida de nuestros pacientes.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                Fundado en 2010, el Centro Auditivo nació con la misión de proporcionar soluciones auditivas accesibles y de alta calidad.
                                Entendemos que la audición es fundamental para la conexión humana y el bienestar emocional.
                            </p>
                            <p>
                                Durante más de una década, hemos ayudado a miles de personas a reencontrarse con los sonidos que aman:
                                la risa de un nieto, la música favorita o simplemente una conversación clara en un restaurante.
                            </p>
                        </div>
                    </div>
                    <div className="bg-blue-100 rounded-2xl h-80 flex items-center justify-center">
                        {/* Image Placeholder */}
                        <Users className="w-32 h-32 text-primary opacity-20" />
                    </div>
                </div>

                {/* Values */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <ValueCard
                        icon={<Heart className="w-10 h-10 text-accent" />}
                        title="Empatía"
                        description="Tratamos a cada paciente como si fuera de nuestra familia, con paciencia y comprensión."
                    />
                    <ValueCard
                        icon={<Award className="w-10 h-10 text-primary" />}
                        title="Excelencia"
                        description="Nos formamos continuamente para ofrecer los diagnósticos más precisos y las mejores soluciones."
                    />
                    <ValueCard
                        icon={<Users className="w-10 h-10 text-green-500" />}
                        title="Cercanía"
                        description="Estamos siempre disponibles para resolver dudas, ajustar audífonos y acompañarte en el proceso."
                    />
                </div>

                {/* Team Section (Simplified) */}
                <div className="text-center">
                    <h2 className="title mb-12">Nuestro Equipo</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <TeamMember name="Ana Torregrosa" role="Directora Técnica - Audióloga" />
                        <TeamMember name="Carlos Ruiz" role="Especialista en Audífonos" />
                        <TeamMember name="María López" role="Atención al Paciente" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ValueCard = ({ icon, title, description }) => (
    <div className="text-center p-6 border rounded-xl hover:shadow-md transition-shadow">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const TeamMember = ({ name, role }) => (
    <div className="bg-gray-50 rounded-xl p-6">
        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Users className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="font-bold text-lg text-gray-900">{name}</h3>
        <p className="text-primary">{role}</p>
    </div>
);

export default About;
