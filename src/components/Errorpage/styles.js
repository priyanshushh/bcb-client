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
}));
