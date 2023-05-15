import { StyleSheet } from "react-native";

export const HomesSty = StyleSheet.create({
    root: {
        gap: 20
    },
    title: {
        fontWeight: "bold",
        fontSize: 40,
        marginTop: "15%"

    },


    //Componete Search
    search: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "rgba(0,0,0,.25)",
        backgroundColor: "white",
        elevation: 3,

        alignItems: "center",
        gap: 12,
        borderRadius: 20,
        height: 50,
        paddingHorizontal: 23,


    },
    seaInput: {
        //      borderWidth:1,
        //        borderColor:"green",
        flex: 1,
        height: "100%"
    },


})


/**
  * Container Categoria
 **/
export const ConCategoria = StyleSheet.create({

    pressable: {
        backgroundColor: "rgba(0,0,255,1)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        height: 70,
        paddingVertical: 5
    },
    pressLabel: {
        elevation:1,
        zIndex: 1,
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    icons: {
        position: "absolute",
        zIndex: 0,
        fontSize: 90,
        left: 100,
        opacity: .5,
    },
    //Filas 
    rowsIt: {
        flexDirection: "row",
        gap: 30,
    }

})


/**
 * Container Noticias
 */
export const ConNoticias = StyleSheet.create({
    
            /**Root */
    //Texto Noticias Pokemon
    textNot: {
        fontSize:14,
        fontWeight:"bold",
        textTransform:"capitalize"
    },

    //Boton VerTodod
    pressVer:{
        paddingVertical:4,
        paddingHorizontal:12,
        backgroundColor:"white"
      
    },
    presVeLabel:{
     
        color:"#7381ff",
        fontWeight:"bold"
    },


    //Pressable Itemes 
    pressNot: {
        borderWidth:1,
        borderColor:"red",
        elevation:2,
        backgroundColor:"white",
        flexDirection:"row",
        paddingHorizontal:14,
        paddingVertical:14,
        height:130,
        gap:12,
        borderRadius:12
    },
    labelPress:{
        fontWeight:"500",

        fontSize:14
    },
    pressImg:{
       flex:1,
       borderRadius:12
    }

})