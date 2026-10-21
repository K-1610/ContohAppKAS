import type { Transaction, Role } from "../types";
export const roles: Role[] = ["Anggota", "Bendahara 1", "Bendahara 2", "Super Admin"];
export const transactions: Transaction[] = [
  {id:"KAS-001",title:"Kas bulanan — Rifa",date:"12 Okt 2026",amount:5000,type:"Pemasukan",status:"Terverifikasi",method:"Transfer",note:"Pembayaran kas Oktober (data contoh)."},
  {id:"KAS-002",title:"Kas bulanan — Yara",date:"11 Okt 2026",amount:5000,type:"Pemasukan",status:"Menunggu verifikasi",method:"Transfer",note:"Bukti transfer menunggu pemeriksaan bendahara."},
  {id:"KAS-003",title:"Pembayaran kas — Nara",date:"10 Okt 2026",amount:10000,type:"Pemasukan",status:"Terverifikasi",method:"Tunai",note:"Dicatat oleh bendahara setelah penerimaan tunai dikonfirmasi."},
  {id:"KAS-004",title:"Perlengkapan jaringan",date:"08 Okt 2026",amount:50000,type:"Pengeluaran",status:"Perlu diperiksa",method:"Pengeluaran darurat",note:"Contoh pembelian kabel jaringan dan konektor RJ45."},
  {id:"KAS-005",title:"Kas bulanan — Dimas",date:"06 Okt 2026",amount:5000,type:"Pemasukan",status:"Terverifikasi",method:"Transfer",note:"Pembayaran kas September (data contoh)."}
];
export const rupiah = (n:number) => `Rp${Math.max(0,n).toLocaleString("id-ID")}`;
