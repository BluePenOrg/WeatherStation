import { View, Text, TouchableOpacity } from "react-native";
import {styles} from './styles/profileStyles'
import { Ionicons } from '@expo/vector-icons';

export default function Profile({setIsLogged}) {
    const handleSignOut = () => {
        // Verificar se está logado
        setIsLogged(false);
      };
    return (
        <View style = {styles.screen}>
            <Ionicons name="person-circle" color='gray' size={120} />
            <Text>Username</Text>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.text} onPress={handleSignOut}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}