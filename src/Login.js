import { useState } from "react";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    const SignInHandler = () => {
        setMessage("Loading...")
        if(email == "jeevithar@gmail.com" && password == '123'){
           setTimeout(() => {
            setMessage("Successfully Logged In!")
           },3000) 
        }
        else{
            setTimeout(() => {
                setMessage("Invalid Credentials!")
            }, 3000);
           
        }
    }
    return(
        <>
        <h1>Login</h1>
        <input type='text' placeholder="Email" onChange={((e)=>setEmail(e.target.value))}/><br/>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/><br/>
        <button onClick={SignInHandler}>Sign In</button>
        {message && <p>{message}</p>}
        </>
    )
}
export default Login;