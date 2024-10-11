import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth"
import Image from "next/image"

const Navbar = async () => {
    const session = await auth()
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                <Image src="/N.png" alt="NeX Agency Logo" width={40} height={40} priority />
            </Link>
            <div>
                <Links session={session}/>
            </div>
        </div>
    )
} 

export default Navbar