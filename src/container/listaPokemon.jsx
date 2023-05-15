import { ScrollView } from "react-native-gesture-handler"
import { ScrolStyl } from "../styles/stPokemons"
import { View } from "react-native"

import ItemsPok from "../components/itemPokem"



export default function ListaPokemon({ data ,onPress}) {

    
    return (
        <ScrollView
            contentContainerStyle={ScrolStyl.scrool}
        
            
        >
            {
                data.map((key, index) =>
                    <View key={index} >
                        <ItemsPok names={key.name ? key.name : key.pokemon.name} url={key.url} onPress={onPress} />
                    </View>
                )
            }
        </ScrollView>
    )

}

