import React,{useState} from "react";
import {View,Text,TextInput,StyleSheet,TextInputProps} from "react-native";
import {C} from "../constants/theme";
type Props=TextInputProps & {label:string; error?:string};
export function AppInput({label,error,...props}:Props){
 const [focused,setFocused]=useState(false);
 return <View style={s.wrap}><Text style={s.label}>{label}</Text>
 <TextInput {...props} onFocus={(e)=>{setFocused(true);props.onFocus?.(e)}} onBlur={(e)=>{setFocused(false);props.onBlur?.(e)}}
 style={[s.input,focused&&s.focus,error&&s.err]} placeholderTextColor={C.navy+"99"} accessibilityLabel={label}/>
 {error?<Text style={s.error}>{error}</Text>:null}</View>
}
const s=StyleSheet.create({wrap:{gap:6,marginBottom:14},label:{fontSize:13,fontWeight:"700",color:C.navy},input:{minHeight:48,borderWidth:1,borderColor:C.blue,borderRadius:10,paddingHorizontal:13,color:C.black,backgroundColor:C.white,fontSize:15},focus:{borderColor:C.purple,borderWidth:2},err:{borderColor:C.black},error:{fontSize:12,color:C.black}});
