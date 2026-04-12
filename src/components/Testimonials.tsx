import React from 'react';
import { Star, Heart } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    { name: "Siska", comment: "Gemes banget gancinya! Jahitannya rapi dan packingnya super estetik. Sukses terus Dreamy Doll!", rate: 5 },
    { name: "Andi", comment: "Order custom boneka kado buat doi, hasilnya mirip banget sama referensi. Pelayanan admin juga ramah.", rate: 5 },
    { name: "Ria", comment: "Sudah beli 3 kali di sini buat koleksi tas. Bahannya lembut dan warnanya nggak pudar.", rate: 5 }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Apa Kata Mereka?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-white border border-pink-100 rounded-3xl shadow-sm italic text-slate-600 relative">
              <div className="flex text-amber-400 mb-4">
                {[...Array(t.rate)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="mb-4">"{t.comment}"</p>
              <p className="font-bold text-slate-900 not-italic">— {t.name}</p>
              <div className="absolute -top-4 right-8 bg-pink-400 text-white p-2 rounded-full">
                <Heart size={16} fill="white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
