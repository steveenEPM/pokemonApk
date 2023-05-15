import { View, Text, Pressable } from "react-native"
import { memo, useState } from "react"
import { AntDesign } from "react-native-vector-icons"

import { CompontItems } from "../styles/tipos"

const Items = memo(({ tipo, onPress }) => {

    return (
        <Pressable style={({ pressed }) => [CompontItems.pressale, pressed && { opacity: 0.5 }]}
            onPress={() => onPress(tipo)}
        >
            <View style={{flexDirection:"row",gap:4,alignItems:"center"}}>
                <AntDesign name="star" size={13} color="black"/>
                <Text style={CompontItems.title}>{tipo}</Text>
            </View>

            <View style={CompontItems.container}>
                <Text style={CompontItems.pressLa}>Ver informacion</Text>
            </View>
        </Pressable >

    )

})


export default Items