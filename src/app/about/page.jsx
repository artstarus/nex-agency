import Image from "next/image"
import styles from "./about.module.css"

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>
                We develop digital concepts that push <span style={{color: 'var(--btn)'}}>boundaries, </span>  
                inspire <span style={{color: 'var(--btn)'}}>boldness, </span>
                and achieve <span style={{color: 'var(--btn)'}}>brilliance.</span>
                </h1>
                <p className={styles.desc}>
                With a strong belief in strategically founded and highly crafted digital experiences, we partner with clients for the long term.
                <br/> From concepts to campaigns, we make brands shine, delivering creative support at every stage of your brand journey.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10+</h1>
                        <p>Years of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>575 K+</h1>
                        <p>People reached</p>
                    </div>
                    <div className={styles.box}>
                        <h1>4 K+</h1>
                        <p>Services provided</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/about.png" alt="About Image" fill className={styles.img}/>
            </div>
        </div>
    )
} 

export default AboutPage