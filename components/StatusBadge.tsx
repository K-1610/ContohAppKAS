import React from "react";
import {View,Text,StyleSheet} from "react-native";
import {C} from "../constants/theme";
export function StatusBadge({status}:{status:string}){
 return <View style={s.badge}><Text style={s.text}>{status}</Text></View>
}
const s=StyleSheet.create({badge:{alignSelf:"flex-start",borderWidth:1,borderColor:C.blue,borderRadius:20,paddingHorizontal:10,paddingVertical:5,backgroundColor:C.white},text:{fontSize:11,fontWeight:"700",color:C.navy}});
