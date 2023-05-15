import { StyleSheet } from "react-native";

export const TiposSt = StyleSheet.create({

    root:{
        gap:12,
        
    }

})

export const CompontItems = StyleSheet.create({

    pressale:{
        borderWidth:1,
        borderRadius:8,
        borderColor:"#f43f40",
        paddingHorizontal:"3%",
        paddingVertical:"3%",
        gap:7,
        elevation:3,
        backgroundColor:"white"
        
    },
    //Tipo de elemento
    title:{
        fontSize:25,
        fontWeight:"bold",
        textTransform:"capitalize"
    },

    container:{
        paddingVertical:"2%",
    },

    pressLa:{
        color:"rgba(0,0,0,.5)"
    }
    

})