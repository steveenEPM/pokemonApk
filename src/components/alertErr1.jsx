import { Alert } from "react-native"

export const alertLoading = () => {

    Alert.alert(
        "Error de carga",
        "Verifica si tienes buena coneccion o intentalo mas tarde",
        [{
            text:"ok",
            onPress:()=>{}
        }]
    )

}