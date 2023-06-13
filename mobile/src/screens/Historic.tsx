import { useEffect, useState } from "react";
import { StyleSheet ,View, Text, Dimensions, ScrollView } from "react-native";
import { Loading } from '../components/Loading';
import { LineChart } from 'react-native-chart-kit';

import { thingSpeak } from '../lib/thingSpeakAPI';


export default function Historic() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [labels, setLabels] = useState([])

  useEffect(() => {
    loadData(); // Função para buscar os dados da API do ThingSpeak
  }, []);

  async function loadData() {
    try {
        const dados = await thingSpeak.get(
            'channels/2073568/feeds.json?api_key=9BGI4MYLN058ZI7I&results=5'
        );
        setData(dados.data.feeds)
        const createdAts = data.map((item) => new Date(item.created_at)) 
        const horarios = createdAts.map((item)=> `${item.getHours().toString().padStart(2, '0')}:${item.getMinutes().toString().padStart(2, '0')}`)
        setLabels(horarios)
        console.log(horarios)
    } catch (error) {
        console.error('Erro ao buscar os dados da API do ThingSpeak:', error);
    } finally {
        setLoading(false)
    }
}

  if (loading) {
    return (
        <Loading />
    )
}

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text>Temperatura (°C)</Text>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: data.map((item) => parseFloat(item.field1))  
            }
          ]
        }}
        width={Dimensions.get("window").width - 50} // from react-native
        height={220}
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#8B99E4",
          backgroundGradientTo: "#8B99E4",
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "4",
            strokeWidth: "1",
            stroke: "#000000"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />

      <Text>Umidade do Ar (%)</Text>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: data.map((item) => parseFloat(item.field2))  
            }
          ]
        }}
        width={Dimensions.get("window").width - 50} // from react-native
        height={220}
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#8B99E4",
          backgroundGradientTo: "#8B99E4",
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "4",
            strokeWidth: "1",
            stroke: "#000000"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />

      <Text>Índice UV</Text>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: data.map((item) => parseFloat(item.field3))  
            }
          ]
        }}
        width={Dimensions.get("window").width - 50} // from react-native
        height={220}
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#8B99E4",
          backgroundGradientTo: "#8B99E4",
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "4",
            strokeWidth: "1",
            stroke: "#000000"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
    screen: {
      marginTop: 15,
      backgroundColor: '#fff',
      alignItems: 'center',
    }
})