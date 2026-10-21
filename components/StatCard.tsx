import React from "react";
import {View,Text,StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {C} from "../constants/theme";
export function StatCard({label,value,icon}:{label:string;value:string;icon:keyof typeof Ionicons.glyphMap}){
 return <View style={s.card}><Ionicons name={icon} size={21} color={C.white}/><Text style={s.label}>{label}</Text><Text style={s.value}>{value}</Text></View>
}
const s=StyleSheet.create({card:{flex:1,minWidth:135,backgroundColor:C.navy,borderRadius:15,padding:15,gap:8},label:{color:C.white,fontSize:12},value:{color:C.white,fontSize:19,fontWeight:"800"}});
