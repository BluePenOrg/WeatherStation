import { Text, View, Image, Animated, Easing } from 'react-native';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { Ionicons } from '@expo/vector-icons';
import { backgroundImage, sunImage, umidadeSolo, Pressao } from '../assets';
import {styles} from './styles/homeStyles'



import { thingSpeak } from '../lib/thingSpeakAPI';

export default function Home() {
    const [loading, setLoading] = useState(true)
    const [temp, setTemp] = useState('');
    const [umidade, setUmidade] = useState('');
    const [indiceUV, setIndiceUV] = useState('');
    const [pressao, setPressao] = useState('');
    const [umidadedoSolo, setUmidadedoSolo] = useState('');
    const [ultAtual, setUltAtual] = useState(new Date());

    const spinValue = useState(new Animated.Value(0))[0];



    async function loadData() {
        try {
            const dados = await thingSpeak.get(
                'channels/2073568/feeds.json?api_key=9BGI4MYLN058ZI7I&results=1'
            );
            setTemp(parseFloat(dados.data.feeds[0].field1).toFixed(1));
            setUmidade(parseFloat(dados.data.feeds[0].field2).toFixed(1));
            setIndiceUV(parseFloat(dados.data.feeds[0].field3).toFixed(1))
            setPressao(parseFloat(dados.data.feeds[0].field6).toFixed(1))
            setUmidadedoSolo(parseFloat(dados.data.feeds[0].field5).toFixed(1))
            const dateString = dados.data.feeds[0].created_at;
            const date = new Date(dateString);
            setUltAtual(date)
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
            Animated.timing(
              spinValue,
              {
               toValue: 1,
               duration: 5000,
               easing: Easing.linear,
               useNativeDriver: true
              }
            )
           ).start();
    }, []);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '361deg']
      })

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <View style={styles.screen}>
            <Image source={backgroundImage} style={styles.backgroundImage} blurRadius={2} />
            <Animated.Image        
            source={sunImage}  style={[styles.sun, { transform: [{ rotate: spin }] }]} blurRadius={2} />
            <View style={styles.container}>
                <Text style={styles.temp}>{temp} °C</Text>

                <View style={styles.infoContainer}>
                    <View>
                        <View style={styles.icoInfo}>
                            <Ionicons name="water-outline" color="blue" size={50} />
                            <Text>{umidade} %</Text>
                        </View>
                        <View style={styles.icoInfo}>
                            <Image source={umidadeSolo} style={{ width: 40, height: 40 }} />
                            <Text>{umidadedoSolo} %</Text>
                        </View>
                    </View>

                    <View>
                        <View style={styles.icoInfo}>
                            <Ionicons name="sunny-outline" color="yellow"  size={50} />
                            <Text> {indiceUV} % </Text>
                        </View>
                        <View style={styles.icoInfo}>
                            <Image source={Pressao} style={{ width: 40, height: 40 }} />
                            <Text> {pressao} hPa</Text>
                        </View>
                    </View>
                    
                </View>                
            </View>
            <Text style={{position: 'absolute', bottom: 10}}>Última Atualização: {`${ultAtual.getDate()}/${ultAtual.getMonth().toString().padStart(2, '0')}/${ultAtual.getFullYear()} - ${ultAtual.getHours().toString().padStart(2, '0')}:${ultAtual.getMinutes().toString().padStart(2, '0')}`}</Text>
        </View>
    );
}