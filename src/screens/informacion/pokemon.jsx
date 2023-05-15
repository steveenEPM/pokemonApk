/**Screens de informacion de pokemon */
import { useState, useMemo, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";
import SafesArea from "../../components/SafeArea";
import { ScrollView } from "react-native-gesture-handler";

import { ViewImagenSty } from "../../styles/infoPokemon";
import Loading from "../../components/loading";
import Imagen from "../../container/informacion/pokemon/imagen";
import pokeApi from "../../apis/pokeApi";
import Infor from "../../container/informacion/pokemon/infor";

export default function InfoPokemon() {

    const [color, setColor] = useState("rgba(255,255,255,1)")

    // Datos de contenedor imagen 
    const [imgen, setImgen] = useState(undefined)

    //Datos del contenedor info
    const [info, setInfo] = useState(undefined)



    //Estado carga
    const [load, setLoad] = useState(true)

    //Items de menu
    const [itMain, setItMain] = useState('informacion')

    const route = useRoute()


    //Carga datos al contendor imagen
    useMemo(() => {
        const { names } = route.params
        pokeApi(`/pokemon/${names}`).then(e => {
            const { front_default } = e.data.sprites.other.home
            setImgen({ names, front_default })
        }).catch(err => console.log(err))
    }, [])


    //Peticion de  datos para el contenedor Info
    useMemo(async () => {
        const { names } = route.params

        try {
            //Obtener Generacion de pokemon
            const generacion = await pokeApi(`/pokemon-species/${names}`).then(async e => {
                let aux = e.data.generation.name
                aux = aux.replace('generation-', '')
                return aux
            })

            //Obtener tipo de pokemon
            const { types, stats, base_experience } = await pokeApi(`/pokemon/${names}`).then(e => {
                const { types, stats, base_experience } = e.data
                return { types, stats, base_experience }
            })

            setInfo({ generacion, types, stats, base_experience })
        } catch (error) {
            console.log(error)
        }


    }, [])

    //Peticion de datos para contenedor Evolucion

  

    /**Cargar color pincipal */
    useEffect(() => {
        const value = route.params.color
        setColor(value)
    }, [])

    /**
     * Si lo datos de los contendores ya esta cargados  desactivar load
     */
    useEffect(() => {
        //console.log("actualiza")
        if ((imgen) && (info) ) {
            setLoad(false)
        }
    }, [info, imgen])


    /**
     **************************************************** Eventos *******************************
     */

    /**
     * Seleccion del menu 
    */
    const mainSelect = (str) => setItMain(str)



    /*********************************************************************************************** */
    return (
        <SafesArea styles={ViewImagenSty.root}>
            {
                !load ?
                    <ScrollView
                    >
                        <Imagen background={color} src={imgen.front_default} nombre={imgen.names} />
                        <View style={ViewImagenSty.View1}>
                            <Infor types={info.types} stats={info.stats} base_experience={info.base_experience} color={color} />
                        </View>
                    </ScrollView>
                    : <Loading />
            }
        </SafesArea>

    )
}


