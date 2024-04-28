
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import accessibleNavigator from './accessibleNavigator';
import usersNavigator from './usersNavigator';


const anaNavigator = () => {

    const isaccesible = false
  return (
    <NavigationContainer> 

        !isaccesible 
            ?<accessibleNavigator/>
            :<usersNavigator/>

    </NavigationContainer>
    )
}

export default anaNavigator

