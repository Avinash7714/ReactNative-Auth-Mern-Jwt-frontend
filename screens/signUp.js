import React, { useState } from "react";
import Config from '../config';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import { emailValidator, passwordValidator } from "../utils/validator";
import Logo from "../components/logo";

export default function SignUp({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const _onSignUpPressed = () => {
        const emailError = emailValidator(email);
        const passwordError = passwordValidator(password);

        if (emailError || passwordError) {
            return Alert.alert(emailError || passwordError);
        }
        if (!passwordCheck || password !== passwordCheck) {
            return Alert.alert("password dosen't Match");
        }

        fetch(`${Config.baseUrl}/users/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, password, passwordCheck,
            }),
        }).then(() => {
            navigation.navigate('SignIn');
            Alert.alert("Successfully Signed Up");
        }).catch((error) => {
            console.log(error);
            Alert.alert(error.msg || error.message);
        });
    };
    return (
        <View style={styles.container}>
            <Logo />
            <Text style={styles.text}>Sign Up</Text>

            <TextInput
                style={styles.inputBox}
                onChangeText={(email) => setEmail(email)}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Email"
                placeholderTextColor="#40AFEC"
                selectionColor="lightgrey"
                keyboardType="email-address"
            />

            <TextInput
                style={styles.inputBox}
                onChangeText={(password) => setPassword(password)}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#40AFEC"
            />
            <TextInput
                style={styles.inputBox}
                onChangeText={(password) => setPasswordCheck(password)}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Re-enter password"
                secureTextEntry={true}
                placeholderTextColor="#40AFEC"
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={_onSignUpPressed}>
                    Sign Up
        </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => navigation.navigate('SignIn')}>
                    Sign in
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#40AFEC",
        fontSize: 30,
    },
    inputBox: {
        width: 300,
        height: 50,
        backgroundColor: "#eeeeee",
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#40AFEC",
        marginVertical: 10,
    },
    button: {
        width: 150,
        backgroundColor: "#40AFEC",
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#fff",
        textAlign: "center",
    },
});
