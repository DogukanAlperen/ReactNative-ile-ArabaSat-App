import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AnaSayfa, Profil } from "../screens/index";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();

const usersNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screens name="Anasayfa" component={AnaSayfa} />
            <Stack.Screens name="Profilim" component={Profil} />

        </Stack.Navigator>
    )
}

export default usersNavigator

const styles = StyleSheet.create({})