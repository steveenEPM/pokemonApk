import { View  } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ItemButton from "../../components/itemsCate";
import {ConCategoria} from "../../styles/stHomes";

export default function Categoria (){

    const navigation = useNavigation()

    const navigate = (uri)=>{
        navigation.navigate(uri)
    }

    return(
        <View style={{gap:12}}>
            <View style={ConCategoria.rowsIt}>
                <ItemButton label={"Pokemon"} background={"rgb(101, 211, 187)"} onPress={()=>navigate("pokemon")}/>
                <ItemButton label={"Tipos"}  background={"rgb(252, 108, 109)"} onPress={()=>navigate("tipos")}/>
            </View>
            <View style={ConCategoria.rowsIt}>
                <ItemButton label={"Ubicaciones"}  background={"rgb(88, 169, 244)"} onPress={()=>navigate("ubicacion")}/>
                <ItemButton label={"Elementos"}  background={"rgb(255, 207, 74)"} onPress={()=>navigate("elemento")}/>
            </View>
         
        </View>
    )

}