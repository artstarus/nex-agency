import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>ArtNeX</div>
            <div className={styles.text}>NeX creative agency © All rights reserved.</div>
        </div>
    )
} 

export default Footer