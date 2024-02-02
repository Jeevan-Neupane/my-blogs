import { useForm } from "react-hook-form";
import {
  Button,
  ErrorMessage,
  FormContainer,
  FormGroup,
  Input,
  Label,
} from "./style";

import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { LoginHeading } from "../login/style";
function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("password", "");
  return (
    <FormContainer>
      <LoginHeading>Sign Up </LoginHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Full Name</Label>
          <Input
            {...register("fullname", {
              required: "Fullname is required",
              minLength: {
                value: 3,
                message: "Fullname must be at least 3 characters long",
              },
            })}
          />
          {errors.fullname && (
            <ErrorMessage>{errors.fullname.message}</ErrorMessage>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Username</Label>
          <Input
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters long",
              },
            })}
          />
          {errors.username && (
            <ErrorMessage>{errors.username.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            type='password'
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label>Re-enter Password</Label>
          <Input
            type='password'
            {...register("password_confirmation", {
              required: "Please re-enter your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.password_confirmation && (
            <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
          )}
        </FormGroup>

        <Button type='submit'>Register</Button>
      </form>
    </FormContainer>
  );
}

export default SignupForm;
