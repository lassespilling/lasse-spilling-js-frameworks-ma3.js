import React from "react";
import ErrorMessage from "../layout/ErrorMessage";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as yup from "yup";

const schema = yup.object().shape({
    username: yup
        .string()
        .matches(/[a-z]|[A-Z]|[0-9]+/, "Username can only contain letters.")
        .required("Username is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(4, "Password must be at least 4 characters long")
});

const LoginForm = () => {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <Form onSubmit={handleSubmit(onSubmit)} autocomplete="off">
            <Form.Group>
                <Form.Label className="username">Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    ref={register}
                />
                {errors.username && (
                    <ErrorMessage>{errors.username.message}</ErrorMessage>
                )}
            </Form.Group>
            <Form.Group>
                <Form.Label className="password">Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    ref={register}
                />
                {errors.password && (
                    <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}
            </Form.Group>
            <Form.Group className="text-center">
                <Button type="submit" variant="outline-success">
                    <i class="i-login"></i>
                    Login
                </Button>
            </Form.Group>
        </Form>
    );
};

export default LoginForm;
