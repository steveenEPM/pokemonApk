import { View, Text, Pressable, Image } from "react-native"

import { ConNoticias } from "../styles/stHomes"


export default function ItemsNotic({ titulo, descripcion, src, onPress }) {

    return (
        <Pressable onPress={onPress} style={ConNoticias.pressNot}>
            <View style={{flex:2,justifyContent:"center"}}>
                <Text style={ConNoticias.labelPress}>{titulo}</Text>
            </View>
            <Image source={{ uri: src }} style={ConNoticias.pressImg} />
        </Pressable>
    )

}