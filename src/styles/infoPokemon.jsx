import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window")

export const ViewImagenSty = StyleSheet.create({

    root: {
        paddingHorizontal: 0,
        paddingVertical: 0
    },

    View1: {
        flex: 1,
        paddingBottom: "3%"
    },
    container: {
        paddingHorizontal: "3%",
        gap: 20,
        paddingTop: "4%"
    }
})

//Contenedor imagen
export const ContaImagen = StyleSheet.create({

    container: {
        backgroundColor: "white",
        flex: 2,
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        height: height * 0.65
    },

    labelNom: {
        color: "black",
        fontSize: 40,
        fontWeight: "bold"
    },

    imagen: {
        width: 300,
        height: 300,
        zIndex: 2
    }
})

//Contenedor Menu
export const ContaMenu = StyleSheet.create({

    pressable: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 60
    },
    text: {
        fontSize: 14,
        fontWeight: "900",
        textTransform: "capitalize"
    }

})

//Container Informacion
export const ContaInfo = StyleSheet.create({
    subTitle: {
        fontWeight: "bold",
        fontSize: 17
    },
    base_exp: {
        fontSize: 60,
        color: "rgb(101, 211, 187)"
    },
    ViewItemTypes: {
        paddingHorizontal: 12,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 90,
        borderWidth: 1,
        borderColor: "rgb(101, 211, 187)"
    },
    TextItemTypes: {
        fontSize: 14,
        fontWeight: "500",
        color: "rgb(64, 124, 110)",
        textTransform: "capitalize"
    },
    estadistica: {
        flexDirection: "row",
        gap: 12,
        alignItems: "center"
    },
    barra: {
        backgroundColor: "rgb(101, 211, 187)",
        maxWidth: 290,
        paddingVertical: 4,
        alignItems: "flex-end",
        borderRadius:7,
        paddingHorizontal:"3%"
    }
})