import React from 'react';
import { Heart, Palette, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'motion/react';

const Features: React.FC = () => {
  const features = [
    { icon: <Heart className="text-pink-500" />, title: "Full Handmade", desc: "Setiap boneka dirajut manual dengan penuh ketelitian." },
    { icon: <Palette className="text-purple-500" />, title: "Custom Warna", desc: "Bebas pilih kombinasi warna kesukaanmu." },
    { icon: <ShieldCheck className="text-green-500" />, title: "Bahan Premium", desc: "Menggunakan bahan yang lembut dan tidak gampang berudul." },
    { icon: <Truck className="text-orange-500" />, title: "Pengerjaan Cepat", desc: "Pesanan custom dikerjakan dengan cepat tanpa mengurangi kualitas hasil akhir." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Kenapa Harus Dreamy Doll?</h2>
          <div className="w-16 md:w-20 h-1 bg-pink-400 mx-auto rounded-full"></div>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-6 md:p-8 bg-purple-50 rounded-2xl md:rounded-3xl transition-shadow hover:shadow-xl hover:shadow-purple-100/50"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-bold text-lg md:text-xl mb-2">{f.title}</h3>
              <p className="text-slate-600 text-xs md:text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
