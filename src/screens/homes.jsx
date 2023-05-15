import { View, Text } from "react-native";
import { useState, useEffect, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";

import { HomesSty } from "../styles/stHomes";
import SafesArea from "../components/SafeArea";
import Search from "../components/search";
import Categoria from "../container/home/Categorias";
import Notcias from "../container/home/noticias";
import Loading from "../components/loading";
/**Api */
import newsApi from "../apis/newsApi";
import { ScrollView } from "react-native-gesture-handler";


export default function Homes() {

    const [article, setArticle] = useState(undefined)

    const navigation = useNavigation()


    useMemo(() => {

        newsApi().then(e => {
            setArticle(e.data.articles)
        }).catch(err =>{
            
        })
    }, [navigation]);

    return (
        <SafesArea styles={HomesSty.root}>
            {article ?
                <ScrollView
                    contentContainerStyle={HomesSty.root}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={HomesSty.title}>Que Pokemon estas buscando</Text>
                    <Search />
                    <Categoria />
                    <Notcias data={article}/>
                </ScrollView>
                : <Loading />
            }
        </SafesArea>
    )

}