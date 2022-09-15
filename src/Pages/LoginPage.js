import React from "react";
import LoginForm from "../Components/LoginForm/LoginForm";
const Login = (props) => {
    return(
    <div style={{
        width: "100vw",
        height:"50vh",
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
    }}>
        <LoginForm/>
    </div>)

}

export default Login;