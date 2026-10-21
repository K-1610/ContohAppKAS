import React from "react";
import {Pressable,View,Text,StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import type {Transaction} from "../types";
import {rupiah} from "../data/dummy";
import {C} from "../constants/theme";
import {StatusBadge} from "./StatusBadge";
export function TransactionItem({item}:{item:Transaction}){
 const router=useRouter();
 return <Pressable onPress={()=>router.push({pathname:"/transaction/[id]",params:{id:item.id}})} style={s.row}>
 <View style={s.icon}><Ionicons name={item.type==="Pemasukan"?"arrow-down":"arrow-up"} size={20} color={C.navy}/></View>
 <View style={s.info}><Text style={s.title} numberOfLines={2}>{item.title}</Text><Text style={s.date}>{item.date} · {item.method}</Text><StatusBadge status={item.status}/></View>
 <View style={s.right}><Text style={s.amount}>{item.type==="Pengeluaran"?"−":"+"}{rupiah(item.amount)}</Text><Ionicons name="chevron-forward" size={17} color={C.blue}/></View>
 </Pressable>
}
const s=StyleSheet.create({row:{flexDirection:"row",alignItems:"center",gap:10,paddingVertical:14,borderBottomWidth:1,borderBottomColor:C.blue+"33"},icon:{width:40,height:40,borderRadius:12,backgroundColor:C.blue+"22",alignItems:"center",justifyContent:"center"},info:{flex:1,gap:5},title:{fontSize:14,fontWeight:"700",color:C.navy},date:{fontSize:11,color:C.navy},right:{alignItems:"flex-end",gap:8},amount:{fontSize:12,fontWeight:"800",color:C.navy}});
