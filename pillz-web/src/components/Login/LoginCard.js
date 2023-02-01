import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import logo from "../../images/pillz.png";
import React, { useState } from "react";

function LoginCard() {
  const [screen, setScreen] = useState(true);

  const logIn = () => {};
  const signUp = () => {};

  return (
    <Card
      sx={{
        minWidth: "25em",
        color: "blue",
        borderRadius: "1em",
        height: "30em",
        elevation: "5em",
        boxShadow: 5,
      }}
    >
      {screen ? (
        <CardContent>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Grid item>
              <img src={logo} width="100" height="110"></img>
            </Grid>
            <Grid item style={{ paddingTop: "2em" }}>
              <TextField
                label="Email"
                id="outlined-start-adornment"
                sx={{ m: 1, minWidth: "20em" }}
              />
            </Grid>
            <Grid item style={{ paddingTop: "2em" }}>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                sx={{ m: 1, minWidth: "20em" }}
              />
            </Grid>
            <Grid item style={{ paddingTop: "3em" }}>
              <CardActions>
                <Button
                  sx={{
                    width: 200,
                  }}
                  variant="contained"
                  size="small"
                >
                  Log In
                </Button>
              </CardActions>
            </Grid>
            <Grid>
              <Button
                onClick={() => setScreen(!screen)}
                sx={{ fontWeight: "500" }}
              >
                Or Sign Up
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      ) : (
        <CardContent>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Grid item>
              <img src={logo} width="100" height="110"></img>
            </Grid>
            <Grid item style={{ paddingTop: "2em" }}>
              <TextField
                label="PLease Enter Your Email"
                id="outlined-start-adornment"
                sx={{ m: 1, minWidth: "20em" }}
              />
            </Grid>
            <Grid item style={{ paddingTop: "2em" }}>
              <TextField
                id="outlined-password-input"
                label="Please Enter Your Password"
                type="password"
                autoComplete="current-password"
                sx={{ m: 1, minWidth: "20em" }}
              />
            </Grid>
            <Grid item style={{ paddingTop: "3em" }}>
              <CardActions>
                <Button
                  sx={{
                    width: 200,
                  }}
                  variant="contained"
                  size="small"
                >
                  Sign Up
                </Button>
              </CardActions>
            </Grid>
            <Grid>
              <Button
                onClick={() => setScreen(!screen)}
                style={{ fontWeight: "500", color: "black" }}
              >
                Or Log In
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      )}
    </Card>
  );
}

export default LoginCard;
