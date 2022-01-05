import React, { useState } from 'react'
import { View, Text, Image, TextInput, Button } from 'react-native'
import * as Yup from 'yup';
import { Formik } from 'formik'
import validUrl from 'valid-url'
const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, ' Caption has reached the charcter limit.')
})

const FormikPostUploader = ({navigation}) => {
    const PLACEHOLDER_IMG = 'https://picsum.photos/id/1/200'

    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)

    return (
        <Formik
            initialValues={{ caption: '', inageUrl: '' }}
            onSubmit={(values) => {
                console.log(values);
                navigation.goBack();
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
