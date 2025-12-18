import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { name: 'Audífonos', path: '/productos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="flex justify-between items-center px-4 md:px-8 py-4 max-w-[1200px] mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-gray-800 no-underline">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0093d0] to-[#0077a3] flex items-center justify-center text-white font-bold text-xl">
              e
            </div>
            <span>escucha<span className="text-[#0093d0]">+</span></span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 list-none m-0 p-0">
            {navigation.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-gray-700 font-medium no-underline relative pb-1 transition-colors hover:text-[#0093d0] ${isActive(item.path) ? 'text-[#0093d0] border-b-2 border-[#0093d0]' : ''
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="flex flex-col p-4">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="py-3 px-4 border-b border-gray-100 text-gray-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center mt-12">
        <p className="mb-1">&copy; 2025 Escucha+ Centro Auditivo. Todos los derechos reservados.</p>
        <p className="text-gray-400">Madrid, España | Tel: 912 345 678</p>
      </footer>
    </div>
  );
};

export default Layout;
