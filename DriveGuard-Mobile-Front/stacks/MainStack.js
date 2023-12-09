import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {AboutCar, Alert, FaceID, Home, Profile} from "../screens";


const MainStack = () => {
    const TabStack = createBottomTabNavigator();
    return (
        <TabStack.Navigator>
            <TabStack.Screen name="Home" component={Home}/>
            <TabStack.Screen name="Profile" component={Profile}/>
            <TabStack.Screen name="AboutCar" component={AboutCar}/>
            <TabStack.Screen name="Alert" component={Alert}/>
        </TabStack.Navigator>
    )
}

export default MainStack;