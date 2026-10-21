import React from "react";
import {View,Text,Pressable,StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import {C} from "../constants/theme";
export function AppHeader({title,back=true}:{title:string;back?:boolean}){
 const router=useRouter();
 return <View style={s.row}>{back?<Pressable onPress={()=>router.back()} hitSlop={12} accessibilityLabel="Kembali"><Ionicons name="arrow-back" size={22} color={C.navy}/></Pressable>:<Ionicons name="wallet-outline" size={23} color={C.navy}/>}<Text style={s.title}>{title}</Text><Text style={s.brand}>KASINO</Text></View>
}
const s=StyleSheet.create({row:{minHeight:54,flexDirection:"row",alignItems:"center",gap:12,borderBottomWidth:1,borderBottomColor:C.blue+"55",marginBottom:18},title:{fontSize:18,fontWeight:"800",color:C.navy,flex:1},brand:{fontSize:11,fontWeight:"800",color:C.blue,letterSpacing:1}});
