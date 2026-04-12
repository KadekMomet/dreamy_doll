import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cart, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = cart.reduce((a, b) => a + b.quantity, 0);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Koleksi', href: '#products' },
    { name: 'Kenapa Kami', href: '#features' },
    { name: 'Custom Order', href: '#custom' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center border border-pink-100 bg-white">
            <img 
              src="/logo.png" 
              alt="Dreamy Doll Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1559440666-302a2894f291?auto=format&fit=crop&q=80&w=100";
              }}
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-pink-600">Dreamy Doll</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="hover:text-pink-500 transition-colors">{link.name}</a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={onOpenCart}
            className="relative p-2 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-100 transition-colors focus:ring-2 focus:ring-pink-400 focus:outline-none"
            aria-label={`Buka keranjang belanja, ${cartCount} item`}
          >
            <ShoppingCart size={22} aria-hidden="true" />
            <AnimatePresence mode="popLayout">
              {cartCount > 0 && (
                <motion.span 
                  key={cartCount}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold" 
                  aria-hidden="true"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-colors focus:ring-2 focus:ring-pink-400 focus:outline-none"
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-pink-100 shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col divide-y divide-pink-50">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-bold text-slate-700 hover:text-pink-500 transition-colors py-4"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
