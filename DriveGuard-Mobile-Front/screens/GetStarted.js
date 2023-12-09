import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {colors, fontFamily, fontSize} from "../GlobalStyles";
import LogoRAS from "../assets/LogoRAS.png";
import LogoSB from "../assets/LogoSB.png";
import Logo from "../assets/YourLogo.png"; // Remplacez "YourLogo.png" par le chemin correct vers votre image Logo

const GetStarted = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.header}>
                <Image source={LogoRAS} style={styles.headerLogo} />
                <Image source={LogoSB} style={styles.headerLogo} />
            </View>
            <View style={styles.content}>
                <Image source={Logo} style={styles.logo} />
                <View style={styles.descContainer}>
                    <View>
                        <Text style={styles.subtitle}>Welcome to</Text>
                        <Text style={styles.title}>SafeRoad </Text>
                    </View>
                    <Text style={styles.description}>
                    The cutting-edge app designed to revolutionize the way you manage and conserve water in your home. With Fluidux, you have the power to make a positive impact on both your utility bills and the environment, all through the convenience of your smartphone.
                    </Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Auth")}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.custom400,
        paddingHorizontal: 20,
        alignItems: "center",
        paddingVertical: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    headerLogo: {
        height: 52,
        width: 96,
        resizeMode: "contain",
    },
    logo: {
        height: 250,
        width: 250,
        resizeMode: "contain",
        alignSelf: "center",
    },
    descContainer: {
        flexDirection: "column",
        gap: 15,
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 10,
        backgroundColor: colors.custom200,
        borderWidth: 1,
        borderColor: colors.white,
    },
    title: {
        fontSize: fontSize['2xl'],
        fontFamily: fontFamily.bold700,
        color: colors.white,
    },
    subtitle: {
        fontSize: fontSize.md,
        fontFamily: fontFamily.light300,
        color: colors.white,
    },
    description: {
        fontSize: fontSize.md,
        fontFamily: fontFamily.light300,
        textAlign: "justify",
        color: colors.white,
    },
    content: {
        flex: 1,
        width: "100%",
        justifyContent: "space-between",
        marginVertical: 25,
    },
    button: {
        backgroundColor: colors.secondary,
        width: "100%",
        padding: 15,
        borderRadius: 20,
        marginTop: 20,
    },
    buttonText: {
        color: colors.white,
        textAlign: "center",
        fontSize: fontSize.lg,
        fontFamily: fontFamily.semiBold600,
    },
});

export default GetStarted;
