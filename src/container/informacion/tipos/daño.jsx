import { View, Text } from "react-native"
import { Style } from "../../../styles/infoTipo"


//Relacion de daño
export default function RelacionDano({ label, info }) {

    return (
        <View style={Style.container}>
            <View>
                <Text style={Style.title}>{label}</Text>
            </View>

            <View style={Style.viewMap}>
                {
                    info.map((key, index) =>
                        <View key={index} style={Style.VieItem}>
                            <Text style={Style.textItem}>{key.name}</Text>
                        </View>
                    )
                }
            </View>
        </View>
    )

}