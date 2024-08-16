"use server";

import { signIn, signOut } from "./auth";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectDb } from "./utils";
import bcrypt from "bcryptjs";

export const addPost = async (previousState, formData) => {
    const {title, desc, slug, img, userId} = Object.fromEntries(formData);

    try {
        connectDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            img,
            userId,
        });
        await newPost.save();
        console.log("saved to db.");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        return {error: "Something went wrong."};
    }
};

export const deletePost = async (formData) => {
    const {id} = Object.fromEntries(formData);

    try {
        connectDb();
        await Post.findByIdAndDelete(id);
        console.log("deleted from db.")
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        return {error: "Something went wrong."};
    }
}


export const addUser = async (previousState, formData) => {
    const {username, email, password, img, isAdmin} = Object.fromEntries(formData);

    try {
        connectDb();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword =  await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
            isAdmin,
        });
        await newUser.save();
        console.log("saved to db.");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        return {error: "Something went wrong."};
    }
}

export const deleteUser = async (formData) => {
    const {id} = Object.fromEntries(formData);

    try {
        connectDb();
        await Post.deleteMany({userId:id});
        await User.findByIdAndDelete(id);
        console.log("deleted from db.")
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        return {error: "Something went wrong."};
    }
}



export const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
}

export const handleLogout = async () => {
    "use server";
    await signOut();
}

export const register = async (previousState, formData) => {
    const {username, email, img, password, confirmPassword} = Object.fromEntries(formData);

    if (password !== confirmPassword) {
        return {error: "Passwords do not match."};
    }

    try {
        connectDb();
        const user = await User.findOne({username});
        if (user) {
            return {error: "Username already exists."};
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword =  await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            img,
            password: hashedPassword,
        });
        await newUser.save();
        console.log("saved to db.");
        return {success: true};
    } catch (error) {
        console.log(error);
        return {error: "Something went wrong."};
    }
}

export const login = async (previousState, formData) => {
    const {username, password} = Object.fromEntries(formData);

    try {
        await signIn("credentials", {username, password});
    } catch (error) {
        console.log(error);
        if (error.message.includes("CredentialsSignin")) {
            return {error: "Invalid username or password"};
        }
        throw error;
    }
}