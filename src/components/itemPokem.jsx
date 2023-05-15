import { memo, useCallback, useMemo, useState,} from "react"
import { View, Text, Pressable, Image } from "react-native"
import pokeApi from "../apis/pokeApi"
import { ItemStyl } from "../styles/stPokemons"
import Pokeball from "../../assets/public/pokeball.png"

const ItemsPok = memo(({ names, url, onPress,id }) => {

    const [img, setImg] = useState(undefined)

    useMemo(() => {
        pokeApi(`/pokemon/${names}`).then(e => {
            const { front_default } = e.data.sprites.other.home
            setImg(front_default)
        })
    }, [])

    return (
        <Pressable style={({ pressed }) => [ItemStyl.press, pressed && { opacity: .7 }]}
            onPress={()=> onPress(names)}
        >
            <View>
                <Text style={ItemStyl.label}>
                    {names}
                </Text>
            </View>
            {
                img ?
                    <Image source={{ uri: img }} style={ItemStyl.Imga} />
                    :
                    <Image source={Pokeball} style={ItemStyl.Imga} />
            }

        </Pressable>
    )

})

export default ItemsPok

