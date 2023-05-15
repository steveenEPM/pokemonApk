import { StyleSheet } from "react-native"

export const ScrolStyl = StyleSheet.create({

    scrool:{
        gap:15,
        flexWrap:"wrap",
        flexDirection:"row",
        justifyContent:"space-between"
    }

})

export const ItemStyl = StyleSheet.create({

    press:{
      
        flex:1,
        flexDirection:"column-reverse",
        gap:12,
        alignItems:"center",
        justifyContent:"space-between",
        borderWidth:1,
        borderColor:"#FC6C6D",
        backgroundColor:"#ffe1e1",
        width:"100%",
        maxWidth:175,
        height:200,
        paddingHorizontal:"2%",
        paddingVertical:"12%",
        borderRadius:12,
        elevation:3

    },
    Imga: {
        width:150,
        height:150
    },
    label:{
        fontSize:15,
        fontWeight:"bold",
        textTransform:"capitalize"
    }

})

