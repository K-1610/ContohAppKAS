import React,{useMemo,useState} from "react";
import {View,Text,FlatList,StyleSheet,Pressable} from "react-native";
import {AppHeader} from "../components/AppHeader";
import {TransactionItem} from "../components/TransactionItem";
import {transactions} from "../data/dummy";
import {C} from "../constants/theme";
export default function History(){const [filter,setFilter]=useState("Semua");const data=useMemo(()=>transactions.filter(t=>filter==="Semua"||t.type===filter),[filter]);return <View style={s.page}><AppHeader title="Riwayat transaksi"/><Text style={s.desc}>Pilih item untuk melihat detail. Transaksi final tidak dapat diedit atau dihapus.</Text><View style={s.filters}>{["Semua","Pemasukan","Pengeluaran"].map(x=><Pressable key={x} onPress={()=>setFilter(x)} style={[s.filter,filter===x&&s.active]}><Text style={[s.filterText,filter===x&&s.activeText]}>{x}</Text></Pressable>)}</View><FlatList data={data} keyExtractor={x=>x.id} renderItem={({item})=><TransactionItem item={item}/>} ListEmptyComponent={<Text style={s.empty}>Tidak ada transaksi untuk filter ini.</Text>} contentContainerStyle={{paddingBottom:24}}/></View>}
const s=StyleSheet.create({page:{flex:1,padding:18},desc:{fontSize:13,color:C.navy,marginBottom:14},filters:{flexDirection:"row",gap:8,marginBottom:8},filter:{borderWidth:1,borderColor:C.blue,borderRadius:20,paddingHorizontal:13,paddingVertical:8},active:{backgroundColor:C.navy},filterText:{fontSize:12,color:C.navy,fontWeight:"700"},activeText:{color:C.white},empty:{padding:20,color:C.navy,textAlign:"center"}});
