import {StatusBar} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import MainStack from "./stacks/MainStack";
import AuthStack from "./stacks/AuthStack";
import {
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    useFonts
} from "@expo-google-fonts/montserrat";
import {FaceID} from "./screens";

export default function App() {
    const Stack = createStackNavigator();

    const [fontsLoaded] = useFonts({
        Montserrat_100Thin,
        Montserrat_200ExtraLight,
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_800ExtraBold,
        Montserrat_900Black,
    });

    if (!fontsLoaded)
        return null;

    return (
        <SafeAreaProvider>
            <StatusBar style="auto"/>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="AuthStack" component={AuthStack}/>
                    <Stack.Screen name="MainStack" component={MainStack}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );

}
