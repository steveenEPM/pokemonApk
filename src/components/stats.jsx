import { View,Text } from "react-native"
import { ContaInfo } from "../styles/infoPokemon"

const Stats = ({names,value,color})=>{

    return(
        <View style={ContaInfo.estadistica}>
            <Text style={{fontSize:14,fontWeight:"500",textTransform:"capitalize"}}>
                {names}
            </Text>
            <View style={[ContaInfo.barra,{width:`${value}%`}]}>
                <Text style={{color:"white"}}>{value}</Text>
            </View>
        </View>
    )

}

export default Stats