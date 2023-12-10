// SignUpForm.js
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {colors, fontFamily} from '../GlobalStyles'; // Import your colors here

const SignUpForm = ({navigation}) => {
    return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Create an Account</Text>
            <View style={{width: '100%'}}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        placeholder="Full Name"
                        placeholderTextColor={colors.custom400}
                        style={[styles.input, {color: colors.custom400}]}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={colors.custom400}
                        style={[styles.input, {color: colors.custom400}]}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={colors.custom400}
                        style={[styles.input, {color: colors.custom400}]}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Company</Text>
                    <TextInput
                        placeholder="Company"
                        placeholderTextColor={colors.custom400}
                        style={[styles.input, {color: colors.custom400}]}
                        
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Driving license Type</Text>
                    <TextInput
                        placeholder="Driving license Type"
                        placeholderTextColor={colors.custom400}
                        style={[styles.input, {color: colors.custom400}]}
                        
                    />
                </View>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('FaceID')}
            >
                <Text style={styles.buttonText}>Sign Up</Text>

            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        alignItems: 'center',
        gap: 20,
    },
    formTitle: {
        fontSize: 24,
        fontFamily: fontFamily.bold700,
        color: colors.white,
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: colors.custom300,
        backgroundColor: colors.custom100,
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        width: '100%',
        fontSize: 16,
    },
    label: {
        color: colors.white,
        marginTop: 5,
        textAlign: 'left',
        fontFamily: fontFamily.medium500,
        fontSize: 14,
    },
    button: {
        backgroundColor: colors.secondary,
        width: '100%',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fontFamily.semiBold600,
    },

});

export default SignUpForm;
