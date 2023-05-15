import { View,Text} from "react-native"
import { useMemo, useState , useCallback} from "react"

import SafesArea from "../components/SafeArea"
import pokeApi from "../apis/pokeApi"
import { FlatList } from "react-native-gesture-handler"
import ItemObjeto from "../container/objetos/itemFlat"

export default function Elementos(){

    const [data,setData] = useState(undefined)

    useMemo(async ()=>{
        try {
            let respons = await pokeApi("/item/?offset=0&limit=25").then(e=>{
                return e.data.results
            })

            setData(respons)
        } catch (error) {

        }
    },[])

 
    const calback = useCallback( async(url,setState)=>{
        try {
            let respons = await pokeApi(url).then(e =>{
                const  categoria =  e.data.category.name
                const efecto = e.data.effect_entries[0].effect

                return {categoria,efecto}
            })
            setState(respons)
        } catch (error) {
            console.log(error)
        }
    },[])

    return(
        <SafesArea>
            <FlatList
                data={data}
                initialNumToRender={8}
                contentContainerStyle={{gap:12}}
                renderItem={({item,index})=>
                    <ItemObjeto name={item.name} url={item.url} callback={calback}/>
                }
            />
        </SafesArea>
    )

}