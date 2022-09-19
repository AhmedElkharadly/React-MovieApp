import React from "react";
import LoginForm from "../Components/LoginForm/LoginForm";
const Login = (props) => {
    return(
    <div style={{
        width: "100%",
        height:"100vh",
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
            }}>
        <LoginForm/>
    </div>)

}

export default Login;