import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";


export default function WeatherStations() {
    const [location, setLocation] = useState({
        latitude: -23.4698351198,
        longitude: -47.4298077315
      });
      
    return (
    <View style={styles.screen}>
        <MapView
            style={{ width: '100%', height: '100%' }}
            initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
            scrollEnabled={false}
            >
            <Marker coordinate={location} />
        </MapView>
    </View>
);
      
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})