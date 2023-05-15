import { useMemo, useState, useCallback } from "react";
import { Linking } from "react-native";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import { dataNot } from "../utils/noticias";
import { useNavigation } from "@react-navigation/native";

import SafesArea from "../components/SafeArea";
import ItemsNotic from "../components/itemNotic";
import Loading from "../components/loading";
import newsApi from "../apis/newsApi";
import { alertLoading } from "../components/alertErr1";


export default function NoticiaPok() {

    const navigation = useNavigation()

    const [article, setArticle] = useState(undefined)

    const [refres, setRefres] = useState(false)

    useMemo(() => {
        newsApi().then(e => {
            setArticle(e.data.articles)
        }).catch(err => {
            alertLoading()
            setArticle([])
        })
    }, [navigation])

    /**Eventos */
    const actualizar = useCallback(() => {
        setRefres(true)
        newsApi().then(e => {
            setArticle(e.data.articles)
        })
            .finally(() => setRefres(false) )
            .catch(err => {
                alertLoading()
                setArticle([])

            })

    }, [])


    return (
        <SafesArea>
            {
                article ? <>
                    <FlatList
                        data={article}
                        contentContainerStyle={{
                            gap: 13
                        }}
                        refreshControl={
                            <RefreshControl refreshing={refres} onRefresh={actualizar} />
                        }
                        renderItem={({ item, index }) =>
                            <ItemsNotic titulo={item.title} descripcion={item.description} src={item.urlToImage}
                                onPress={() => Linking.openURL(item.url)}
                            />
                        }
                    />
                </>
                    :
                    <Loading />

            }
        </SafesArea>
    )
}

