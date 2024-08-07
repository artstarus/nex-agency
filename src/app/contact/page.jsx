import Image from "next/image"
import styles from "./contact.module.css"

export const metadata = {
    title: "Contact Page",
    description: "NeX Agency Contact description",
};

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="contact image" fill className={styles.img}/>
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email address"/>
                    <input type="text" placeholder="Mobile number (Optional)"/>
                    <textarea 
                        name=""
                        id=""
                        cols=""
                        rows=""
                        placeholder="Message"
                    ></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
} 

export default ContactPage