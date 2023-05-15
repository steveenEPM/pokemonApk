import SafesArea from "../components/SafeArea";
import { Text } from "react-native";
import { useMemo, useState, useCallback } from "react";
import Loading from "../components/loading";
import { FlatList } from "react-native-gesture-handler";
import { TiposSt } from "../styles/tipos";
import Items from "../components/itemTipos";
import pokeApi from "../apis/pokeApi";
import { useNavigation } from "@react-navigation/native";

export default function Tipos() {

    const [data, setData] = useState(undefined)

    const navigation = useNavigation()

    //Buscar tipos de pokemons con sus debilidades y ataques
    useMemo(async () => {

        try {
            const respons = await pokeApi("/type").then(e => {
                return e.data.results
            })

            setData(respons)

        } catch (error) {

        }

    }, [])


    const renderItem = async (data) => {

        navigation.navigate('infoTipos',{names:data})

    }

    return (
        <SafesArea>
            {
                data ?
                    <>
                        <FlatList
                            data={data}
                            renderItem={({ item, index }) => <Items tipo={item.name} onPress={renderItem}  />}
                            contentContainerStyle={TiposSt.root}
                        />
                    </>
                    : <Loading />
            }
        </SafesArea>
    )

}