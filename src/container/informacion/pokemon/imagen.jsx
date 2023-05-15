import { Text, Image, View } from "react-native";
import { MaterialCommunityIcons } from 'react-native-vector-icons'

import ViewAnimate from "../../../components/animation/view";
import { ViewImagenSty, ContaImagen, } from "../../../styles/infoPokemon";


export default function Imagen({ background, src, nombre }) {

    return (
        <View style={[ContaImagen.container, { backgroundColor: background }]}>
            <ViewAnimate animation={"fadeInUp"}>
                <Image source={{ uri: src }}
                    style={[ContaImagen.imagen]}
                />
            </ViewAnimate>
            <Text style={[ContaImagen.labelNom]}>{nombre}</Text>
            <MaterialCommunityIcons name="pokeball" size={250} color="rgba(0,0,0,.25)"
                style={[{ left: "60%", top: "45%", position: "absolute", zIndex: 1 }]}
            />
        </View>
    )

}