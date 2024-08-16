import PostCard from "@/components/postCard/postCard"
import styles from "./blog.module.css"
import { getPosts } from "@/lib/data"

//fetch data with api
const getData = async () => {
    const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});
    if  (!res.ok) {
        throw new Error("Something went wrong.");
    }
    return res.json();
}

const BlogPage = async () => {
    //fetch data without api
   //const posts = await getPosts();

    //fetch data with api
    const posts = await getData();

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Seeking <span style={{color: 'var(--btn)'}}>inspiration?</span> <br/>Scroll through our <span style={{color: 'var(--btn)'}}>blog.</span></h1>
            <div className={styles.container}>
                {posts.map((post) => (
                    <div className={styles.post} key={post.id}>
                        <PostCard post={post}/>
                    </div>
                ))}
            </div>
        </div>
    )
} 

export default BlogPage