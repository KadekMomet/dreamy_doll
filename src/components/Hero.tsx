import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="pt-20 pb-10 md:pt-32 md:pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 space-y-4 md:space-y-6 text-center md:text-left z-10 order-2 md:order-1"
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-[1.1]"
          >
            Bawa <span className="text-pink-500">Kebahagiaan</span> Kecil di Setiap Gantungan.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            Dreamy Doll menghadirkan gantungan kunci custom dengan desain eksklusif dan kualitas premium. Cocok untuk kado, koleksi, atau souvenir.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 pt-2 md:pt-4"
          >
            <a href="#products" className="px-6 py-3 md:px-8 md:py-4 bg-pink-500 text-white rounded-xl md:rounded-2xl font-bold hover:bg-pink-600 transition shadow-lg shadow-pink-200 text-sm md:text-base text-center">
              Lihat Koleksi
            </a>
            <a href="#custom" className="px-6 py-3 md:px-8 md:py-4 bg-white border-2 border-purple-200 text-purple-500 rounded-xl md:rounded-2xl font-bold hover:bg-purple-50 transition text-sm md:text-base text-center">
              Pesan Custom
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex-1 relative mt-6 md:mt-0 w-full order-1 md:order-2"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full aspect-square max-w-[240px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-md mx-auto bg-pink-200 rounded-full overflow-hidden border-4 md:border-8 border-white shadow-2xl relative"
          >
            <img
              src="/gantungan_kunci.jpeg"
              alt="Gantungan Kunci Custom"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Floating Badge */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 md:-bottom-4 md:-left-4 bg-white p-2.5 sm:p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-2 md:gap-3"
          >
            <div className="p-1 md:p-2 bg-green-100 text-green-600 rounded-lg">
              <CheckCircle size={16} className="md:w-5 md:h-5" />
            </div>
            <p className="text-[10px] sm:text-xs md:text-sm font-bold whitespace-nowrap">100% Handmade</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
