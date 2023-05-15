import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({

    root:{
        gap:20,
    },

    container:{
        gap:12,
        marginBottom:5,
        paddingRight:2
    },

    title:{
        fontSize:15,
        fontWeight:"bold",
        color:"gray"
    },

    viewMap:{
        width:"80%",
        flexDirection:"row",
        flexWrap:"wrap",
        gap:12
    },

    VieItem:{
        paddingHorizontal:10,
        paddingVertical:6,
        borderWidth:2,
        borderRadius:60,
        alignItems:"center",
        justifyContent:"center",
        borderColor:"#ffe1e1",
        backgroundColor:"#ffe1e1"
    },
    textItem:{
        color:"black",
        textTransform:"capitalize",
        fontWeight:"600",
        fontSize:14
    }

})