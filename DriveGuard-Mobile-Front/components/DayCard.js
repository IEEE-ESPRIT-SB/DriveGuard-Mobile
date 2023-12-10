import {View, Text, StyleSheet} from "react-native";
import {colors} from "../GlobalStyles";

const DayCard = ({ day, dayNumber }) => {
    return (
        <View
            style={[styles.square, { backgroundColor: dayNumber === 6 ? colors.secondary : "white" }]}
        >
            <Text style={styles.squareText}>{day}</Text>
            <Text style={styles.squareNumber}>{dayNumber}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    squareContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        marginHorizontal: 40
    },
    square: {
        width: 60,
        height: 100,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginHorizontal: 10
    },
    squareText: {
        color: "#09404D",
        fontSize: 18,
        fontWeight: "bold",
    },
    squareNumber: {
        color: "#09404D",
        fontSize: 16,
    },
});
export default DayCard;