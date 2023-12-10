import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Alert, Home, Notif, Profile } from "../screens";
import { colors } from "../GlobalStyles";
import Icon from 'react-native-vector-icons/Ionicons';

const MainStack = () => {
    const TabStack = createBottomTabNavigator();

    return (
        <TabStack.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.custom500,
                },
                tabBarActiveTintColor: colors.secondary,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Alert') {
                        iconName = focused ? 'alert-circle' : 'alert-circle-outline';
                    } else if (route.name === 'Notif') {
                        iconName = focused ? 'notifications' : 'notifications-outline';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
        >
            <TabStack.Screen name="Home" component={Home} />
            <TabStack.Screen name="Profile" component={Profile} />
            <TabStack.Screen name="Alert" component={Alert} />
            <TabStack.Screen name="Notif" component={Notif} />
        </TabStack.Navigator>
    );
}

export default MainStack;
