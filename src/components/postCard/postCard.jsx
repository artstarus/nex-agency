import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="/post.png" alt="post image" fill className={styles.img}/>
                </div>
                <span className={styles.date}>01.01.2001</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iusto non eveniet, tempore, et reiciendis nobis dolores ea exercitationem qui quaerat amet maxime blanditiis quia? Corporis eveniet inventore iure similique.</p>
                <Link className={styles.link} href="/blog/post">Read more...</Link>
            </div>
        </div>
    )
} 

export default PostCard