import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Yazı = ({ title, isSecureText, handlePlaceholder, handleonChangeText, handlePassword }) => {
    return (

        <View style={styles.inputContainer}>

            <Text style={styles.inputBox}>{title}</Text>
            <TextInput
                secureTextEntry={isSecureText}
                placeholder={handlePlaceholder}
                style={styles.textInputstyle}
                onChangeText={handleonChangeText}
                value={handlePassword}

            />
        </View>

    )
}

export default Yazı

const styles = StyleSheet.create({
    inputContainer: {
        width: '%80',

    },
    inputBox: {

        fontWeight: 'bold',


    },
    textInputstyle: {
        borderWidth: 1,
        width: '80%',
        height: 50,
        borderRadius: 5,
        marginVertical: 10,
        textAlign: 'center',
        fontWeight: 'bold',


    },
})