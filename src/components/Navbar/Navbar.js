import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import decode from "jwt-decode";
const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  // console.log(user);
  const dispatch = useDispatch();
  // const location = useLocation();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    window.location = "/";
    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [logout]);
  //location goes on square bracket
  return (
    <AppBar
      className={classes.appBar}
      position="static"
      color="inherit"
      elevation={2}
    >
      <Typography
        component={Link}
        to="/"
        variant="h5"
        className={classes.heading}
        align="center"
      >
        Queries
      </Typography>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.picture || user.result.profile}
              component={Link}
              to={`/posts/userr?id=${user.result.sub || user.result._id}&name=${
                user.result.name
              } `}
            />
            {/* <Typography className={classes.user} variant="body1">
              {user.result.given_name}
            </Typography> */}
            {/* <Button
              variant="text"
              size="medium"
              className={classes.logout}
              onClick={logout}
              style={{ backgroundColor: "#F95f29", color: "white" }}
            >
              LogOut
            </Button> */}
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="text"
            className={classes.login}
            style={{ backgroundColor: "#F95f29" }}
          >
            SignIn
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
