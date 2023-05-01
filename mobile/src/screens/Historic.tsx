import { StyleSheet ,View, Text } from "react-native";

export default function Historic() {
    return (
        <View style = {styles.screen}>
            <Text>Histórico de informações...</Text>
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