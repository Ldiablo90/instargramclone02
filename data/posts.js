import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl:'post01.png',
        user:USERS[0].user,
        likes: 2022,
        caption: 'necessitatibus voluptas quo asperiores corrupti provident! Deserunt, tenetur totam.',
        profile_picture:USERS[0].image,
        comments:[
            
        ]
    },
    {
        imageUrl:'post02.png',
        user:USERS[1].user,
        likes: 4041,
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        profile_picture:USERS[1].image,
        comments:[
           
        ]
    },
    {
        imageUrl:'post01.png',
        user:USERS[2].user,
        likes: 158,
        caption: 'Nisi temporibus perspiciatis velit ipsam vero alias sit fugiat, ad repellat exercitationem',
        profile_picture:USERS[2].image,
        comments:[
            {
                user:'',
                comment:''
            },
            {
                user:'',
                comment:''
            },
        ]
    },
]