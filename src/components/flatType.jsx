import { FlatList } from "react-native-gesture-handler";
import { View, Text} from "react-native";
import { traductor } from "../utils/traducir";

import { ContaInfo } from "../styles/infoPokemon";

const TiposView = ({data})=>{

    return(
        <View style={{flexDirection:"row",flexWrap:"wrap",flex:1, gap:14}}>
            {
                data && data.map((key,index)=>{
                    
                    let {name} = key.type

                    return(
                        <View key={index} style={ContaInfo.ViewItemTypes}>
                            <Text style={ContaInfo.TextItemTypes}>{name}</Text>
                        </View>
                    )
                })
            }
        </View>
    )

}

export default TiposView

