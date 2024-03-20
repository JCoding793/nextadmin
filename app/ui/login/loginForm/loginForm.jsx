"use client";

import { authenticate } from "@/app/lib/action";
import styles from "./loginForm.module.css";
import {useFormState} from "react-dom"


const LoginForm = () => {
// const [err , setErr] = useState();
// const handleLogin = async(formData)=>{
//   const data = await authenticate(formData)
//   data.error && setErr(data.error)
// }
const [state , formAction] = useFormState(authenticate, undefined);
  return (
    <form action={authenticate} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="userName" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state && state}
    </form>
  );
};

export default LoginForm;