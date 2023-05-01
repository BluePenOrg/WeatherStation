import { StyleSheet, View, Text } from "react-native";

export default function WeatherStations() {
    return (
        <View style={styles.screen}>
            <Text>Weather Stations</Text>
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