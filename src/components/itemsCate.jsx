import { Pressable, Text } from "react-native";
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { ConCategoria } from "../styles/stHomes";


export default function ItemButton({ label, background,onPress}) {

    return (
        <Pressable
            style={({ pressed }) => [ConCategoria.pressable, { backgroundColor: background },
                pressed && { opacity: 0.5 }
            ]}
            onPress={onPress}
        >
            <Text style={ConCategoria.pressLabel}>{label}</Text>
            <MaterialCommunityIcons name="pokeball" size={100} color="rgba(255,255,255,1)" style={ConCategoria.icons} />
        </Pressable>
    )

}