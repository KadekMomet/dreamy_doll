import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl p-4 shadow-sm border border-pink-50 group hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-2 right-2 px-2 py-1 bg-white/90 backdrop-blur rounded-lg text-[10px] font-bold text-pink-600" aria-label={`Kategori: ${product.category}`}>
          {product.category}
        </div>
        
        <AnimatePresence>
          {isAdded && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute inset-0 bg-pink-500/20 backdrop-blur-[2px] flex items-center justify-center z-10"
            >
              <motion.div 
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                className="bg-white p-3 rounded-full shadow-lg text-pink-500"
              >
                <Check size={24} strokeWidth={3} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <h3 className="font-bold text-slate-800 mb-1">{product.name}</h3>
      <p className="text-pink-500 font-bold mb-4">Rp{product.price.toLocaleString()}</p>
      
      <button 
        onClick={handleAdd}
        disabled={isAdded}
        className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 focus:ring-2 focus:outline-none ${
          isAdded 
            ? 'bg-green-500 text-white focus:ring-green-400' 
            : 'bg-purple-100 text-purple-600 hover:bg-purple-500 hover:text-white focus:ring-purple-400'
        }`}
        aria-label={isAdded ? `${product.name} berhasil ditambahkan` : `Tambah ${product.name} ke keranjang`}
      >
        {isAdded ? (
          <>
            <Check size={16} aria-hidden="true" /> Berhasil!
          </>
        ) : (
          <>
            <Plus size={16} aria-hidden="true" /> Keranjang
          </>
        )}
      </button>
    </motion.div>
  );
};

interface ProductShowcaseProps {
  onAddToCart: (product: Product) => void;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const categories = ['Semua', 'Hewan', 'Tanaman', 'Lainnya'];

  const filteredProducts = selectedCategory === 'Semua' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-2">Koleksi Kami</h2>
            <p className="text-slate-500">Pilih ganci lucu untuk menemani harimu</p>
          </motion.div>
          
          <div className="flex gap-2 p-1 bg-pink-50 rounded-full border border-pink-100 overflow-x-auto no-scrollbar">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-6 py-2 rounded-full text-sm font-bold transition-colors duration-300 whitespace-nowrap ${
                  selectedCategory === cat ? 'text-white' : 'text-slate-500 hover:text-pink-500'
                }`}
              >
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-pink-500 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-slate-400">Belum ada koleksi untuk kategori ini..</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;
