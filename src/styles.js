import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 5,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "#2B7A78",
  },
  heading: {
    color: "rgba(0,183,255,1)",
  },

  [theme.breakpoints.down("md")]: {
    mainContainer: { flexDirection: "column-reverse" },
  },
}));
