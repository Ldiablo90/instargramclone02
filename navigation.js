import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
const Stack = createNativeStackNavigator()

const screenOption = {
    headerShown: false
}

export const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOption}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='SignupScreen' screenOptions={screenOption}>
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignupScreen' component={SignupScreen} />
            
        </Stack.Navigator>
    </NavigationContainer>
)

const navigation = () => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default SignedInStack
