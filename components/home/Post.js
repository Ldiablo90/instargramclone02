import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'

import { firebase, db } from '../../firebase'

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
        likedImageUrl: 'https://img.icons8.com/material/90/fa314a/like--v1.png'
    },
    {
        name: 'Comment',
        imageUrl: 'https://img.icons8.com/material-outlined/60/ffffff/filled-topic.png'
    },
    {
        name: 'Share',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/cloud.png'
    },
    {
        name: 'Save',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark-ribbon--v1.png'
    },
]

const Post = ({ post }) => {

    const handleLike = post => {
        const currentLikeStatus = !post.likes_by_users.includes(
            firebase.auth().currentUser.email
        )
        db.collection('users')
            .doc(post.owner_email)
            .collection('posts')
            .doc(post.id)
            .update({
                likes_by_users: currentLikeStatus ?
                    firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.email)
                    : firebase.firestore.FieldValue.arrayRemove(firebase.auth().currentUser.email)
            })
            .then(() => { })
    }

    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter post={post} handleLike={handleLike} />
                <Likes post={post} />
                <Caption post={post} />
                <CommentsSection post={post} />
                <Comments post={post} />
            </View>
        </View>
    )
}

const PostHeader = ({ post }) => (
    <View style={styles.postwrapper}>
        <View style={styles.userwrapper}>
            <Image source={require(`../../assets/users/${post.profile_picture}`)} style={styles.userImage} />
            <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>{post.user}</Text>
        </View>
        <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
    </View>
)
const PostImage = ({ post }) => (
    <View style={styles.postimagewrapper}>
        <Image source={require(`../../assets/posts/${post.imageUrl}`)} style={{ height: '100%', resizeMode: 'cover' }} />
    </View>
)
const PostFooter = ({ handleLike, post }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.leftfooterIconsContainer}>
            <TouchableOpacity onPress={()=>handleLike(post)}>
                <Image
                    style={styles.footerIcon}
                    source={{ uri: postFooterIcons[0].imageUrl }}
                />

            </TouchableOpacity>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl}></Icon>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl}></Icon>

        </View>
        <View>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl}></Icon>

        </View>
    </View>
)

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Text style={{ color: 'white', fontWeight: '600' }}>{post.likes} likes</Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>

        <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: '600' }}>{post.user}</Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
)

const CommentsSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {!!post.comments.length && (
            <Text style={{ color: 'gray' }}>
                VIew {post.comments.length > 1 ? 'all' : ''} {post.comments.length}
                {post.comments.length > 1 ? 'comments' : 'comment'}
            </Text>

        )}
    </View>
)

const Comments = ({ post }) => (
    <>
        {post.comments.map((comment, index) => (
            <View style={{
                flexDirection: 'row',
                marginTop: 5
            }} key={index}>
                <Text style={{ color: 'white' }}>
                    <Text style={{ fontWeight: '600' }}>{comment.user}</Text>
                    <Text> {comment.comment}</Text>
                </Text>
            </View>
        ))}
    </>
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
    footerIcon: {
        width: 25,
        height: 25,
    },
    leftfooterIconsContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between'
    }
})
export default Post
