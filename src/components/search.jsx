import { StyleSheet, View, TextInput, Pressable, Keyboard } from "react-native";
import { FontAwesome } from 'react-native-vector-icons'
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { HomesSty } from "../styles/stHomes";


export default function Search() {

    const ref = useRef(null)

    const [focus, setFocus] = useState(false)

    const navigation = useNavigation()

    const [text, setText] = useState("")

    useEffect(() => {

        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            if (ref.current.isFocused()) {
                ref.current.blur()
            }
        });

        return () => {
            hideSubscription.remove()
        }
    }, [])


    

    return (
        <View style={[HomesSty.search, focus && { borderColor: "rgba(0,0,0,.7)" }]}>
            <FontAwesome name="search" size={25} color="gray" />
            <TextInput placeholder="Buscar Pokemon, película, habilidades, etc" style={[HomesSty.seaInput]} ref={ref}
                selectionColor="#C8C8C8"
                cursorColor="#ff0000"
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChangeText={(value) => setText(value)}
                onSubmitEditing={() => {

                    let aux = text.toLocaleLowerCase()
                    setText("")
                    navigation.navigate("searchSc",{search:aux})
                }}
                value={text}
            />
        </View>
    )

}