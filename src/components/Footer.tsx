import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
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
          <p className="text-slate-500 text-sm leading-relaxed">
            Membangun dunia mungil yang penuh warna lewat rajutan benang yang dirajut dengan penuh cinta.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Navigasi</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li><a href="#hero" className="hover:text-pink-500">Home</a></li>
            <li><a href="#products" className="hover:text-pink-500">Produk</a></li>
            <li><a href="#custom" className="hover:text-pink-500">Custom Order</a></li>
            <li><a href="#faq" className="hover:text-pink-500">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Hubungi Kami</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-2"><MessageCircle size={16} /> 0812-3456-7890</li>
            <li className="flex items-center gap-2">📍 Jakarta, Indonesia</li>
            <li className="flex items-center gap-2"><Instagram size={16} /> @dreamydoll.id</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Ikuti Kami</h4>
          <div className="flex gap-4">
            <a 
              href="https://instagram.com/dreamydoll.id" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition focus:ring-2 focus:ring-pink-400 focus:outline-none" 
              title="Instagram"
              aria-label="Instagram Dreamy Doll"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
            <a 
              href="https://www.tiktok.com/@dreamydoll26_?is_from_webapp=1&sender_device=pc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition focus:ring-2 focus:ring-pink-400 focus:outline-none" 
              title="TikTok"
              aria-label="TikTok Dreamy Doll"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-[18px] h-[18px]"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V15.5c0 1.93-.76 3.81-2.12 5.17-1.36 1.36-3.24 2.12-5.17 2.12-1.93 0-3.81-.76-5.17-2.12a7.313 7.313 0 0 1-2.12-5.17c0-1.93.76-3.81 2.12-5.17 1.36-1.36 3.24-2.12 5.17-2.12.38 0 .76.03 1.13.09v4.07c-.37-.06-.75-.09-1.13-.09-1.24 0-2.43.49-3.31 1.37-.88.88-1.37 2.07-1.37 3.31s.49 2.43 1.37 3.31c.88.88 2.07 1.37 3.31 1.37s2.43-.49 3.31-1.37c.88-.88 1.37-2.07 1.37-3.31V0h.02z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-slate-400 text-xs border-t border-pink-50 pt-10">
        © 2024 Dreamy Doll. All Rights Reserved. Made with ❤️ by Dreamy Team.
      </div>
    </footer>
  );
};

export default Footer;
