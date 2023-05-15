import { View, Text } from "react-native";
import { useCallback, useMemo, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import SafesArea from "../../components/SafeArea";
import pokeApi from "../../apis/pokeApi";
import colorPokemon from "../../utils/color";
import ListaPokemon from "../../container/listaPokemon";
import RelacionDano from "../../container/informacion/tipos/daño";
import Loading from "../../components/loading"
import { Style } from "../../styles/infoTipo";

export default function InfoTipos() {

    const navigation = useNavigation()

    const route = useRoute()

    const [data, setData] = useState(undefined)

    const [info, setInfo] = useState(undefined)

    const [load, setLoad] = useState(true)


    useMemo(async () => {

        try {
            const { names } = route.params

            let respons = await pokeApi(`https://pokeapi.co/api/v2/type/${names}`).then(e => {
                let { double_damage_from, half_damage_to } = e.data.damage_relations
                let { pokemon } = e.data

                return { double_damage_from, half_damage_to, pokemon }
            })

            let { double_damage_from, half_damage_to, pokemon } = respons
            setInfo({ double_damage_from, half_damage_to, pokemon })
            setData(respons.pokemon)

        } catch (error) {

        }
    }, [])

    useEffect(() => {
        if ((data) && info)
            return setLoad(false)
    }, [data, info])


    const onPress = useCallback(async (str) => {
        let color = await colorPokemon(str)
        if (color) {
            return navigation.navigate('infoPoket', { names: str, color: color })
        }
        return navigation.navigate('infoPoket', { names: str, color: "rgba(255,255,255,1)" })
    }, [])




    return (
        <SafesArea styles={Style.root}>
            {
                !load ?
                    <>
                        <View style={{ gap: 7 }}>
                            <Text style={{fontWeight:"bold",fontSize:18}}>
                                Relacion de daño
                            </Text>
                            <Text>
                                Un detalle de cuán efectivo es este tipo hacia los demás y viceversa.
                            </Text>
                            <RelacionDano label={"Doble daño"} info={info.double_damage_from} />
                            <RelacionDano label={"Medio daño"} info={info.half_damage_to} />
                        </View>
                        <View style={{gap:3}}>
                            <Text style={{fontSize:18,fontWeight:"bold"}}> Todos Pokemon</Text>
                            <ListaPokemon data={data} onPress={onPress} />
                        </View>

                    </>
                    : <Loading />
            }
        </SafesArea>
    )

}