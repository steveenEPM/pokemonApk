import SafesArea from "../components/SafeArea";
import { FlatList } from "react-native-gesture-handler";
import { Text } from "react-native";
import { useMemo, useCallback, useState, useEffect } from "react";

import Items from "../container/ubicacion/itemsFlat";
import pokeApi from "../apis/pokeApi";
import Loading from "../components/loading"
import Container from "../container/ubicacion/modal";


export default function Ubicaicon() {

    const [data, setData] = useState(undefined)

    const [visible,setVisible] = useState(false)

    const [areas, setAreas] = useState(undefined)


    useMemo(async () => {
        try {
            let respons = await pokeApi("https://pokeapi.co/api/v2/location?limit=50").then(e => {
                return e.data.results
            })
            setData(respons)
        } catch (error) {
            console.log("error");
        }
    }, [])

    const memoria = useCallback(async (area, url) => {
        try {
            
            const respons = await pokeApi(url).then(e => {
                return e.data.areas
            })

            setAreas({area,data:respons})
            
        
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(()=>{
        if(areas) setVisible(true)
    },[areas])


    return (
        <SafesArea>
            {
                data ?
                    <>
                        <FlatList
                            contentContainerStyle={{ gap: 12 }}
                            data={data}
                            renderItem={({ item, index }) => <Items area={item.name} url={item.url} callback={memoria} />}
                        />
                    {
                      areas && <Container viseible={visible} setVisible={setVisible} title={areas.area} data={areas.data}/>
                    }   
                    </>

                    : <Loading />
            }
        </SafesArea>
    )

}