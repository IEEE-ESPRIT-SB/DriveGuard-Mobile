import {Image, StyleSheet, Text, View} from "react-native";
import {colors, fontFamily, fontSize} from "../GlobalStyles";
import {FontAwesome5} from "@expo/vector-icons";
import TempImage from "../assets/temp.png";

const StatCard = ({title, value, icon}) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardHeader}>
                <Image source={TempImage} style={styles.icon}/>
                <Text style={styles.value}>{value}</Text>
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default StatCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.custom200,
        flexDirection: "column",
        paddingHorizontal: 5,
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 20,
        gap: 0
    },

    title: {
        color: colors.white,
        fontSize: fontSize.md,
        fontFamily: fontFamily.bold700,
    },
    value: {
        color: colors.white,
        fontSize: fontSize.xl,
        fontFamily: fontFamily.regular400,
    },
    icon: {
        width: 70,
        height: 70,
        resizeMode: "contain"
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "flex-end",
        // justifyContent: "space-between",
    }
});