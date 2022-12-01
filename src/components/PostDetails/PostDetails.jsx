import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import draftToHtml from "draftjs-to-html";
import moment from "moment";
import { disqus_config } from "./CommentBox";
import useStyles from "./styles";
import { convertToRaw } from "draft-js";
import { getPost, getPostsBySearch } from "../../acitons/posts";
function PostDetails() {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { id } = useParams();

  function comments() {
    // DON'T EDIT BELOW THIS LINE
    var d = document,
      s = d.createElement("script");
    // s.src = "https://localhost-3000-posts.disqus.com/embed.js";
    s.src = "https://localhost-3000-posts.disqus.com/embed.js";

    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  }
  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({
          search: "none",
          tags: post?.tags.join(","),
        })
      );
    }
  }, [post]);

  if (!post) return null;
  if (isLoading)
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size={"7em"} />
      </Paper>
    );
  const recomendedPosts = posts.filter(({ _id }) => _id !== post._id);
  const openPost = (_id) => {
    navigate(`/posts/${_id}`);
  };
  // const [showbtn, handleshowbtn] = useState(true);

  // let data = post.message;
  // console.log(data);
  // const markup = draftToHtml(data);
  return (
    <div className={classes.center}>
      <Paper
        onLoad={comments}
        className={classes.paperdiv}
        style={{
          backgroundColor: "#141d2b",
          flexWrap: "wrap",
        }}
        elevation={6}
      >
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant="h6" style={{ color: "white" }}>
              {" "}
              Created by : {post.name}
            </Typography>
            <Typography variant="subtitle2" style={{ color: "#F95f29" }}>
              Posted : {moment(post.createdAt).fromNow()}
            </Typography>

            <Divider style={{ margin: "20px 0", backgroundColor: "white" }} />
            <Typography
              variant="h3"
              style={{
                flexWrap: "wrap",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              {post.title}
            </Typography>
            <div className={classes.tags}>
              {post.tags.map((tag, i) => (
                <Typography
                  gutterBottom
                  variant="h6"
                  style={{
                    color: "#F95f29",
                  }}
                  key={i}
                >
                  {"#" + tag} &nbsp;
                </Typography>
              ))}
            </div>
            <div
              style={{
                textTransform: "capitalize",
                textAlign: "left",
                color: "white",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            >
              <div
                className={classes.blog}
                dangerouslySetInnerHTML={{ __html: JSON.parse(post.message) }}
              ></div>
            </div>
            <Typography
              gutterBottom
              variant="h6"
              style={{
                marginTop: "10px",
                color: "white",
              }}
            >
              {post.likes.length === 0 ? null : "Liked By "}
              {post.likes.length}
              {post.likes.length === 1 ? " Person" : " People"}
            </Typography>
          </div>
          <div className={classes.imageSection}>
            <img className={classes.media} src={post.selectedFile} />
          </div>
        </div>
        {/* {console.log(recomendedPosts)} */}
        {recomendedPosts.length && (
          <div className={classes.section2}>
            <Typography
              gutterBottom
              variant="h5"
              style={{
                margin: "20px 0",
                color: "#F95f29",
              }}
            >
              &nbsp;&nbsp;You might also like :
            </Typography>
            <Divider />
            <div className={classes.recomendedPosts}>
              <div className={classes.scroll}>
                {recomendedPosts.map(
                  ({ title, message, name, likes, selectedFile, _id }) => (
                    <Paper
                      className={classes.smallercard}
                      style={{
                        padding: "20px",
                        cursor: "pointer",
                        borderRadius: "8px",
                        backgroundColor: "#141d2b",
                        height: "300px",
                        width: "235px",
                        margin: "0 28px ",
                      }}
                      elevation={8}
                      onClick={() => openPost(_id)}
                      key={_id}
                    >
                      <Typography
                        gutterBottom
                        variant="body1"
                        style={{
                          textTransform: "capitalize",
                          color: "white",
                        }}
                      >
                        {name}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        style={{
                          textTransform: "capitalize",
                          color: "white",
                        }}
                        noWrap
                      >
                        {title}
                      </Typography>

                      {/* <Typography
                        gutterBottom
                        noWrap
                        variant="subtitle2"
                        style={{
                          minHeight: "40px",
                          maxHeight: "40px",
                          textTransform: "capitalize",
                          overflow: "hidden",
                          color: "white",
                        }}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: JSON.parse(post.message),
                          }}
                        ></div>
                      </Typography> */}
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        style={{ color: "white" }}
                      >
                        Likes : {likes.length}
                      </Typography>
                      <img
                        src={selectedFile}
                        width="100%"
                        height="130px"
                        style={{
                          borderRadius: "6px",
                        }}
                      />
                    </Paper>
                  )
                )}
              </div>
            </div>

            <Divider style={{ margin: "20px 0" }} />
          </div>
        )}

        <div>
          <div id="disqus_thread">
            <disqus_config id={id} />
          </div>

          <noscript>
            Please enable JavaScript to view the{" "}
            <a href="https://disqus.com/?ref_noscript">
              comments powered by Disqus.
            </a>
          </noscript>
        </div>
      </Paper>
    </div>
  );
}

export default PostDetails;
