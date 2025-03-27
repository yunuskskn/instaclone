import React from "react";
import {SafeAreaView, Text, StyleSheet} from "react-native";
import Button from "../components/Button"

function Login({navigation}) {

    function goToLoginİnformation(){
        navigation.navigate("LoginİnformationScreen")
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>InstaClon</Text>
            <Button  text="Giriş Safyasına git" onPress={goToLoginİnformation}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "black"
    },
    header: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        padding: 10,
        color: "white"
    }
})

export default Login;