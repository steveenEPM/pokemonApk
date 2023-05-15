import { StyleSheet } from "react-native";

export const UbicaiconSt = StyleSheet.create({

    Element:{
        borderWidth:1,
        borderColor:"#FC6C6D",
        paddingHorizontal:"4%",
        paddingVertical:"3%",
        gap:15,
        borderRadius:10,
        elevation:3,
        backgroundColor:"white"
    },

    Title:{
        fontWeight:"bold",
        fontSize:19,
        textTransform:"capitalize",
        

    },

    press:{
        flexDirection:"row",
        gap:3,
        paddingVertical:7,
        alignItems:"center",
        alignSelf:"flex-start",
        elevation:7
    },

    pressText:{
        fontSize:14,
        color:"gray",
        fontWeight:"bold"
        
    }

})


export const ModalElemen =StyleSheet.create({

    root:{
        flex:1,
        backgroundColor:"rgba(0,0,0,.5)",
        paddingHorizontal:"7%",
        paddingVertical:"20%"
    },

    container:{
        backgroundColor:"white",
        flex:1,
        borderRadius:15,
        paddingHorizontal:20,
        paddingVertical:50,
        gap:20
    },
    title:{
        textAlign:"center",
        fontSize:20,
        
        textTransform:"capitalize",
        fontWeight:"bold"
    },
    contSty:{
        gap:12
    },
    itemView:{
        flexDirection:"row",
        gap:3,
        alignItems:"center"
    },
    itemText:{
        fontStyle:"normal",
        textTransform:"capitalize",
        fontWeight:"600",
        fontSize:15
    },

    pressClose:{
        backgroundColor:"#FC6C6D",
        paddingHorizontal:"4%",
        paddingVertical:"3%",
        borderRadius:12,
        alignSelf:"center"
    },
    labelClose:{
        color:"white",
        fontSize:15
    }
    
})