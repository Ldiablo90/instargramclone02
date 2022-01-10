import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

import { firebase, db } from '../../firebase'

const SignupForm = ({ navigation }) => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is requied'),
        password: Yup.string().required().min(6, 'Your password has to have at least 8 characters')
    })

    const getRandomProfilePicture = async () => {
        const response = await fetch(`https://randomuser.me/api`)
        const data = await response.json()
        return data.results[0].picture.large
    }

    const onSignup = async (email, password, username) => {
        try {
            const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
            db.collection('user')
                .doc(authUser.user.email)
                .set({
                    owner_uid: authUser.user.uid,
                    username: username,
                    email: authUser.user.email,
                    profile_picture: await getRandomProfilePicture()
                })
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', username: '', password: '' }}
                onSubmit={values => {
                    onSignup(values.email, values.password, values.username)
                }}
                validationSchema={SignupFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                    <>
                        <View style={[styles.inputField, { borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#bbb' : 'red' }]}>
                            <TextInput
                                placeholder='Phone number, username or email'
                                placeholderTextColor='#444'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <View style={[styles.inputField, {
                            borderColor: !values.username.length || values.username.length > 1 ? '#bbb' : 'red'
                        }]}>
                            <TextInput
                                placeholder='Username'
                                placeholderTextColor='#444'
                                autoCapitalize='none'
                                autoCorrect={false}
                                textContentType='text'
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                        </View>
                        <View style={[styles.inputField, {
                            borderColor: !values.password.length || values.password.length > 5 ? '#bbb' : 'red'
                        }]}>
                            <TextInput
                                placeholder='Password'
                                placeholderTextColor='#444'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>

                        <Pressable
                            titleSize={20}
                            style={[styles.button, { backgroundColor: isValid ? '#6BB0F5' : '#9ACAF7' }]}
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </Pressable>
                        <View style={styles.signupContainer}>
                            <Text>Already have an account?</Text>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                            >
                                <Text style={{ color: '#6BB0F5' }}>Log In</Text>
                            </TouchableOpacity>
                        </View>

                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80
    },
    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1
    },
    button: {
        textAlign: 'center',
        paddingVertical: 8,
        borderRadius: 5
    },
    buttonText: {
        color: 'white'
    },
    signupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
        fontSize: '.7rem'
    }
})


export default SignupForm
