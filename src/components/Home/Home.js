import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Grow,
  AppBar,
  Typography,
  Button,
  InputBase,
} from "@material-ui/core";
import Posts from "../Posts/Posts";
import Forms from "../Form/Form";
import Pagination from "../Pagination";
import { getPosts, getPostsBySearch } from "../../acitons/posts";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import ChipInput from "material-ui-chip-input";
import SearchIcon from "@material-ui/icons/Search";

import { useNavigate, useLocation } from "react-router-dom";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function Home() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  let navigate = useNavigate();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);

  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const handlekeypress = (e) => {
    if (e.keycode === 13) {
      searchPost();
    }
  };

  const handledelete = (tagtoDelete) =>
    setTags(tags.filter((tag) => tag !== tagtoDelete));
  const handleadd = (tag) => setTags([...tags, tag]);
  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(","), currentId }));
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      navigate("/");
    }
  };
  const [formstate, setFormstate] = useState(false);
  const [searchstate, setSearchstate] = useState(false);
  return (
    <Grow in>
      <Container maxWidth="xl">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "100px 0 10px 0px",
          }}
        >
          <div
            onClick={() => setFormstate(!formstate)}
            style={{
              // backgroundColor: "#F95f29",
              color: "#F95f29",
              height: "40px",
              fontSize: "50px",
              cursor: "pointer",
              display: "flex",
              padding: "8px 15px",
              justifyContent: "center",
              alignItems: "center",
              background: "#141d2b",
              borderRadius: "25px",
            }}
          >
            <Typography>ADD POST</Typography>
            {/* <AddIcon /> */}
          </div>
          <div
            onClick={() => setSearchstate(!searchstate)}
            style={{
              // backgroundColor: "#F95f29",
              color: "#F95f29",
              margin: "0 15px",
              fontSize: "50px",
              padding: "8px 15px",
              height: "40px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#141d2b",
              borderRadius: "25px",
            }}
          >
            <Typography style={{ marginRight: "8px" }}>SEARCH</Typography>

            <SearchIcon />
          </div>
        </div>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={12} lg={12}>
            {formstate && (
              <Forms currentId={currentId} setCurrentId={setCurrentId} />
            )}

            {searchstate && (
              <AppBar
                className={classes.appBarSearch}
                position="static"
                color="inherit"
                style={{
                  backgroundColor: "#141d2b",
                  marginTop: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    color: "white",
                  }}
                >
                  Search Post
                </Typography>
                <InputBase
                  name="search"
                  variant="outlined"
                  placeholder="Search By Name"
                  fullWidth
                  onKeyPress={handlekeypress}
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  className={classes.textField}
                />
                <ChipInput
                  style={{ margin: "10px 0", borderColor: "white" }}
                  value={tags}
                  onAdd={handleadd}
                  onDelete={handledelete}
                  label="Search Tags"
                  variant="outlined"
                  fullWidth
                />

                <Button
                  onClick={searchPost}
                  variant="text"
                  className={classes.searchButton}
                  fullWidth
                  style={{
                    backgroundColor: "#F95f29",
                    color: "white",
                  }}
                >
                  Search
                </Button>
              </AppBar>
            )}
          </Grid>
        </Grid>
        <div>
          <Grid item xs={12} sm={12} md={12} style={{ minHeight: "65vh" }}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          {!searchQuery && !tags.length && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                margin: "100px 0 10px 10px",
              }}
            >
              <Pagination className={classes.pagination} page={page} />
            </div>
          )}
        </div>
      </Container>
    </Grow>
  );
}

export default Home;
