import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => setSubmitted(true), 500);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-white">
            {/* Header - Visual gradient */}
            <div className="bg-gradient-to-r from-[#0093d0] to-[#0077a3] py-20 text-center text-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Estamos cerca de ti</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Visítanos en nuestro centro o envíanos un mensaje. Tu primera consulta es gratuita.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Form */}
                    <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
                        {submitted ? (
                            <div className="text-center py-16">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h3>
                                <p className="text-gray-500">Nos pondremos en contacto contigo lo antes posible.</p>
                                <button onClick={() => setSubmitted(false)} className="mt-8 text-primary font-bold underline">
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold mb-8 text-gray-900">Reserva tu Cita</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Nombre</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                                        <textarea
                                            name="message"
                                            rows="4"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="w-full btn btn-primary py-4 text-lg shadow-md">
                                        Enviar Solicitud
                                    </button>
                                </form>
                            </>
                        )}
                    </div>

                    {/* Info Side */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-6">Información</h3>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-1">Nuestra Clínica</h4>
                                        <p className="text-gray-500 leading-relaxed">C/ Martínez Maldonado, 52,<br />29007 Málaga</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-1">Teléfono</h4>
                                        <p className="text-gray-500">630 712 057 - 952 321 505</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-1">Horario</h4>
                                        <p className="text-gray-500">Lunes - Viernes: 09:30 - 20:00<br />Sábados: 10:00 - 14:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Card */}
                        <div className="h-64 rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative">
                            <iframe
                                src="https://maps.google.com/maps?q=Calle+Martínez+Maldonado,+52,+Málaga&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(0.8)' }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
