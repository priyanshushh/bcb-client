import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
const Input = ({
  name,
  handlechange,
  label,
  half,
  autoFocus,
  type,
  handleshowpassword,
}) => (
  <>
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handlechange}
        variant="outlined"
        required
        // autoComplete="off"
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleshowpassword}>
                      {type === "password" ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff style={{ color: "white" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  </>
);

export default Input;
