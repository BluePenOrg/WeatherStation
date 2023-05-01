import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { Ionicons } from '@expo/vector-icons';
import { backgroundImage, sunImage, umidadeSolo, Pressao } from '../assets';



import { thingSpeak } from '../lib/thingSpeakAPI';

export default function Home() {
    const [loading, setLoading] = useState(true)
    const [temp, setTemp] = useState('');
    const [umidade, setUmidade] = useState('');
    const spinValue = new Animated.Value(0);

    async function loadData() {
        try {
            const dados = await thingSpeak.get(
                'channels/2073568/feeds.json?api_key=9BGI4MYLN058ZI7I&results=1'
            );
            console.log(dados.data);
            setTemp(parseFloat(dados.data.feeds[0].field1).toFixed(1));
            setUmidade(parseFloat(dados.data.feeds[0].field2).toFixed(1));
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadData();
        setInterval(loadData, 300000);

        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 10000,
                useNativeDriver: true,
            })
        ).start();
    }, []);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <View style={styles.screen}>
            <Image source={backgroundImage} style={styles.backgroundImage} blurRadius={2} />
            <Animated.Image source={sunImage} style={[styles.sun, { transform: [{ rotate: spin }] }]} blurRadius={2} />
            <View style={styles.container}>
                <Text style={styles.temp}>{temp} °C</Text>

                <View style={styles.infoContainer}>
                    <View>
                        <View style={styles.icoInfo}>
                            <Ionicons name="water-outline" color="blue" size={50} />
                            <Text>{umidade} %</Text>
                        </View>
                        <View style={styles.icoInfo}>
                            <Image source={umidadeSolo} style={{ width: 60, height: 60 }} />
                            <Text>X %</Text>
                        </View>
                    </View>

                    <View>
                        <View style={styles.icoInfo}>
                            <Ionicons name="sunny-outline" color="yellow" size={50} />
                            <Text> UV % </Text>
                        </View>
                        <View style={styles.icoInfo}>
                            <Image source={Pressao} style={{ width: 40, height: 40 }} />
                            <Text> X %</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        top: '25%',
    },
    icoInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 30,
        marginBottom: 20,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    temp: {
        fontSize: 70,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    sun: {
        position: 'absolute',
        top: '30%',
        right: 0,
    },
});