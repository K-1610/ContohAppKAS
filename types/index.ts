export type Role = "Super Admin" | "Bendahara 1" | "Bendahara 2" | "Anggota";
export type TxStatus = "Terverifikasi" | "Menunggu verifikasi" | "Darurat tercatat" | "Perlu diperiksa";
export type Transaction = {
  id: string; title: string; date: string; amount: number;
  type: "Pemasukan" | "Pengeluaran"; status: TxStatus; method: string; note: string;
};
