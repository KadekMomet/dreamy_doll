import React, { useState } from 'react';
import { CartItem, CustomOrder, Product } from './types';
import { WHATSAPP_NUMBER } from './constants';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import OrderProcess from './components/OrderProcess';
import CustomForm from './components/CustomForm';
// import Testimonials from './components/Testimonials';
// import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

const App = () => {
  // State Management
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customOrder, setCustomOrder] = useState<CustomOrder>({
    nama: '',
    tipeBoneka: '',
    deskripsi: '',
    kontak: ''
  });

  // Cart Functions
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const calculateTotal = () => cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Send to WhatsApp
  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    let message = `Halo Admin Dreamy Doll! \n\nSaya ingin memesan produk berikut:\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (x${item.quantity}) - Rp${(item.price * item.quantity).toLocaleString()}\n`;
    });
    message += `\n*Total Akhir: Rp${calculateTotal().toLocaleString()}*\n\nMohon informasi selanjutnya ya min, terima kasih!`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo Admin Dreamy Doll! \n\nSaya ingin memesan *CUSTOM BONEKA*:\n\nNama        : ${customOrder.nama}\nBoneka      : ${customOrder.tipeBoneka}\nDeskripsi   : ${customOrder.deskripsi}\nKontak      : ${customOrder.kontak}\n\nMohon bantuannya untuk estimasi harga ya min!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-pink-50 text-slate-800 font-sans selection:bg-pink-200">
      <Navbar cart={cart} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <Features />
        <ProductShowcase onAddToCart={addToCart} />
        <OrderProcess />
        <CustomForm 
          customOrder={customOrder} 
          onOrderChange={setCustomOrder} 
          onSubmit={handleCustomSubmit} 
        />
        {/* <Testimonials />
        <FAQ /> */}
        <CTA onOpenCart={() => setIsCartOpen(true)} />
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        onUpdateQuantity={updateQuantity} 
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout} 
      />

      {/* Tailwind Animations & Global Styles */}
      <style>{`
        @keyframes slide-left {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slide-left 0.3s ease-out forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
