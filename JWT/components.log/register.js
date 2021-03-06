import React, { useState, useRef } from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services.log/auth.service";

const required = (value) => {
  if (!value) {
    return <div>This field is required!</div>;
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return <div>The username must be between 3 and 20 characters.</div>;
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return <div>The password must be between 6 and 40 characters.</div>;
  }
};

const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div>
      <Form onSubmit={handleRegister} ref={form}>
        {!successful && (
          <div>
            <div>
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                name="username"
                value={username}
                onChange={onChangeUsername}
                validations={[required, vusername]}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required, vpassword]}
              />
            </div>

            <div>
              <button>Sign Up</button>
            </div>
          </div>
        )}
        {message && (
          <div>
            <div>{message}</div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </div>
  );
};

export default Register;
