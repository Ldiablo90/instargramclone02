import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
        </View>
    )
}

const PostHeader = ({ post }) => (
    <View style={styles.postwrapper}>
        <View style={styles.userwrapper}>
            <Image source={require(`../assets/users/${post.profile_picture}`)} style={styles.userImage} />
            <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>{post.user}</Text>
        </View>
        <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
    </View>
)
const PostImage = ({ post }) => (
    <View style={styles.postimagewrapper}>
        <Image source={require(`../assets/posts/${post.imageUrl}`)} style={{ height: '100%', resizeMode: 'cover' }} />
    </View>
)
const PostFooter = ({post}) => (
    <Icon imgStyle={styles.footerIcon} imgUrl={}></Icon>
)

const Icon = ({imgStyle, imgUrl}) =>(
    <TouchableOpacity>
        <Image style={imgStyle} source={require(`../assets/${imgUrl}`)}/>
    </TouchableOpacity>
)
const styles = StyleSheet.create({
    postwrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5
    },
    userwrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postimagewrapper: {
        width: '100%',
        height: 300
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        marginLeft: 6,
        borderWidth: 3,
        borderColor: "#ff8501",
        resizeMode: 'contain'
    },
    footerIcon:{
        width:33,
        height:33,
    }
})
export default Post
