import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function SafesArea({children,styles}){


    return(
        <SafeAreaProvider>
            <SafeAreaView style={[Css._root,styles]}>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    )

}

const Css = StyleSheet.create({
    
    _root: {
        backgroundColor:"white",
        flex:1,
        paddingHorizontal:15,
        paddingVertical:15
    }

})