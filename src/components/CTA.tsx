import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface CTAProps {
  onOpenCart: () => void;
}

const CTA: React.FC<CTAProps> = ({ onOpenCart }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-pink-400 to-purple-500 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl font-black">Siap Memiliki Boneka Lucumu?</h2>
          <p className="text-pink-50 text-lg max-w-xl mx-auto">
            Klik tombol di bawah untuk mulai belanja atau konsultasi langsung dengan admin via WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={onOpenCart}
              className="px-10 py-4 bg-white text-pink-600 rounded-2xl font-black hover:scale-105 transition shadow-xl"
            >
              Mulai Belanja
            </button>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="px-10 py-4 bg-purple-700/30 text-white border border-purple-300 rounded-2xl font-black hover:bg-purple-700/50 transition flex items-center gap-2"
            >
              <MessageCircle size={20} /> Chat Admin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
