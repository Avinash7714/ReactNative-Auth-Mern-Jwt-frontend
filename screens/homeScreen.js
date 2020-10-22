import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,

    Alert,
} from "react-native";
import Logo from "../components/logo";


function homeScreen(props) {
    Alert.alert("Successfully Signed Up");
    return (
        <div>
            <View style={styles.container}>
                <Logo />
                <Text style={styles.text}>Home</Text>
                <Text style={styles.text}>Welcome to EAZR.</Text>
            </View>
        </div>
    );
}

export default homeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "whitesmoke",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#40AFEC",
        fontSize: 30,
    },
});
