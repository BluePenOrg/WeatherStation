import { StyleSheet, View, Text } from "react-native";

export default function Profile() {
    return (
        <View style = {styles.screen}>
            <Text>Perfil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})