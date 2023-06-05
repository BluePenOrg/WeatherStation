import { TextInput, TouchableOpacity, View, Text, Image} from "react-native";
import { Logo } from '../assets';
import { styles } from './styles/signStyles'

export default function SignIn ({ navigation }) {
    const handleSignUp = () => {
        navigation.navigate('SignUp')
    }
    return (
        <View style={styles.container}>
            <Image source={Logo} style={{width: 200, height: 200}}/>
            <TextInput placeholder="E-mail" style={styles.input}/>
            <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true}/> 
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.text}>Registrar-se</Text>
            </TouchableOpacity>              
        </View>
    )
}