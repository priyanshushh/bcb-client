import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Container,
  Divider,
  Grid,
  Button,
  Typography,
} from "@material-ui/core";
import UserPost from "./userPosts/UserPost.js";
import useStyles from "./styles";
import EmailIcon from "@material-ui/icons/Email";
import { getPostsForUserF } from "../../acitons/posts";
const User = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const classes = useStyles();

  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [usersPosts, setUsersPosts] = useState([]);
  let postsuser = [];
  {
    posts
      ? (postsuser = posts.filter(
          (post) => post.creator === (user.result._id || user.result.sub)
        ))
      : (postsuser = []);
  }

  useEffect(() => {
    dispatch(
      getPostsForUserF({
        id: user.result._id || user.result.sub,
        name: user.result.name,
      })
    );
    setUsersPosts(postsuser);
  }, []);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    window.location = "/";
    setUser(null);
  };
  // console.log(posts);

  return (
    <Container maxWidth="xl" className={classes.mainContainer}>
      <Grid item xs={12} sm={12} lg={12} className={classes.about}>
        <div className={classes.centerDetails}>
          <Typography className={classes.userName}>
            {user.result.name}
          </Typography>
          <Typography className={classes.email} gutterBottom>
            {user.result.email}
            <EmailIcon style={{ height: "18px" }} />
          </Typography>
          <Typography vairanit="body1" className={classes.bio}>
            {user.result.bio}
          </Typography>

          <Button
            variant="text"
            className={classes.copy}
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
            }}
          >
            Click to copy your profile link.
          </Button>
        </div>

        <Avatar
          className={classes.purple}
          alt={user.result.name}
          src={user.result.picture || user.result.profile}
        />
      </Grid>
      <Divider style={{ margin: "20px 0", backgroundColor: "white" }} />
      <Typography variant="h4" style={{ color: "white", margin: "20px" }}>
        Your Posts -
      </Typography>
      <Grid container alignItems="center" spacing={3}>
        {usersPosts.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
            <UserPost post={post} elevation={10} />
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        style={{
          background: "#f95f25",
          color: "white",
          width: "100px",
          marginTop: "50px",
          marginBottom: "20px",
        }}
        onClick={logout}
      >
        LogOut
      </Button>
    </Container>
  );
};

export default User;
