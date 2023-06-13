import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
        marginTop: 25,
    },
    infoContainer: {
        flexDirection: 'row',
        
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