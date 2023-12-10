import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from "react-native";
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native-safe-area-context";
import DayCard from "../components/DayCard";
import StatCard from "../components/StatCard";
import { colors, fontFamily } from "../GlobalStyles"; // Import your colors here

const Home = ({navigation}) => {
    const handleSquarePress = (day, number) => {
        console.log("Jour :", day, " - Numéro :", number);
    };

    // Tableau des jours de la semaine en anglais
    const weekDays = ["Sun", "Mon", "Tue", "Wed" , "Thu", "Fri", "Sat"];
    const tempDays = [30, 40, 50, 60, 70, 20, 10];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light"/>
            <View style={styles.header}>
                <Text style={styles.date}>Dec 23</Text>
                {/* Remplacez cet import par votre propre image */}
                <Image source={require("../assets/icon1.png")} style={styles.icon}/>
            </View>
            <View style={styles.squareContainer}>
                {/*{weekDays.map((day, index) => (*/}
                {/*    <TouchableOpacity*/}
                {/*        key={index}*/}
                {/*        style={styles.square}*/}
                {/*        onPress={() => handleSquarePress(day, index + 4)}*/}
                {/*    >*/}
                {/*        <Text style={styles.squareText}>{day}</Text>*/}
                {/*        <Text style={styles.squareNumber}>{index + 4}</Text>*/}
                {/*    </TouchableOpacity>*/}
                {/*))}*/}
                <FlatList
                    data={weekDays} renderItem={({item, index}) => (
                    <DayCard day={item} dayNumber={index + 4 }/>

                )} horizontal={true}/>

            </View>
            <View style={styles.temperatureContainer}>
                <Text style={styles.temperature}>Temperature</Text>
            </View>
            <View style={styles.imagesRow}>
                <StatCard title={"Temperature"} value={"30°"} />
                <StatCard title={"Pressure"} value={"30°"} />
                <StatCard title={"Humidity"} value={"30°"} />
                {/*<Image source={require("../assets/cli.png")} style={styles.image}/>*/}
                {/*<Image source={require("../assets/cardt.png")} style={styles.image}/>*/}
                {/*<Image source={require("../assets/cli.png")} style={styles.image}/>*/}
            </View>
            <View style={styles.frameContainer}>
                <Image source={require("../assets/frame3.png")} style={styles.frameImage}/>
            </View>
            <View style={styles.background}></View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('FaceID')}
            >
                <Text style={styles.buttonText}>Camera</Text>

            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#09404D", // Couleur de fond par défaut
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    date: {
        color: "#fff", // Couleur du texte de la date
        fontSize: 16,
        fontWeight: "bold",
    },
    temperatureContainer: {
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 56, // Ajustement de la distance
        marginLeft: 20, // Ajustement de la position vers la gauche
    },
    temperature: {
        color: "#fff", // Couleur du texte de la température
        fontSize: 16,
        fontWeight: "bold",
    },
    imagesRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 30, // Ajustement de la distance
    },
    image: {
        width: 120, // Ajustez la largeur de l'image selon vos besoins
        height: 120, // Ajustez la hauteur de l'image selon vos besoins
    },
    frameContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 70, // Ajustement de la distance
    },
    frameImage: {
        width: 353, // Ajustez la largeur de l'image selon vos besoins
        height: 266.22, // Ajustez la hauteur de l'image selon vos besoins
    },
    icon: {
        width: 24,
        height: 24,
    },

    background: {
        // Ajoutez ici votre style pour le fond sans aucun élément
        // Par exemple : width: '100%', height: '100%', backgroundColor: 'votreCouleur', etc.
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fontFamily.semiBold600,
      },
});

export default Home;
