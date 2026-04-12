import React from 'react';
import { motion } from 'motion/react';

const OrderProcess: React.FC = () => {
  const steps = [
    { step: "01", title: "Pilih Produk", desc: "Pilih ganci dari katalog atau siapkan desain custom kamu." },
    { step: "02", title: "Keranjang", desc: "Masukkan ke keranjang atau isi form pesanan custom." },
    { step: "03", title: "Checkout/Konsultasi WA", desc: "Sistem otomatis membuat format pesanan ke WhatsApp admin." },
    { step: "04", title: "Pengiriman", desc: "Lakukan pembayaran, dan ganci impianmu segera dikirim sesuai kesepakatan bersama!" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-12 md:py-20 bg-pink-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-16"
        >
          Cara Mudah Memesan
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 md:space-y-8 relative"
        >
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[20px] top-0 w-0.5 bg-purple-300/50 hidden md:block"
          ></motion.div>
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="flex gap-4 md:gap-6 items-start relative z-10"
            >
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 md:w-10 md:h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm md:text-base shadow-lg shadow-pink-200"
              >
                {step.step}
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm flex-1 border border-pink-100/50 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-base md:text-lg mb-1">{step.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm">{step.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OrderProcess;
