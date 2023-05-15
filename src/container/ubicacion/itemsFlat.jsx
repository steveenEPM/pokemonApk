import { View, Text, Pressable } from "react-native";
import { useState } from "react";
import { AntDesign } from "react-native-vector-icons"

import { UbicaiconSt } from "../../styles/stUbicacion";


export default function Items({ area, url, callback }) {

    const [state, setState] = useState(undefined)


    return (
        <View style={UbicaiconSt.Element}>
            <View style={{flexDirection:"row",gap:7,alignItems:"center"}}>
                <AntDesign name="star" size={14} color="black"/>
                <Text style={UbicaiconSt.Title}>{area.replaceAll('-', ' ')}</Text>
            </View>

            <Pressable style={({pressed})=>[UbicaiconSt.press, pressed && {opacity:0.5}]} onPress={()=>callback(area,url)}>
                <Text style={UbicaiconSt.pressText}>Visualizar areas</Text>
                <AntDesign name="arrowright" size={20} color="gray" style={{top:2}}/>
            </Pressable>
        </View>
    )

}