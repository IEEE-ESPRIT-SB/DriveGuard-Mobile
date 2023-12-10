import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {
  AboutCar,
  Alert,
  FaceID,
  Profile,
  FaceIDdecl,
  notif,
  FaceIDacc,
} from "../screens";


const MainStack = () => {
    const TabStack = createBottomTabNavigator();
    return (
      <TabStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <TabStack.Screen name="Home" component={FaceIDdecl} />
        <TabStack.Screen name="Profile" component={Profile} />
        <TabStack.Screen name="AboutCar" component={AboutCar} />
        <TabStack.Screen name="Alert" component={Alert} />
        <TabStack.Screen name="FaceID" component={FaceID} />
        <TabStack.Screen name="notif" component={notif} />
        <TabStack.Screen name="faceIDacc" component={FaceIDacc} />
      </TabStack.Navigator>
    );
}

export default MainStack;