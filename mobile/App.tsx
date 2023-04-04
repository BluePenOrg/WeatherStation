import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

import { thingSpeak } from './lib/thingSpeakAPI';


export default function App() { 
  const [temp, setTemp] = useState("");
  const [umidade, setUmidade] = useState("");

  async function loadData() {
    try {
      const dados = await thingSpeak.get('channels/2073568/feeds.json?api_key=9BGI4MYLN058ZI7I&results=1');
      console.log(dados.data)
      setTemp(dados.data.feeds[0].field1)
      setUmidade(dados.data.feeds[0].field2)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    
    setInterval(loadData, 3000);
  }, [])

 return (
    <View style={styles.container}>
      <Text>Última temperatura - {temp}</Text>
      <Text>Última umidade - {umidade}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
