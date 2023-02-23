import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import logo from "../../images/pillz.png";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { supabase } from "../../helpers/supabase/supabaseClient";
import { useNavigate } from "react-router-dom";

function LoginCard() {
  const [screen, setScreen] = useState(true);
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const logIn = async () => {
    try {
      console.log("was in logIn");
      console.log(creds, "creds");
      setLoading(true);
      const { user, error } = await supabase.auth.signInWithPassword({
        email: creds.email,
        password: creds.password,
      });
      console.log("user:", user);

      if (error) throw error;

      // const user = supabase.auth.getUser();
      dispatch(set(user));

      const navigate = useNavigate();
      navigate("/pills");
    } catch (error) {
      console.log(error.message);
    }
  };

  const signUp = async () => {
    try {
      console.log("was in signUp");
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email: creds.email,
        password: creds.password,
      });

      if (error) throw error;
      await signUp();
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  const handleCredsChange = (event) => {
    setCreds({
      ...creds,
      [event.target.name]: event.target.value,
    });
  };

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
                name="email"
                label="Email"
                id="outlined-start-adornment"
                value={creds.email}
                onChange={handleCredsChange}
                sx={{ m: 1, minWidth: "20em" }}
              />
            </Grid>
            <Grid item style={{ paddingTop: "2em" }}>
              <TextField
                name="password"
                id="outlined-password-input"
                label="Password"
                type="password"
                value={creds.password}
                onChange={handleCredsChange}
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
                  onClick={logIn}
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
                  onClick={signUp}
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
