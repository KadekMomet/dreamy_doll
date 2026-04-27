import React from 'react';
import { CheckCircle } from 'lucide-react';
import { CustomOrder } from '../types';

interface CustomFormProps {
  customOrder: CustomOrder;
  onOrderChange: (order: CustomOrder) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const CustomForm: React.FC<CustomFormProps> = ({ customOrder, onOrderChange, onSubmit }) => {
  return (
    <section id="custom" className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 shadow-2xl shadow-pink-100 flex flex-col lg:flex-row gap-8 md:gap-12 border border-pink-50">
          <div className="flex-1 space-y-4 md:space-y-6">
            <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest inline-block">Wujudkan Imajinasi</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">Punya Desain <span className="text-pink-500">Sendiri?</span></h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Kami menerima pesanan kustom! Kirimkan deskripsi boneka impianmu, mulai dari warna, ukuran, hingga detail aksesori. Admin kami akan segera menghubungimu untuk konsultasi harga.
            </p>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center"><CheckCircle size={14} className="md:w-4 md:h-4"/></div>
                <span className="text-xs md:text-sm font-medium">Bebas pilih warna</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center"><CheckCircle size={14} className="md:w-4 md:h-4"/></div>
                <span className="text-xs md:text-sm font-medium">Estimasi pengerjaan 1-5 hari</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center"><CheckCircle size={14} className="md:w-4 md:h-4"/></div>
                <span className="text-xs md:text-sm font-medium">Bisa request bentuk sesuai pola</span>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-pink-50 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem]">
            <form onSubmit={onSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label htmlFor="nama" className="block text-xs md:text-sm font-bold text-slate-700 mb-1">Nama Kamu</label>
                <input 
                  id="nama"
                  required
                  className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm md:text-base"
                  placeholder="Contoh: Budi"
                  value={customOrder.nama}
                  onChange={e => onOrderChange({...customOrder, nama: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="tipeBoneka" className="block text-xs md:text-sm font-bold text-slate-700 mb-1">Bentuk / Tipe</label>
                <input 
                  id="tipeBoneka"
                  required
                  className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm md:text-base"
                  placeholder="Contoh: Beruang Topi Merah"
                  value={customOrder.tipeBoneka}
                  onChange={e => onOrderChange({...customOrder, tipeBoneka: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="deskripsi" className="block text-xs md:text-sm font-bold text-slate-700 mb-1">Deskripsi Tambahan</label>
                <textarea 
                  id="deskripsi"
                  rows={3}
                  className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm md:text-base"
                  placeholder="Beri detail seperti warna atau ukuran..."
                  value={customOrder.deskripsi}
                  onChange={e => onOrderChange({...customOrder, deskripsi: e.target.value})}
                ></textarea>
              </div>
              <div>
                <label htmlFor="kontak" className="block text-xs md:text-sm font-bold text-slate-700 mb-1">Nomor WA / Kontak</label>
                <input 
                  id="kontak"
                  required
                  className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm md:text-base"
                  placeholder="Contoh: 08123xxx"
                  value={customOrder.kontak}
                  onChange={e => onOrderChange({...customOrder, kontak: e.target.value})}
                />
              </div>
              <button type="submit" className="w-full py-3.5 md:py-4 bg-pink-500 text-white rounded-xl font-bold hover:bg-pink-600 transition shadow-lg shadow-pink-200 text-sm md:text-base focus:ring-2 focus:ring-pink-400 focus:outline-none">
                Kirim ke WhatsApp
              </button>
              <p className="text-[10px] md:text-xs text-pink-600 font-medium text-center mt-2 italic">
                *Kirim gambar referensi langsung di chat WA nanti ya!
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomForm;
