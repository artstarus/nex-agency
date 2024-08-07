import { unstable_noStore as noStore } from "next/cache";
import { Post, User } from "./models";
import { connectDb } from "./utils";

//temporary data

// const  users  = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Kate'},
//     {id: 3, name: 'Steve'},
// ]

// const posts = [
//     {id: 1, title: 'Post 1', body: 'temptemptemptemptemp', userId: 1},
//     {id: 2, title: 'Post 2', body: 'temptemptemptemptemp', userId: 1},
//     {id: 3, title: 'Post 3', body: 'temptemptemptemptemp', userId: 2},
//     {id: 4, title: 'Post 4', body: 'temptemptemptemptemp', userId: 2},
//     {id: 5, title: 'Post 5', body: 'temptemptemptemptemp', userId: 3},
//     {id: 6, title: 'Post 6', body: 'temptemptemptemptemp', userId: 3},
// ]


export const getPosts = async () => {
    try {
        connectDb();
        const posts = await Post.find();
        return posts;
    } catch(error) {
        console.log(error);
        throw new Error("Failed to fetch posts.");
    }
}

export const getPost = async (slug) =>  {
    try {
        connectDb();
        const post = await Post.findOne({slug});
        return post;
    } catch(error) {
        console.log(error);
        throw new Error("Failed to fetch post.");
    }
}

export const getUser = async (id) => {
    noStore();
    try {
        connectDb();
        const user = await User.findById(id);
        return user;
    } catch(error) {
        console.log(error);
        throw new Error("Failed to fetch user.");
    }
}

export const getUsers = async () => {
    try {
        connectDb();
        const users = await User.find();
        return users;
    } catch(error) {
        console.log(error);
        throw new Error("Failed to fetch users.");
    }
}