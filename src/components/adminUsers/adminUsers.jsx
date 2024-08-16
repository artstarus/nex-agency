import Image from "next/image";
import styles from "./adminUsers.module.css";
import { deleteUser } from "@/lib/action";
import { getUsers } from "@/lib/data";

const AdminUsers = async () => {
    const users = await getUsers();
    return (
        <div className={styles.container}>
            <h1>Users</h1>
            {users.map((user) => (
                <div className={styles.user} key={user.id}>
                    <div className={styles.details}>
                        <Image src={user.img || "/noavatar.png"} alt="avatar img" width={50} height={50}/>
                        <span>{user.username}</span>
                    </div>
                    <form action={deleteUser}>
                        <input type="hidden" name="id" value={user.id}/>
                        <button className={styles.userButton}>Delete</button>
                    </form>
                </div>
            ))}
        </div>
    )
} 

export default AdminUsers