import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../acitons/posts";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import TextBar from "./BlogInput";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function Form({ currentId, setCurrentId }) {
  // const [textboxdata, setTextBoxData] = useState("");
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    title: "",
    userId: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const data = draftToHtml(convertToRaw(description.getCurrentContent()));
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
    setPostData({ ...postData, message: JSON.stringify(data) });
  };
  // console.log(data);
  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((p) => p._id === currentId) : null
  );
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === null) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, navigate));
    } else {
      dispatch(
        updatePost(
          currentId,
          { ...postData, name: user?.result?.name },
          navigate
        )
      );
    }
    clear();
  };

  // console.log(user);
  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  if (user === null) {
    return (
      <Paper
        className={classes.paper}
        style={{
          backgroundColor: "#141d2b",
          color: "white",
        }}
      >
        <Typography variant="h6" align="center">
          Whoo hooo we know you are enjoying yourself here but we need more info
          to let you write something...
        </Typography>
      </Paper>
    );
  } else {
    return (
      <Paper
        className={`${classes.root} ${classes.form}`}
        elevation={5}
        style={{
          backgroundColor: "#141d2b",
        }}
      >
        {/* <form
          autoComplete="off"
          noValidate
          className={classes.form}
          onSubmit={handleSubmit}
        > */}
        <Typography
          variant="h6"
          required
          style={{
            color: "#F95f29",
          }}
        >
          {currentId ? "Editing" : "Creating"} Post
        </Typography>

        <TextField
          name="title"
          variant="outlined"
          required
          label="Title"
          fullWidth
          value={postData.title}
          style={{ color: "white" }}
          onChange={(e) => {
            setPostData({ ...postData, title: e.target.value });
          }}
        />
        {/* <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          style={{ color: "white" }}
          value={postData.message}
          onChange={(e) => {
            setPostData({ ...postData, message: e.target.value });
          }}
        /> */}
        <TextField
          name="tags"
          variant="outlined"
          label="Coma seperated tag"
          fullWidth
          value={postData.tags}
          onChange={(e) => {
            setPostData({ ...postData, tags: e.target.value.split(",") });
          }}
        />

        <div
          style={{
            width: "100%",
            margin: "10px",
            border: "1px solid grey",
            color: "grey",
            borderRadius: "5px",
          }}
        >
          <Editor
            editorState={description}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
            placeholder="Share your thoughts"
            name="message"
          />
          {/* <textarea
            style={{ display: "none" }}
            disabled
            ref={(val) => (postData.message = val)}
            value={draftToHtml(convertToRaw(description.getCurrentContent()))}
          /> */}
        </div>
        {/* {console.log(description)} */}
        {/* <TextBar
          name="message"
          label="Message"
          setTextBoxData={setTextBoxData}
          value={postData.message}
        />
 */}

        <div
          className={classes.fileInput}
          style={{
            margin: "10px",
            color: "white",
          }}
        >
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            onClick={handleSubmit}
            fullWidth
            style={{
              border: "1px solid #F95f29",
              background: "#141d2b",
              color: "#f95f29",
              borderRadius: "25px",
            }}
          >
            Submit
          </Button>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="secondary"
            size="large"
            onClick={clear}
            fullWidth
            style={{
              border: "1px solid #F95f29",
              background: "#141d2b",
              color: "#f95f29",
              borderRadius: "25px",
            }}
          >
            Clear
          </Button>
        </div>
        {/* </form> */}
      </Paper>
    );
  }
}

export default Form;
