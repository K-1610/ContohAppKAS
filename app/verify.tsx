import React from "react";
import {View,Text,FlatList,StyleSheet,Alert} from "react-native";
import {AppHeader} from "../components/AppHeader";
import {AppButton} from "../components/AppButton";
import {StatusBadge} from "../components/StatusBadge";
import {C} from "../constants/theme";
const pending=[{id:"V-01",name:"Yara Pratama",period:"Oktober 2026",amount:"Rp5.000"},{id:"V-02",name:"Dimas Putra",period:"Oktober 2026",amount:"Rp10.000"},{id:"V-03",name:"Nara Putri",period:"September 2026",amount:"Rp5.000"}];
export default function Verify(){return <View style={s.page}><AppHeader title="Verifikasi pembayaran"/><Text style={s.desc}>Daftar pengajuan contoh yang perlu diperiksa oleh bendahara.</Text><FlatList data={pending} keyExtractor={x=>x.id} contentContainerStyle={{gap:12,paddingBottom:20}} renderItem={({item})=><View style={s.card}><Text style={s.name}>{item.name}</Text><Text style={s.meta}>{item.period} · {item.amount}</Text><StatusBadge status="Menunggu verifikasi"/><View style={s.row}><AppButton title="Tolak" variant="outline" onPress={()=>Alert.alert("Simulasi penolakan","Alasan penolakan perlu dicatat. Tidak ada data yang disimpan.")}/><AppButton title="Verifikasi" onPress={()=>Alert.alert("Simulasi verifikasi","Status demo berubah hanya dalam pesan ini; tidak ada pemasukan sungguhan.")}/></View></View>}/></View>}
const s=StyleSheet.create({page:{flex:1,padding:18},desc:{color:C.navy,fontSize:13,marginBottom:14},card:{borderWidth:1,borderColor:C.blue+"66",borderRadius:14,padding:15,gap:10},name:{fontWeight:"800",fontSize:16,color:C.navy},meta:{fontSize:13,color:C.navy},row:{flexDirection:"row",gap:8},});
