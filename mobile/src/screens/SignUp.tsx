import { TextInput, TouchableOpacity, View, Text, Image} from "react-native";
import { Logo } from '../assets';
import { styles } from './styles/signStyles'

export default function SignIn ({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={{width: 200, height: 200}}/>
            <TextInput placeholder="E-mail" style={styles.input}/>
            <TextInput placeholder="Senha" style={styles.input}/>
            <TextInput placeholder="Confirmar Senha" style={styles.input} secureTextEntry={true} autoCapitalize="none" autoCorrect={false} /> 
            <TouchableOpacity style={styles.button} >
                <Text style={styles.text}>Registrar-se</Text>
            </TouchableOpacity>
            <Text>
                Já possui uma conta? <Text onPress={() => {navigation.navigate('SignIn')}} style={{color: 'blue', textDecorationLine: 'underline'}}>Entrar</Text>
            </Text>        
        </View>
    )
}