import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

const API_KEY = "9BGI4MYLN058ZI7I";
const API_BASE_URL = "https://api.thingspeak.com/";

const basicFetch = async (endpoint) => { //Faz a requisição na API e retorna o JSON
    const req = await fetch(`${API_BASE_URL}${endpoint}`);
    const json = await req.json();
    return json;
}

const thingsp = async ()  => {
  let things = await basicFetch(`channels/2073568/fields/1.json?api_key=${API_KEY}&results=1`)
  console.log(things)
}

export default function App() {

  const [lastEntry, setLastEntry] = useState();

  useEffect(() => {
    const load = async () => {
      let resp:any = await thingsp();
      setLastEntry(resp);
    }
    load()
  }, [])

  return (
    <View style={styles.container}>
      <Text>{lastEntry}</Text>
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
