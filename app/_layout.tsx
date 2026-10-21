import {Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";
import {C} from "../constants/theme";
export default function Layout(){return <><StatusBar style="dark"/><Stack screenOptions={{headerShown:false,contentStyle:{backgroundColor:C.white},animation:"slide_from_right"}}/></>}
