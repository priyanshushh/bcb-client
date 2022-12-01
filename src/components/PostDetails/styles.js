import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexWrap: "wrap",
    width: "100%",
    marginBottom: "20px",
  },
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    flexWrap: "wrap",

    width: "100%",
    maxHeight: "600px",
  },
  paperdiv: {
    padding: "20px",
    marginTop: "100px",
    borderRadius: "10px",

    flexWrap: "wrap",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  card: {
    display: "flex",
    justifyContent: "left",
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "column-reverse",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
  section: {
    flexDirection: "column",
    borderRadius: "20px",
    flexWrap: "wrap",

    margin: "10px",
    flex: 1,
  },

  imageSection: {
    marginLeft: "10px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  scroll: {
    display: "flex",
    alignItems: "center",
    padding: "20px 5px",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "start",
    },
  },

  recomendedPosts: {
    backgroundColor: "#f4f4f4",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    borderRadius: "10px",
    margin: "15px 0",
    width: "100%",
    "overflow-x": "auto",
    flex: 1,
    backgroundColor: "#090e18",
    // border: "2px solid #c1c1c1",
  },

  recomendedPost: {
    padding: "30px",
    cursor: "pointer",
  },
  smallercard: {
    [theme.breakpoints.down("sm")]: {
      width: "100px",
    },
  },
  tags: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "2px",
    marginBottom: "10px",
  },
  blog: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
}));
