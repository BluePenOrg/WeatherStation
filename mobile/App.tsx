import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


import Home from "./src/screens/Home";
import Historic from './src/screens/Historic';
import WeatherStations from './src/screens/WeatherStations';
import Profile from './src/screens/Profile';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name='Historico' 
          component={Historic} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="analytics" color={color} size={size} />
            ),
          }}  
        />
        <Tab.Screen 
          name='Estações'
          component={WeatherStations} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="location-outline" color={color} size={size} />
            ),
          }}    
        />
        <Tab.Screen 
          name='Perfil' 
          component={Profile} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle-outline" color={color} size={size} />
            ),
          }}   
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
