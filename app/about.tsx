import React from "react";
import {View,Text,StyleSheet} from "react-native";
import {AppHeader} from "../components/AppHeader";
import {C} from "../constants/theme";
export default function About(){return <View style={s.page}><AppHeader title="Tentang KASINO"/><Text style={s.brand}>KASINO</Text><Text style={s.title}>KAS Informatics Organization</Text><Text style={s.body}>Antarmuka demonstrasi untuk membantu organisasi mahasiswa menampilkan status kas, riwayat transaksi, laporan keuangan, dan pemeriksaan pengeluaran darurat.</Text><Text style={s.note}>Proyek UTS Pemrograman Mobile. Data pada aplikasi ini bersifat dummy; pembayaran, verifikasi, dan laporan belum terhubung ke sistem produksi.</Text></View>}
const s=StyleSheet.create({page:{padding:20,gap:14},brand:{fontSize:28,fontWeight:"900",color:C.navy,letterSpacing:2},title:{fontSize:18,fontWeight:"800",color:C.navy},body:{fontSize:14,color:C.navy,lineHeight:22},note:{fontSize:12,color:C.navy,lineHeight:19,borderWidth:1,borderColor:C.blue,borderRadius:12,padding:14}});
