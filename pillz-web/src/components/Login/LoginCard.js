import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import logo from "../../images/pillz.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { set, reset } from "../../helpers/redux/slices/user";
import { supabase } from "../../helpers/supabase/supabaseClient";
import { useNavigate } from "react-router-dom";

function LoginCard() {
  const [screen, setScreen] = useState(true);
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const logIn = async () => {
    try {
      console.log("was in logIn");
      console.log(creds, "creds");
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: creds.email,
        password: creds.password,
      });

      console.log("user:", data);

      if (error) throw error;

      // const user = supabase.auth.getUser();
      dispatch(set(data.user));

      navigate("/pills");
    } catch (error) {
      console.log(error.message);
    }
  };

  const signUp = async () => {
    try {
      console.log("was in signUp");
      console.log(creds, "creds");

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
              label={screen ? "Email" : "Please Enter Your Email"}
              id="outlined-start-adornment"
              value={creds.email}
              onChange={handleCredsChange}
              sx={{ m: 1, minWidth: "20em" }}
            />
          </Grid>
          <Grid item style={{ paddingTop: "2em" }}>
            <OutlinedInput
              name="password"
              id="outlined-password-input"
              label={screen ? "Password" : "Please Enter Your Password"}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    //onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
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
                  height: "2em",
                }}
                variant="contained"
                size="small"
                onClick={logIn}
              >
                {loading ? (
                  <CircularProgress
                    sx={{ color: "white", height: "20px", size: "12px" }}
                  />
                ) : screen ? (
                  "Log In"
                ) : (
                  "Sign Up"
                )}
              </Button>
            </CardActions>
          </Grid>
          <Grid>
            <Button
              onClick={() => setScreen(!screen)}
              sx={{ fontWeight: "500" }}
            >
              {screen ? "Or Sign Up" : "Or Log In"}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default LoginCard;
