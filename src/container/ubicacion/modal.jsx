import { Modal, Text, Pressable } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { ModalElemen } from "../../styles/stUbicacion"
import ViewAnimate from "../../components/animation/view"
import { View } from "react-native-animatable"
import {Ionicons} from "react-native-vector-icons"

export default function Container({ title, data, viseible, setVisible }) {

    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={viseible}
            onRequestClose={() => {
                setVisible(false)
            }}
        >

            <View
                style={ModalElemen.root}

            >
                <View style={ModalElemen.container}
                    animation="fadeInUp"
                    duration={500}
                >
                    <Text style={ModalElemen.title}>
                        {title}
                    </Text>
                    <FlatList
                        data={data}
                        contentContainerStyle={ModalElemen.contSty}
                        renderItem={({ item, key }) => (
                            <View style={ModalElemen.itemView}>
                                <Ionicons name="ellipse" size={10} color="black"/>
                                <Text style={ModalElemen.itemText}>{item.name.replaceAll('-', ' ')}</Text>
                            </View>
                        )}
                    />
                    <Pressable style={({pressed})=>[ModalElemen.pressClose, pressed && {opacity:.5}]} onPress={()=> setVisible(false)}>
                        <Text style={ModalElemen.labelClose}>Cerrar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )

}