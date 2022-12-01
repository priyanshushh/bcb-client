import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 10,
    display: "flex",
    padding: "16px",
    marginBottom: "1rem",
    alignItems: "center",
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
  },
  heading: {
    color: "rgba(0,183,255,1)",
  },
  gridContainer: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  textField: {
    border: "1px solid #949494",
    borderRadius: "5px",
    height: "55px",
    padding: "10px",
    color: "white",
  },
}));
