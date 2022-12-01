import React, { useState } from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import User from "./components/user/User";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
// import { set } from "mongoose";
import KeyBoardArrowIcon from "@material-ui/icons/KeyboardArrowUp";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [toTop, settoTop] = useState(false);
  window.addEventListener("scroll", () => {
    if (
      window.scrollY >= 200 ||
      window.offsetHeight + window.scrollTop <= window.scrollHeight
    ) {
      settoTop(!toTop);
    }
  });
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" exact element={<Home />} />
          <Route path="posts/userr" exact element={<User />} />
          <Route path="/posts/search" exact element={<Home />} />
          <Route path="/posts/:id" exact element={<PostDetails />} />
          <Route
            path="/auth"
            element={!user ? <Auth /> : <Navigate to="/posts" />}
          />
        </Routes>

        {toTop && (
          <div
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            style={{
              backgroundColor: "#F95f29",
              position: "fixed",
              bottom: "10px",
              color: "white",
              right: "0px",
              borderRadius: "50%",
              margin: "10px",
              height: "50px",
              cursor: "pointer",
              width: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <KeyBoardArrowIcon />
            {/* &#8613; */}
          </div>
        )}
      </Container>
    </BrowserRouter>
  );
};
export default App;
