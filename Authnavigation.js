import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { SignedInStack, SignedOutStack } from './navigation'
import firebase from 'firebase'


const Authnavigation = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const useHandler = user => user? setCurrentUser(user) : setCurrentUser(null)
    useEffect(() =>  firebase.auth().onAuthStateChanged(user => useHandler(user)),[])

    return <>{ currentUser ? <SignedInStack/>: <SignedOutStack/>}</>
}

export default Authnavigation
