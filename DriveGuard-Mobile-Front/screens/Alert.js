import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {CircularProgressBase} from 'react-native-circular-progress-indicator';
import {fontFamily} from "../GlobalStyles";


const totalSeconds = 15;

const Alert = () => {
    const [countdown, setCountdown] = useState(totalSeconds);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatCountdown = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    };

    const progress = (totalSeconds - countdown) / totalSeconds;

    return (
        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Calling emergency after</Text>
            </View>
            <CircularProgressBase
                value={100}
                radius={160}
                inActiveStrokeOpacity={1}
                activeStrokeWidth={20}
                inActiveStrokeWidth={20}
                activeStrokePrimaryColor="#19C2A4"
                inActiveStrokeColor="white"
                duration={15000}
                dashedStrokeConfig={{
                    count: 50,
                    width: 4,
                }}

            ><Text style={styles.text}>{formatCountdown(countdown)}</Text>
                <Text style={styles.smalltext}>Total 15 Seconds</Text></CircularProgressBase>

        </View>

    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#09404D',
    },
    text: {
        fontSize: 60,
        color: '#19C2A4',
        fontFamily: fontFamily.bold700,
    },
    smalltext: {
        fontSize: 20,
        color: '#19C2A4',
        fontFamily : fontFamily.semiBold600,
        textAlign: 'center',
    },
    titleContainer: {
        marginBottom: 80,
    },
    title: {
        fontSize: 40,
        color: 'white',
        fontFamily: fontFamily.bold700,
        textAlign: 'center',
    },



});

export default Alert;
