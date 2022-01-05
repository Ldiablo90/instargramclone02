import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

const SignupForm = ({navigation}) => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is requied'),
        password: Yup.string().required().min(8, 'Your password has to have at least 8 characters')
    })


    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', username:'', password: '' }}
                onSubmit={values => {
                    console.log(values)
                }}
                validationSchema={SignupFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                    <>
                        <View style={[styles.inputField, {borderColor: values.email.length < 1 || Validator.validate(values.email)? '#bbb':'red'}]}>
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
                            borderColor: !values.username.length || values.username.length > 1 ? '#bbb':'red'
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
                            borderColor: !values.password.length || values.password.length > 7 ? '#bbb':'red'
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
                            style={[styles.button, {backgroundColor: isValid?'#6BB0F5':'#9ACAF7'}]}
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </Pressable>
                        <View style={styles.signupContainer}>
                            <Text>Already have an account?</Text>
                            <TouchableOpacity
                                onPress={()=>navigation.goBack()}
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
    button:{
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
