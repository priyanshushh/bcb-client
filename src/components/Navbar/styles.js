import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";
import { Backdrop } from "@material-ui/core";
export default makeStyles((theme) => ({
  appBar: {
    // borderRadius: 5,
    margin: "30px auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    color: "white",
    boxShadow: "none",
    position: "fixed",
    top: "-30px",
    left: "0",
    width: "100%",
    backgroundColor: "#141d2b",
    opacity: "0.955",
    backdropFilter: "blur(5px)",
  },
  heading: {
    color: "white",
    textDecoration: "none",
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  login: {
    color: "white",
  },
  logout: {
    margin: "0 10px",
  },
  purple: {
    cursor: "pointer",
  },
}));
