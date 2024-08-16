import Image from "next/image"
import styles from "./contact.module.css"

export const metadata = {
    title: "Contact Page",
    description: "NeX Agency Contact description",
};

const ContactPage = () => {

    // const handleClick = () => {
    //     alert('Message sent!');
    // };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}><span style={{color: 'var(--btn)'}}>Don't be shy! </span> <span style={{textDecoration: 'underline'}}>Message us.</span></h1>
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
        </div>
    )
} 

export default ContactPage