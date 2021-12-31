import React, { StrictMode } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    style={styles.logo}
                    source={require('../assets/header_logo.png')}
                />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={{uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png"}}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={{uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png"}}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>11</Text>
                    </View>
                    <Image
                        style={styles.icon}
                        source={{uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png"}}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20
    },
    logo: {
        width: 80,
        height: 30,
        resizeMode: 'contain'
    },
    iconsContainer: {
        flexDirection: 'row',

    },
    icon: {
        width: 25,
        height: 25,
        marginLeft:10,
        resizeMode: 'contain',
    },
    unreadBadge:{
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 20,
        bottom: 13,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        zIndex: 100
    },
    unreadBadgeText:{
        color: 'white',
        fontWeight: '600',
    }
})

export default Header
