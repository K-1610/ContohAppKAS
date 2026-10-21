import React,{useState} from "react";
import {View,Text,StyleSheet,ScrollView,Alert} from "react-native";
import {useRouter} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import {AppInput} from "../components/AppInput";
import {AppButton} from "../components/AppButton";
import {roles} from "../data/dummy";
import type {Role} from "../types";
import {C} from "../constants/theme";
export default function Login(){
 const router=useRouter(); const [nim,setNim]=useState(""); const [password,setPassword]=useState(""); const [role,setRole]=useState<Role>("Anggota"); const [submitted,setSubmitted]=useState(false);
 return <ScrollView contentContainerStyle={s.page} keyboardShouldPersistTaps="handled"><View style={s.hero}><View style={s.logo}><Ionicons name="wallet-outline" size={42} color={C.navy}/></View><Text style={s.brand}>KASINO</Text><Text style={s.subtitle}>KAS Informatics Organization</Text><Text style={s.intro}>Kelola kas dengan transparan dan teratur.</Text></View>
 <View style={s.form}><Text style={s.heading}>Selamat datang</Text><Text style={s.desc}>Masuk menggunakan akun demo untuk mencoba aplikasi.</Text>
 <AppInput label="NIM" placeholder="Masukkan NIM" value={nim} onChangeText={setNim} autoCapitalize="none" error={submitted&&!nim.trim()?"NIM wajib diisi":undefined}/>
 <AppInput label="Password" placeholder="Masukkan password" value={password} onChangeText={setPassword} secureTextEntry error={submitted&&!password?"Password wajib diisi":undefined}/>
 <Text style={s.label}>Role demo</Text><View style={s.roles}>{roles.map(r=><Text key={r} onPress={()=>setRole(r)} style={[s.role,role===r&&s.selected]}>{r}</Text>)}</View>
 <AppButton title="Masuk ke demo" onPress={()=>{setSubmitted(true);if(!nim.trim()||!password)return;router.replace({pathname:"/dashboard",params:{role}})}}/>
 <Text style={s.disclaimer}>Simulasi UI — bukan autentikasi produksi.</Text>
 <Text style={s.register} onPress={()=>router.push("/register")}>Belum memiliki akun? Daftar sebagai Anggota</Text></View></ScrollView>
}
const s=StyleSheet.create({page:{flexGrow:1,padding:24,justifyContent:"center",gap:24},hero:{alignItems:"center",paddingTop:18,gap:8},logo:{width:88,height:88,borderRadius:26,backgroundColor:C.white,borderWidth:2,borderColor:C.navy,alignItems:"center",justifyContent:"center"},brand:{fontSize:30,fontWeight:"900",letterSpacing:2,color:C.navy},subtitle:{fontSize:13,color:C.blue,fontWeight:"700"},intro:{color:C.navy,fontSize:14,textAlign:"center",marginTop:8},form:{gap:8},heading:{fontSize:24,fontWeight:"800",color:C.navy},desc:{fontSize:13,color:C.navy,marginBottom:10},label:{fontSize:13,fontWeight:"700",color:C.navy},roles:{flexDirection:"row",flexWrap:"wrap",gap:7,marginBottom:10},role:{fontSize:12,color:C.navy,borderWidth:1,borderColor:C.blue,borderRadius:18,paddingHorizontal:10,paddingVertical:8,overflow:"hidden"},selected:{backgroundColor:C.blue,color:C.white,borderColor:C.blue},disclaimer:{fontSize:11,color:C.navy,textAlign:"center"},register:{textAlign:"center",color:C.navy,fontWeight:"700",fontSize:13,marginTop:6}});
