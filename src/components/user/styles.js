import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "100px",
    width: "100%",
    backgroundColor: "#141d2b",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  about: {
    padding: "30px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      justifyContent: "center",
    },
  },

  userName: {
    fontSize: "50px",
    color: "white",
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      fontSize: "25px",
    },
  },
  centerDetails: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      flexWrap: "wrap",
    },
  },
  email: {
    fontSize: "18px",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
  },
  purple: {
    height: "240px",
    width: "240px",
    borderRadius: "50%",
    margin: "10px",
  },
  copy: {
    color: "#f95f29",
    cursor: "pointer",
    padding: "10px 0",
  },
  posts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    // backgroundColor: "#141d2b",
  },
  post: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    height: "340px",
    width: "280px",
    backgroundColor: "#090e18",
    margin: "5px",
    border: "2px solid white",
  },
  bio: {
    marginRight: "200px",
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",

      marginRight: 0,
    },
  },
}));
