import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors, fontFamily, fontSize} from "../GlobalStyles";
import face from "../assets/face.png";
import {useEffect, useState} from "react";
import {Camera} from "expo-camera";
import {Ionicons} from "@expo/vector-icons";
import * as FaceDetector from "expo-face-detector";

const FaceID = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type] = useState(Camera.Constants.Type.front);
    const [openCamera, setOpenCamera] = useState(false);

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);


    if (hasPermission === null) {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>No access to camera</Text>
            </View>
        );
    }

    const handleFacesDetected = ({faces}) => {
        if (faces.length > 0) {
            setOpenCamera(false)
            navigation.navigate("ApprFaceID");
        }
    }

    const DeclineAccess = () => {
        setOpenCamera(false)
        navigation.navigate("DecFaceID");
    }

    if (openCamera && hasPermission) {
        return (
            <Camera
                type={type}
                onFacesDetected={handleFacesDetected}
                faceDetectorSettings={{
                    mode: FaceDetector.FaceDetectorMode.fast,
                    detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
                    runClassifications: FaceDetector.FaceDetectorClassifications.none,
                    minDetectionInterval: 100,
                    tracking: true,
                }}

                style={{flex: 1, justifyContent: "space-between"}}
            >
                <Pressable style={styles.buttonContainer} onPress={() => setOpenCamera(false)}>
                    <Ionicons name="return-down-back" size={52} color="white"/>
                </Pressable>
                <Pressable style={[styles.button, {marginBottom: 40, alignSelf: "center"}]}
                           onPress={DeclineAccess}>
                    <Text style={styles.buttonText}>GET ACCESS</Text>
                </Pressable>
            </Camera>
        );
    }

    return (
        <View style={styles.container}>
            <Image source={face} style={styles.image}/>
            <View style={{flexDirection: "column", gap: 15}}>
                <Text style={styles.title}>
                    LOCK<Text style={{color: colors.secondary}}>ID</Text>
                </Text>
                <Text style={styles.subTitle}>
                    Scan your face to get access to your car and start driving.     
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
        marginVertical: 30,
        marginLeft: 20,
    },
})
export default FaceID;