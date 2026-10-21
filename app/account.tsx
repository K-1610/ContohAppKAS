import React from "react";
import {View,Text,StyleSheet} from "react-native";
import {AppHeader} from "../components/AppHeader";
import {C} from "../constants/theme";
export default function Account(){return <View style={s.page}><AppHeader title="Informasi akun"/><Text style={s.title}>Informasi akun demo</Text><Text style={s.line}>Nama: Rifa (data contoh)</Text><Text style={s.line}>Role: ditentukan dari sesi demo</Text><Text style={s.note}>Perubahan profil belum disimpan. Tidak ada backend pada versi UTS.</Text></View>}
const s=StyleSheet.create({page:{padding:20,gap:14},title:{fontSize:21,fontWeight:"800",color:C.navy},line:{padding:14,borderWidth:1,borderColor:C.blue,borderRadius:10,color:C.navy},note:{fontSize:12,color:C.navy,lineHeight:18}});
