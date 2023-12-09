import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, fontFamily, fontSize } from "../GlobalStyles";
import face from "../assets/face.png";
import { useState, useEffect } from "react";
import { Camera } from "expo-camera";

const FaceID = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [openCamera, setOpenCamera] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>No access to camera</Text>
            </View>
        );
    }

    const toggleCameraType = () => {
        setType(
            type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    };

    if (openCamera) {
        return (
            <Camera style={{ flex: 1, aspectRatio: 3/5 }} type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => toggleCameraType()}>
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        );
    }

    return (
        <View style={styles.container}>
            <Image source={face} style={styles.image} />
            <View style={{ flexDirection: "column", gap: 15 }}>
                <Text style={styles.title}>
                    LOCK<Text style={{ color: colors.secondary }}>ID</Text>
                </Text>
                <Text style={styles.subTitle}>
                    Lorem ipsum dolor sit amet consectetur. A nec eleifend proin laoreet sed
                    volutpat ut scelerisque tortor. Urna enim don
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => setOpenCamera(true)}>
                <Text style={styles.buttonText}>Scan Now</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
    },
    image: {
        width: 190,
        height: 270
    },
    title: {
        color: colors.white,
        fontSize: fontSize['3xl'],
        fontFamily: fontFamily.bold700,
        textAlign: "center",
    },
    subTitle: {
        color: colors.white,
        fontSize: fontSize.md,
        fontFamily: fontFamily.regular400,
        textAlign: "center",
    },
    button: {
        backgroundColor: colors.secondary,
        width: 250,
        marginTop: 40,
        height: 50,
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: colors.white,
        fontSize: fontSize.md,
        fontFamily: fontFamily.semiBold600,
    },
    camera: {
        flex: 1,

    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
})
export default FaceID;