import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "10px",
    position: "relative",
    backgroundColor: "#090e18",
    margin: "10px 20px",
  },
  overlay: {
    margin: "5px 20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    bottom: "0",
    right: "-20px",
    margin: "8px",
  },
  editor: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background: "#141d2b",
    padding: "10px",
    position: "absolute",
    top: "-60px",
    right: "20px",
    borderRadius: "5px",
    opacity: "0.960",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0px 20px",
    marginBottom: "0",
  },
  message: {
    maxHeight: "60px",
    overflow: "hidden",
  },
  CardActions: {
    padding: "0 10px 8px 10px",
    display: "flex",
    justifyContent: "space-between",
  },
  btn: {
    color: "#141d2b",
  },
  title: {
    "&:hover": { color: "#f95f29 !important" },
  },
});
