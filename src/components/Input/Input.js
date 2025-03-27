import React from "react";
import {Text, TextInput, View, SafeAreaView} from "react-native"

import styles from "./Input.Style"

function Input({onChangeText, placeholder}){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.input_container}>
                <TextInput placeholder={placeholder} onChangeText={onChangeText} placeholderTextColor="gray" />
            </View>
        </SafeAreaView>
    )
}

export default Input;