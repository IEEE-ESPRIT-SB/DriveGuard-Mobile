import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {fontFamily} from "../GlobalStyles";

const Profile = () => {
    const [image, setImage] = useState(null);
    const [editing, setEditing] = useState(false);
    const [username, setUsername] = useState('Your Username');
    const [location, setlocation] = useState('Ariana, Tunisia');
    const [phonenumber, setphonenumber] = useState('+21651817281');
    const [email, setemail] = useState('example@gmail.com');
    const [occupation, setoccupation] = useState('bus driver');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
        setEditing(false);
    };

    const handleProfilePress = () => {
        if (!editing) {
            setEditing(true);
        } else {
            pickImage();
        }
    };

    const handleSquarePress = () => {
        // Your logic for handling the square button press
        console.log('Square button pressed!');
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/ui.png')} style={styles.backgroundImage}>
                <TouchableOpacity onPress={handleProfilePress}>
                    <View style={styles.profileContainer}>
                        <Image source={image ? { uri: image } : require('../assets/images/user.png')} style={styles.profileImage} />

                        {editing && (
                            <View style={styles.editOverlay}>
                                <Text style={styles.editText}>Edit</Text>
                            </View>
                        )}
                    </View>
                </TouchableOpacity>

                <Text style={styles.usernameText}>{username}</Text>
                <View style={styles.contactIcons}>
                    <Image source={require('../assets/images//location.png')} style={styles.icon} />
                    <Image source={require('../assets/images//doura.png')} style={styles.icon} />
                    <Image source={require('../assets/images//mail.png')} style={styles.icon} />
                    <Image source={require('../assets/images//cin.png')} style={styles.icon} />
                </View>
                <View style={styles.contactText}>
                    <Text style={styles.Text}>{location}</Text>
                    <Text style={styles.Text}>{phonenumber}</Text>
                    <Text style={styles.Text}>{email}</Text>
                    <Text style={styles.Text}>{occupation}</Text>
                </View>
                <TouchableOpacity style={styles.square} onPress={handleSquarePress}>
                    <Text style={styles.buttonText}>Leave Feedback</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.square2} onPress={handleSquarePress}>
                    <Text style={styles.buttonText}>Language</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutsquare} onPress={handleSquarePress}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
                <View style={styles.buttonicons}>
                    <Image source={require('../assets/images//comment.png')} style={styles.buttonicon} />
                    <Image source={require('../assets/images//language.png')} style={styles.buttonicon} />
                </View>
                <Image source={require('../assets/images//Rectangle.png')} style={styles.navbarImage} />
                <View style={styles.navbarIcons}>
                    <TouchableOpacity onPress={() => console.log('Home icon pressed!')}>
                        <Image source={require('../assets/images//home.png')} style={styles.buttonicon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Shape icon pressed!')}>
                        <Image source={require('../assets/images//shape.png')} style={styles.buttonicon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Document icon pressed!')}>
                        <Image source={require('../assets/images//document.png')} style={styles.buttonicon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Profile icon pressed!')}>
                        <Image source={require('../assets/images//Profile.png')} style={styles.buttonicon} />
                    </TouchableOpacity>
                </View>

            </ImageBackground>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
    },
    profileContainer: {
        marginTop: 111,
        position: 'relative',
        alignItems: 'center',
    },
    profileImage: {
        width: 132,
        height: 132,
        borderRadius: 66,
        marginTop: 10,
        alignItems: 'center',
    },
    editOverlay: {
        ...StyleSheet.absoluteFillObject,
        position: 'absolute',
        width: 132,
        height: 132,
        borderRadius: 66,
        marginTop: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    editText: {
        color: 'white',
        fontSize: 18,
        fontFamily: fontFamily.bold700,
        alignItems: 'center',
    },
    usernameText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 25,
        width: '156',
        height: '28',
        fontFamily: fontFamily.bold700,
        marginTop: 20,
        lineHeight: 28,
    },
    buttonText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 18,
        width: '156',
        height: '28',
        fontFamily: fontFamily.bold700,
        lineHeight: 28,
    },
    Text: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: fontFamily.semiBold600,
        marginTop: 20,
        lineHeight: 28,
    },
    contactIcons: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 30,
        marginLeft: 150,
        width: '80%',
        gap: 14,
    },
    buttonicons: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 80,
        marginLeft: 530,
        width: '80%',
        gap: 45,
    },
    icon: {
        width: 18,
        height: 18,
    },
    buttonicon: {
        width: 18,
        height: 18,
    },
    contactText: {
        textAlign: 'left',
        flexDirection: 'column',
        marginTop: -139,
        width: '80%',
        gap: -16,
    },
    square: {
        width: 280,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginTop: 520,
        backgroundColor:'#3E6F7C',
        position: 'absolute',


    },
    square2: {
        width: 280,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginTop: 580,
        backgroundColor:'#3E6F7C',
        position: 'absolute',
    },
    logoutsquare: {
        width: 320,
        height:54,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 690,
        backgroundColor:'#19C2A4',
        position: 'absolute',
        shadowColor:'black',
        shadowOpacity:'1%',
        shadowRadius:'2'
    },
    navbarImage: {
        marginTop:220,
        height: 70,
        resizeMode:'cover',
        alignItems:'center',
        width: '90%',
        borderRadius:20,

    },
    navbarIcons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -50,
        width: '80%',
        gap: 14,
    }

});

export default Profile;
