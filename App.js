import React from 'react'
import Login from './android/app/src/screens/Login'
import RegisterPage from './android/app/src/screens/RegisterPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>

        <Stack.Screen name='Login Page' component={Login}/>
        <Stack.Screen name='Register ' component={RegisterPage}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App