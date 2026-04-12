import React from 'react';
import { ShoppingCart, X, Minus, Plus, MessageCircle, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const calculateTotal = () => cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="cart-title">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={onClose}
          />
          
          {/* Drawer Content */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 id="cart-title" className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <ShoppingCart className="text-pink-500" aria-hidden="true" /> Keranjang Kamu
              </h2>
              <button 
                onClick={onClose} 
                className="p-2 hover:bg-pink-50 rounded-full transition focus:ring-2 focus:ring-pink-400 focus:outline-none"
                aria-label="Tutup keranjang"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                  <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center">
                    <ShoppingCart size={32} aria-hidden="true" />
                  </div>
                  <p>Keranjang kamu masih kosong nih..</p>
                </div>
              ) : (
                cart.map(item => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={item.id} 
                    className="flex gap-4 p-4 bg-pink-50 rounded-2xl border border-pink-100"
                  >
                    <img src={item.image} className="w-20 h-20 rounded-xl object-cover" alt={item.name} referrerPolicy="no-referrer" />
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-bold text-slate-800 leading-tight">{item.name}</h4>
                        <span className="text-pink-600 font-black text-sm whitespace-nowrap">
                          Rp{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-slate-400 text-[10px] mb-2">Rp{item.price.toLocaleString()} / pcs</p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)} 
                            className="w-8 h-8 bg-white border border-pink-200 rounded-lg flex items-center justify-center hover:bg-pink-500 hover:text-white transition focus:ring-2 focus:ring-pink-400 focus:outline-none"
                            aria-label={`Kurangi jumlah ${item.name}`}
                          >
                            <Minus size={14} aria-hidden="true" />
                          </button>
                          <span className="font-bold text-sm w-4 text-center" aria-label={`Jumlah: ${item.quantity}`}>{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)} 
                            className="w-8 h-8 bg-white border border-pink-200 rounded-lg flex items-center justify-center hover:bg-pink-500 hover:text-white transition focus:ring-2 focus:ring-pink-400 focus:outline-none"
                            aria-label={`Tambah jumlah ${item.name}`}
                          >
                            <Plus size={14} aria-hidden="true" />
                          </button>
                        </div>
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition focus:ring-2 focus:ring-red-400 focus:outline-none"
                          aria-label={`Hapus ${item.name} dari keranjang`}
                          title="Hapus item"
                        >
                          <Trash2 size={18} aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="mt-8 border-t border-pink-100 pt-6 space-y-4">
                <div className="flex justify-between items-center text-lg font-black text-slate-900">
                  <span>Total Bayar:</span>
                  <span>Rp{calculateTotal().toLocaleString()}</span>
                </div>
                <button 
                  onClick={onCheckout}
                  className="w-full py-4 bg-green-600 text-white rounded-2xl font-black text-lg hover:bg-green-700 transition flex items-center justify-center gap-3 shadow-xl shadow-green-100"
                >
                  <MessageCircle size={22} /> Kirim ke WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
