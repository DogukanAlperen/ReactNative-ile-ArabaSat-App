import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Login,RegisterPage } from '../screens'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();

const accessibleNavigator = () => {
  return (
    <Stack.Navigator>
       <Stack.Screens name ="LoginPage"component={Login}/>
       <Stack.Screens name="Register" component={RegisterPage}/>

    </Stack.Navigator>
  )
}

export default accessibleNavigator

const styles = StyleSheet.create({})