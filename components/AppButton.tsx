import React from "react";
import { Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";
import { C } from "../constants/theme";
type Props = { title:string; onPress:()=>void; variant?:"primary"|"outline"|"light"; disabled?:boolean; loading?:boolean };
export function AppButton({title,onPress,variant="primary",disabled=false,loading=false}:Props) {
  return <Pressable accessibilityRole="button" onPress={onPress} disabled={disabled||loading}
    style={({pressed})=>[styles.base,variant==="primary"&&styles.primary,variant==="outline"&&styles.outline,variant==="light"&&styles.light,(pressed||disabled)&&styles.pressed]}>
    {loading ? <ActivityIndicator color={variant==="primary"?C.white:C.navy}/> : <Text style={[styles.text,variant!=="primary"&&styles.altText]}>{title}</Text>}
  </Pressable>;
}
const styles=StyleSheet.create({base:{minHeight:48,borderRadius:12,alignItems:"center",justifyContent:"center",paddingHorizontal:16,paddingVertical:12},primary:{backgroundColor:C.navy},outline:{borderWidth:1,borderColor:C.navy,backgroundColor:C.white},light:{backgroundColor:C.blue},pressed:{opacity:.72},text:{fontSize:15,fontWeight:"700",color:C.white},altText:{color:C.navy}});
