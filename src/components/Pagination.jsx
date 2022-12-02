import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import useStyles from "./Paginate";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../acitons/posts";
const Paginate = ({ page }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    if (page) {
      dispatch(getPosts(page));
    }
  }, [page, dispatch]);
  //we can remove dispatch from array above
  const { numberOfPages } = useSelector((state) => state.posts);
  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="text"
      style={{
        backgroundColor: "#141d2b",
        borderRadius: "8px",
      }}
      renderItem={(item) => (
        <PaginationItem
          style={{
            color: "white",
          }}
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;
