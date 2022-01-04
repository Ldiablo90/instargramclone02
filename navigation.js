import React from 'react'
import { View, Text } from 'react-native'
import { createNavigator, NavigationContainer } from 'react-navigation'

const Stack = createNavigator()

const screenOption = {
    headerShown: false
}

const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOption={screenOption}>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='NewPostScreen' component={NewPostScreen}/>
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
