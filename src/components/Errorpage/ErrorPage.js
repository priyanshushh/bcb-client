import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <Container maxWidth="xl" className={classes.mainContainer}>
      <Grid item xs={12} sm={12} lg={12} className={classes.about}>
        <div className={classes.centerDetails} style={{ padding: "20px" }}>
          <Typography variant="h4">
            Error 404...You might have enterd wrong url.Click the button below
            to go to the home page.
          </Typography>
          <Button
            onClick={handleClick}
            variant="contained"
            style={{ backgroundColor: "#f95f29", color: "white" }}
          >
            Go Home
          </Button>
        </div>
      </Grid>
    </Container>
  );
}

export default ErrorPage;
