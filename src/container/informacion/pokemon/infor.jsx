import { View, Text } from "react-native";
import { FontAwesome } from "react-native-vector-icons"
import { ContaInfo, ViewImagenSty } from "../../../styles/infoPokemon";
import Stats from "../../../components/stats";
import TiposView from "../../../components/flatType";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";

import ViewAnimate from "../../../components/animation/view";


export default function Infor({ types, stats, base_experience, color }) {

    color = color.replace('0.25', '1')

    return (
        <ViewAnimate animation={"fadeIn"} delay={500}>
            <View style={ViewImagenSty.container}>
                <View style={{ gap: 1 }}>
                    <Text style={ContaInfo.subTitle}>
                        Base de experience
                    </Text>
                    <Text style={[ContaInfo.base_exp]}>
                        {base_experience}
                    </Text>
                </View>
                <View style={{ gap: 12 }}>
                    <Text style={ContaInfo.subTitle}>Tipo pokemon</Text>
                    <TiposView data={types} />
                </View>
                <View style={{ gap: 12 }}>
                    <Text style={ContaInfo.subTitle}>Estadisticas</Text>
                    <View style={{ gap: 12 }}>
                        <Stats names={"hp"} value={stats[0].base_stat} color={color} />
                        <Stats names={"Ataque"} value={stats[1].base_stat} color={color} />
                        <Stats names={"Defensa"} value={stats[2].base_stat} color={color} />

                        <Stats names={"Rapidez"} value={stats[5].base_stat} color={color} />
                    </View>
                </View>

            </View>
        </ViewAnimate>
    )

}