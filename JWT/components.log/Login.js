import React, { useState, useRef } from "react";

import AuthService from "../services.log/auth.service";
import { Button, Grid, Box, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  textfield: {
    width: 250,
    height: 20,
    margin: 30,
    marginTop: 15,
  },
  login: {
    marginLeft: 30,
  },
}));

const Login = (props) => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    log();
  };

  const log = () => {
    AuthService.login(username, password).then(
      () => {
        props.history.push("/dashboard");
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
      }
    );
  };

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Typography variant="h4" className={classes.login}>
            LOGIN
          </Typography>
          <TextField
            variant="outlined"
            className={classes.textfield}
            label="username"
            value={username}
            onChange={onChangeUsername}
            name="username"
            color="secondary"
          ></TextField>
          <TextField
            variant="outlined"
            type="password"
            className={classes.textfield}
            label="password"
            value={password}
            onChange={onChangePassword}
            name="password"
            color="secondary"
          ></TextField>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <br />
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleLogin}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
};

export default Login;
