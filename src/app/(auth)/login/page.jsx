import LoginForm from "@/components/loginForm/loginForm";
import {handleGithubLogin} from "@/lib/action";
import styles from "./login.module.css";

const LoginPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1><b>Login</b></h1>
                <form action={handleGithubLogin}>
                    <button className={styles.github}>Sign in with Github</button>
                </form>
                <p><b>OR</b></p>
                <LoginForm/>
            </div>
        </div>
    )
} 

export default LoginPage