import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
// import DeleteIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../acitons/posts.js";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useNavigate } from "react-router-dom";
// let img = image;
function UserPost({ post, setCurrentId }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [state, setState] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.sub || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" /> &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" /> &nbsp;{" "}
          {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }
    return (
      <>
        <ThumbUpAltOutlined fontSize="small" /> &nbsp; Like
      </>
    );
  };
  const navigate = useNavigate();
  const openPost = () => {
    navigate(`/posts/${post._id}`);
  };
  let img = post.selectedFile;
  return (
    <Card className={classes.card}>
      {img && (
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.title}
          component="div"
        />
      )}
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>

      <div className={classes.details}>
        <Typography variant="body1" style={{ color: "#949494" }}>
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardContent>
        <ButtonBase className={classes.CardActions} onClick={openPost}>
          <Typography
            noWrap
            className={classes.title}
            style={{
              color: "white",
              textTransform: "capitalize",
              margin: "-10px -10px",
            }}
            variant="h5"
          >
            {post.title}
          </Typography>
        </ButtonBase>
        {/* <Typography
          noWrap
          className={classes.message}
          variant="body2"
          style={{ color: "whitesmoke" }}
        >
          {post.message}
        </Typography> */}
      </CardContent>

      <CardActions className={classes.CardActions}>
        <Button
          className={classes.btn}
          size="small"
          onClick={() => dispatch(likePost(post._id))}
          disabled={!user?.result}
          style={{ color: "#F95f29" }}
        >
          <Likes />
        </Button>
        {(user?.result?.sub === post?.creator ||
          user?.result?._id === post?.creator) && (
          <div className={classes.overlay2}>
            {state && (
              <div className={classes.editor}>
                <Button
                  className={classes.btn}
                  size="small"
                  style={{
                    color: "#F95f29",
                  }}
                  onClick={() => {
                    dispatch(deletePost(post._id));
                  }}
                >
                  &nbsp;Delete
                  <DeleteOutline
                    fontSize="small"
                    style={{
                      fill: "#F95f29 !important",
                    }}
                  />
                </Button>

                {/* <Button
                  style={{ color: "#F95f29", margin: "0 4px" }}
                  size="small"
                  onClick={() => {
                    setCurrentId(post._id);
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Edit &nbsp;&nbsp;
                  <EditIcon
                    fontSize="small"
                    style={{ fill: "#F95f29 !important", margin: "0 0px" }}
                  />
                </Button> */}
              </div>
            )}
            <Button
              onClick={() => setState(!state)}
              style={{ color: "#F95f29", margin: "0 4px" }}
              size="small"
            >
              <MoreHorizIcon fontSize="medium" />
            </Button>
          </div>
        )}
      </CardActions>
    </Card>
  );
}

export default UserPost;
