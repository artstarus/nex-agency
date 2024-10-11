"use client";
import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import {useFormState} from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {

    const [state, formAction] = useFormState(login, undefined);
    const router =  useRouter();

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="Username" name="username"/>
            <input type="password" placeholder="Password" name="password"/>
            <button>Sign in with Credentials</button>
            {state?.error}
            <p>
                Don&apos;t have an account?
                <Link className={styles.register} href="/register">
                    <b> Register</b>
                </Link>
            </p>

        </form>
    )
} 

export default LoginForm