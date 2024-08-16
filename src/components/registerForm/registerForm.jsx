"use client";
import { register } from "@/lib/action";
import styles from "./registerForm.module.css";
import {useFormState} from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {

    const [state, formAction] = useFormState(register, undefined);
    const router =  useRouter();

    useEffect(() => {
        state?.success && router.push("/login");
    }, [state?.success, router]);

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="Username" name="username"/>
            <input type="email" placeholder="Email" name="email"/>
            <input type="password" placeholder="Password" name="password"/>
            <input type="password" placeholder="Confirm Password" name="confirmPassword"/>
            <button>Create new account</button>
            {state?.error}
            <p>
                Already have an account?
                <Link className={styles.login} href="/login">
                    <b> Login</b>
                </Link>
            </p>

        </form>
    )
} 

export default RegisterForm