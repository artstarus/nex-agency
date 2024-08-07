import Image from "next/image"
import styles from "./singlePost.module.css"
import { Suspense } from "react"
import { getPost } from "@/lib/data"
import PostUser from "@/components/postUser/postuser"

export const generateMetadata = async ({params}) => {
    const {slug} = params;
    const post = await getPost(slug);
    return {
        title: post.title,
        description: post.desc,
    }
}

const SinglePostPage = async ({params}) => {
    const {slug} = params;
    const post = await getPost(slug);

    return (
        <div className={styles.container}>
            {post.img && <div className={styles.imgContainer}>
                <Image src={post.img} alt="post image" fill className={styles.img}/>
            </div>}
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostUser userId={post.userId}/>
                        </Suspense>
                    )}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.desc}
                </div>
            </div>
        </div>
    )
} 

export default SinglePostPage