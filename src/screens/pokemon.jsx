import { useMemo, useEffect, useState, useCallback, useTransition } from "react";
import { View, Text } from "react-native";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import SafesArea from "../components/SafeArea";
import Loading from "../components/loading"
import ItemsPok from "../components/itemPokem";
import pokeApi from "../apis/pokeApi";
import { ScrolStyl } from "../styles/stPokemons";
import colorPokemon from "../utils/color";
import ListaPokemon from "../container/listaPokemon";

export default function Pokemons() {

    const navigation = useNavigation()

    const [data, setData] = useState(undefined)

    const [limit, setLimit] = useState(100)

    const [refresh, setRefresh] = useState(false)

    const [isPending, startTransition] = useTransition()


    useMemo(() => {
        pokeApi(`/pokemon/?offset=0&limit=${limit}`).then(e => {
            const results = e.data.results.reverse()
            setData(results)
        }).catch(err => {
            console.log("error")
        })
    }, [navigation])

    const onPress = async (str) => {
        let color = await colorPokemon(str)
        if (color) {
            return navigation.navigate('infoPoket', { names: str, color: color })
        }
        return navigation.navigate('infoPoket', { names: str, color: "rgba(255,255,255,1)" })
    }


 
    return (
        <SafesArea>
            {
                data ?
                    <ScrollView
                        contentContainerStyle={ScrolStyl.scrool}
                      
                    >
                        {
                            data.map((key, index) =>
                                <View key={index} >
                                    <ItemsPok names={key.name} url={key.url} onPress={onPress} />
                                </View>
                            )
                        }
                    </ScrollView>
                    :
                    <Loading />
            }
        </SafesArea>
    )

}