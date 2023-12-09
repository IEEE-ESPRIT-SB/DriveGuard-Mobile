// AuthLayout.js
import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Pressable} from 'react-native';
import {colors, fontFamily} from '../GlobalStyles'; // Import your colors here
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

const AuthLayout = ({navigation}) => {
    const [path, setPath] = useState('SIGN IN');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>{path}</Text>
                    </View>
                    <View style={styles.cardContent}>
                        <View style={styles.tab}>
                            <Pressable
                                style={[styles.tabItem, {backgroundColor: path === "SIGN IN" ? colors.secondary : 'transparent'}]}
                                onPress={() => setPath("SIGN IN")}
                            >
                                <Text style={styles.tabText}>Sign In</Text>
                            </Pressable>
                               <Pressable
                                style={[styles.tabItem, {backgroundColor: path === "SIGN UP" ? colors.secondary : 'transparent'}]}
                                onPress={() => setPath("SIGN UP")}
                            >
                                <Text style={styles.tabText}>Sign Up</Text>
                            </Pressable>
                        </View>
                        {path === 'SIGN IN' ? <SignInForm navigation={navigation}/> : <SignUpForm navigation={navigation}/>}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },
    card: {
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    cardContent: {
        backgroundColor: colors.custom300,
        padding: 20,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    header: {
        backgroundColor: colors.secondary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 20,
        // marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontFamily: fontFamily.bold700,
        color: colors.white,
    },
    tab: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 40,
        backgroundColor: colors.custom500,
        borderRadius: 15,
        padding: 5,
        marginVertical: 20,

    },
    tabItem: {
        width: "50%",
        height: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    tabText: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.white
    },
    activeTabText: {
        color: colors.white,
    },
});

export default AuthLayout;
