export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CustomOrder {
  nama: string;
  tipeBoneka: string;
  deskripsi: string;
  kontak: string;
}
