import Image from "next/image";
import styles from "./home.module.css"

const Home = () => {
    return <div className={styles.container}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Creative <span style={{ color: 'var(--btn)' }}>NeX-Level</span> Agency</h1>
            <p className={styles.desc}>We are thinkers, doers — and above all — <span style={{ color: 'var(--btn)' }}>builders.</span>
                <br />
                Creating <span style={{ color: 'var(--btn)' }}>innovative</span>, exceptional experiences that solve complex challenges for the world's biggest brands.</p>
            <div className={styles.buttons}>
                <button className={styles.button}>Learn More</button>
                <button className={styles.button}>Contact</button>
            </div>
            <div className={styles.brands}>
                <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
            </div>
        </div>
        <div className={styles.imgContainer}>
            <Image src="/heroOrange.gif" alt="" fill className={styles.heroImg}/>
        </div>
    </div>;
};

export default Home;