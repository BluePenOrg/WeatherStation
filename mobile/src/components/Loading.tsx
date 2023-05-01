import { ActivityIndicator, View } from "react-native";

export function Loading() {
    return(
        <View style={{flex:1, justifyContent: "center", alignItems: "center", backgroundColor: '#FFFFFF'}}>
            <ActivityIndicator color="#000000"/>
        </View>
    );
}