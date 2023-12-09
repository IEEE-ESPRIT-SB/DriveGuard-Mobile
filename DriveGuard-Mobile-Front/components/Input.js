import {Text, View, StyleSheet, TextInput} from "react-native";
import {fontSize, colors} from "../GlobalStyles";

const Input = ({label, value, setValue}) => {
    return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.input}>
            <TextInput
                value={value}
                onChangeText={setValue}
                style={styles.inputText}
                placeholder={label}
                placeholderTextColor={colors.white}
            >
            </TextInput>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",

    },
    input: {
        backgroundColor: colors.custom500,
        borderRadius: 5,
        borderColor: colors.white,
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    inputText: {
        color: colors.white,
        fontSize: fontSize.md,
    },
    label: {
        color: colors.white,
        fontSize: fontSize.md,
        marginBottom: 5,
    }

})
export default Input;