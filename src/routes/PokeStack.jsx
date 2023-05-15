import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Homes from "../screens/homes"
import NoticiaPok from "../screens/noticias"
import Pokemons from "../screens/pokemon"
import InfoPokemon from "../screens/informacion/pokemon"
import Tipos from "../screens/tipos"
import InfoTipos from "../screens/informacion/tipos"
import Ubicaicon from "../screens/ubicaciones"
import Elementos from "../screens/objetos"
import SearchScr from "../screens/search"

export default function Pokemon() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            headerShadowVisible: false,
            statusBarColor: "white",
            statusBarStyle: "dark",
            statusBarTranslucent: true,
            statusBarAnimation: "fade",
            animation: "fade",
            headerTitleStyle: { fontWeight: "bold" }


        }} initialRouteName="home">
            <Stack.Screen component={Homes} name="home" />
            <Stack.Screen component={NoticiaPok} name="noticias" options={{
                animation: "slide_from_bottom",
                headerShown: true,
                headerTitle: "Ultimas Noticias"
            }} />
            <Stack.Screen component={Pokemons} name="pokemon" options={{
                headerShown: true,
                headerTitle: 'Pokemon'
            }} />
            <Stack.Screen component={Tipos} name="tipos" options={{
                headerShown: true,
                headerTitle: 'Tipos Pokemon'
            }} />
            <Stack.Screen component={InfoTipos} name="infoTipos" options={({ route }) => ({
                headerShown: true,
                headerTitle: `Pokemon tipo ${route.params.names}`
            })} />
            <Stack.Screen component={InfoPokemon} name="infoPoket" options={({ route }) => (
                {
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerTransparent: true,
                    animation: "slide_from_right",
                    headerTitleAlign: "center",
                    statusBarAnimation: "none",
                    statusBarColor: `${route.params.color}`

                }
            )} />
            <Stack.Screen component={Ubicaicon} name="ubicacion" options={({ route }) => ({
                headerShown: true,
                headerTitle: `Ubicaciones`
            })} />
            <Stack.Screen component={Elementos} name="elemento" options={{
                headerShown: true,
                headerTitle: 'Elementos'
            }} />
            <Stack.Screen component={SearchScr} name="searchSc" options={({route})=>({
                headerShown: true,
                headerTitle: route.params.search
            })} />
        </Stack.Navigator>
    )

}