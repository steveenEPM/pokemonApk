import { View, Text } from "react-native";
import SafesArea from "../components/SafeArea";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useMemo, useState, useCallback } from "react";

import ItemsPok from "../components/itemPokem";
import ListaPokemon from "../container/listaPokemon";

import pokeApi from "../apis/pokeApi";
import colorPokemon from "../utils/color";
import RelacionDano from "../container/informacion/tipos/daño";

export default function SearchScr() {

    const route = useRoute()

    const [pokemon, setPokemon] = useState(undefined)

    const [data, setData] = useState(undefined)

    const [info, setInfo] = useState(undefined)

    const navigation = useNavigation()

    useMemo(async () => {
        try {

            /**
             * Buscar pokemon
             */
            const { search } = route.params

            let respons = await pokeApi(`/pokemon/${search}`).then(e => {
                return e.data
            })

            if (respons) {
                return setPokemon(search)
            }


        } catch (error) {
            console.log(error);
        }
    }, [])


    useMemo(async () => {

        try {

            const { search } = route.params
            let respons = await pokeApi(`https://pokeapi.co/api/v2/type/${search}`).then(e => {
                let { double_damage_from, half_damage_to } = e.data.damage_relations
                let { pokemon } = e.data

                return { double_damage_from, half_damage_to, pokemon }
            })


            let { double_damage_from, half_damage_to, pokemon } = respons
            setInfo({ double_damage_from, half_damage_to, pokemon })
            setData(respons.pokemon)
        } catch (error) {
            console.log(error)
        }

    }, [])

    const onPress = useCallback(async (str) => {
        let color = await colorPokemon(str)
        if (color) {
            return navigation.navigate('infoPoket', { names: str, color: color })
        }
        return navigation.navigate('infoPoket', { names: str, color: "rgba(255,255,255,1)" })
    }, [])

    return (
        <SafesArea>
            {
                pokemon &&
                <View style={{ minHeight: 300, gap: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Pokemon</Text>
                    <ItemsPok names={pokemon} onPress={onPress} />
                </View>
            }

            {
                data &&
                <>
                    <View style={{ gap: 7,marginBottom:12 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                            Relacion de daño
                        </Text>
                        <Text>
                            Un detalle de cuán efectivo es este tipo hacia los demás y viceversa.
                        </Text>
                        <RelacionDano label={"Doble daño"} info={info.double_damage_from} />
                        <RelacionDano label={"Medio daño"} info={info.half_damage_to} />
                    </View>
                    <View style={{ gap: 3 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}> Lista de pokemon</Text>
                        <ListaPokemon data={data} onPress={onPress} />
                    </View>
                </>
            }
        </SafesArea>
    )

}