import React, { useState, useEffect } from 'react'
import { View, Text, Image, TextInput, Button } from 'react-native'
import * as Yup from 'yup';
import { Formik } from 'formik'
import validUrl from 'valid-url'
import { firebase, db } from '../../firebase'


const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, ' Caption has reached the charcter limit.')
})

const FormikPostUploader = ({ navigation }) => {
    const PLACEHOLDER_IMG = 'https://picsum.photos/id/1/200'

    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null)

    const getUsername = () => {
        const user = firebase.auth().currentUser
        const unsubscribe = db
            .collection('user')
            .where('owner_uid', '==', user.uid)
            .limit(1)
            .onSnapshot(snapshot => snapshot.docs.map(doc => {
                setCurrentLoggedInUser({
                    username: doc.data().username,
                    profilePicture: doc.data().profile_picture,
                })
            }))
        return unsubscribe
    }

    useEffect(() => {
        getUsername()
    }, [])
    const uploadPostToFire = (imageUrl, caption) => {
        const unsubscribe = db
            .collection('users')
            .doc(firebase.auth().currentUser.email)
            .collection('posts')
            .add({
                imageUrl: imageUrl,
                user: currentLoggedInUser.username,
                profile_picture: currentLoggedInUser.profilePicture,
                owren_uid: firebase.auth().currentUser.uid,
                caption: caption,
                createAt: firebase.firestore.FieldValue.serverTimestamp(),
                likes: 0,
                like_by_users: [],
                comments: []
            })
            .then(()=> navigation.goBack())
            .catch(err => console.log(err.message))
        return unsubscribe
    }

    return (
        <Formik
            initialValues={{ caption: '', inageUrl: '' }}
            onSubmit={(values) => {
                uploadPostToFire(values.inageUrl, values.caption)
            }}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) =>
                <>
                    <View
                        style={{
                            margin: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Image
                            source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG }}
                            style={{ width: 100, height: 100 }}
                        />
                        <View style={{ flex: 1 }}>
                            <TextInput
                                style={{ color: 'white', fontSize: 20 }}
                                placeholder='Write a caption ...'
                                placeholderTextColor='gray'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                    </View>

                    <TextInput
                        onChange={(e => setThumbnailUrl(e.nativeEvent.text))}
                        style={{ color: 'white', }}
                        placeholder='Enter Image Url'
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl || ''}
                    />
                    {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: 'red' }}>
                            {errors.imageUrl}
                        </Text>
                    )}
                    <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
                </>
            }
        </Formik>
    )
}

export default FormikPostUploader
