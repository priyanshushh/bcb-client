import React from "react";
import Post from "./Post/Post";
import useStyles from "./stylel";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

function Posts({ setCurrentId }) {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  // console.log(posts);

  if (!posts.length && !isLoading) return "No Posts";

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="center" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
          <Post post={post} elevation={10} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
