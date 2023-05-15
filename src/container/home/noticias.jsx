import { View, Text, Pressable, Linking } from "react-native"
import { useNavigation } from "@react-navigation/native"

import ItemsNotic from "../../components/itemNotic"
import { ConNoticias } from "../../styles/stHomes"


export default function Notcias({data}) {

    const href = (url) => Linking.openURL(url)

    const navigation = useNavigation()

    return (
        <View style={{ marginTop: 20, gap: 12 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={ConNoticias.textNot}>Noticias Pokemon</Text>
                <Pressable style={({ pressed }) => [ConNoticias.pressVer, pressed && { opacity: .5 }]}
                    onPress={()=> navigation.navigate('noticias')}
                >
                    <Text style={ConNoticias.presVeLabel}>Ver Todo</Text>
                </Pressable>
            </View>
            <View style={{ gap: 12 }}>
                <ItemsNotic titulo={data[0].title} descripcion={data[0].description} src={data[0].urlToImage}
                    onPress={() => href(data[0].url)}
                />
                <ItemsNotic titulo={data[1].title} descripcion={data[1].description} src={data[1].urlToImage}
                    onPress={() => href(data[1].url)}
                />
            </View>
        </View>
    )

}