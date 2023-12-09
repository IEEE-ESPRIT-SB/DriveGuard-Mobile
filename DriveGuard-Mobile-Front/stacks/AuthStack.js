import {createStackNavigator} from "@react-navigation/stack";
import {Auth, FaceID, GetStarted} from "../screens";


const AuthStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="GetStarted" component={GetStarted}/>
            <Stack.Screen name="Auth" component={Auth}/>
            <Stack.Screen name="FaceID" component={FaceID}/>
        </Stack.Navigator>
    );
}

export default AuthStack;