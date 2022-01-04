import React, { useState } from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/home.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png'
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/search.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/search--v1.png'
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/streaming-video.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/streaming-video.png'
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png'
    },
    {
        name: 'Profile',
        active: 'user01.png',
        inactive: ''
    },
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home');
    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image
                source={
                    icon.name != 'Profile'
                        ? { uri: activeTab === icon.name ? icon.active : icon.inactive }
                        : require(`../../assets/users/${icon.active}`)

                }
                style={[
                    styles.icon,
                    icon.name == 'Profile' ? styles.profilePic:null
                ]} />
        </TouchableOpacity>
    )
    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'fixed',
        width: '100%',
        bottom: 0,
        index: 999,
        backgroundColor: '#000'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10
    },
    icon: {
        width: 25,
        height: 25,
    },
    profilePic: {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff'
    }
})


export default BottomTabs
