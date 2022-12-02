import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import jwt_decode from "jwt-decode";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup, signin } from "../../acitons/auth";
// import style from "../Posts/Post/style";
import FileBase from "react-file-base64";

const initialstate = {
  firstName: "",
  lastName: "",
  email: "",
  bio: "",
  profile: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialstate);
  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    // alert(formData.profile);
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData));
    } else {
      dispatch(signin(formData));
    }
  };
  const switchMode = () => {
    setIsSignup((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  };
  const handleshowpassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const handlecallbackresp = async (res) => {
    var obj = jwt_decode(res.credential);
    const result = obj;
    const token = res.credential;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };
  useEffect(() => {
    /* global google*/
    google.accounts.id.initialize({
      client_id:
        "355675739023-qqmee5i9a7625kgaqqhiptsgdieojtc2.apps.googleusercontent.com",
      callback: handlecallbackresp,
    });
    google.accounts.id.renderButton(document.getElementById("signinDiv"), {
      theme: "dark",
      size: "large",
    });
  }, [handlecallbackresp]);

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        className={classes.paper}
        elevation={3}
        style={{
          backgroundColor: "#141d2b",
        }}
      >
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography style={{ color: "white" }} variant="h5">
          {isSignup ? "SignUp" : "SignIn"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handlechange={handlechange}
                  autoFocus
                  half
                />

                <Input
                  name="lastName"
                  label="Last Name"
                  handlechange={handlechange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handlechange={handlechange}
              type="email"
            />
            {isSignup && (
              <div
                className={classes.fileInput}
                style={{
                  margin: "10px",
                  color: "white",
                }}
              >
                <FileBase
                  name="profile"
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setFormData({ ...formData, profile: base64 })
                  }
                />
              </div>
            )}

            {isSignup && (
              <Input
                name="bio"
                label="Bio"
                handlechange={handlechange}
                fullWidth
              />
            )}
            <Input
              name="password"
              label="Password"
              handlechange={handlechange}
              type={showPassword ? "text" : "password"}
              handleshowpassword={handleshowpassword}
            />

            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handlechange={handlechange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            color="primary"
            style={{
              backgroundColor: "#F95f29",
            }}
          >
            {isSignup ? "Signup" : "SignIn"}
          </Button>
          <div className={classes.center}>
            <div className={classes.signup} id="signinDiv"></div>
          </div>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode} style={{ color: "white" }}>
                {isSignup
                  ? "Already have an account log-in"
                  : "Create new account sign-up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
