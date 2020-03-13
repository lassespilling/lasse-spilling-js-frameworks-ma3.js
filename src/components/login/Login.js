import React from "react";
import Heading from "../layout/Heading";
import LoginForm from "../loginform/LoginForm";
import AbsoluteWrapper from "../layout/AbsoluteWrapper";

const Login = () => {
    return (
        <AbsoluteWrapper>
            <Heading content="Login" icon="i-login"></Heading>
            <LoginForm></LoginForm>
        </AbsoluteWrapper>
    );
};

export default Login;
