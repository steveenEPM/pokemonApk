import { useState } from "react"
import { View, Text } from "react-native"
import { itemOjecSt } from "../../styles/stObjetos"

export default function ItemObjeto({ name, url, callback }) {

    const [state, setState] = useState(undefined)

    callback(url, setState)

    return (
        <View style={itemOjecSt.element}>
            <Text style={itemOjecSt.Title}>{name.replaceAll("-", " ")}</Text>
            {state &&
                <View style={{ gap: 10 }}>
                    <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
                        <Text style={[itemOjecSt.subTitle, { top: -2 }]}>Categoria</Text>
                        <View style={itemOjecSt.viewCat}>
                            <Text style={itemOjecSt.textCate}>{state.categoria.replaceAll("-", " ")}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={itemOjecSt.subTitle} >Efecto</Text>
                        <View style={itemOjecSt.viewEffe}>
                            <Text style={itemOjecSt.textEfec}>{
                                state.efecto.replaceAll("\n", " ").replaceAll("   "," ")
                            }</Text>
                        </View>
                    </View>
                </View>}
        </View>
    )

}
