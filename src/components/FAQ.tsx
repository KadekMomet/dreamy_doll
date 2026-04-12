import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem: React.FC<{ q: string, a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-pink-100 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 font-bold text-slate-800 text-left hover:bg-pink-50/50 transition-colors"
        aria-expanded={isOpen}
      >
        {q}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-pink-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-pink-50 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    { q: "Berapa lama pengerjaan boneka custom?", a: "Biasanya memakan waktu 3-7 hari kerja tergantung tingkat kesulitan dan antrean." },
    { q: "Apakah bisa kirim ke luar kota?", a: "Tentu! Kami melayani pengiriman ke seluruh Indonesia menggunakan jasa kurir terpercaya." },
    { q: "Bahannya aman untuk anak kecil?", a: "Ya, kami menggunakan benang katun premium dan dakron berkualitas tinggi yang aman dan hipoalergenik." },
    { q: "Bisa tambah inisial nama?", a: "Sangat bisa! Silakan cantumkan di deskripsi pesanan custom atau chat admin." }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Pertanyaan Populer (FAQ)
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
