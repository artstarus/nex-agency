import Image from "next/image"
import styles from "./singlePost.module.css"

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/post.png" alt="post image" fill className={styles.img}/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image src="/avatar.png" alt="avatar image" width={50} height={50} className={styles.avatar}/>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>John Doe</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2001</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint accusantium corrupti, tenetur praesentium rem perspiciatis fuga placeat, voluptates doloremque eveniet amet voluptatum tempora error vero maxime! Recusandae delectus eos quam.
                </div>
            </div>
        </div>
    )
} 

export default SinglePostPage