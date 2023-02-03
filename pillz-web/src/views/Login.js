import Grid from "@mui/material/Grid";
import LoginCard from "../components/Login/LoginCard";

function Login() {
  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      sx={{ height: "100%", marginTop: "-3em" }}
    >
      <LoginCard></LoginCard>
    </Grid>
  );
}

export default Login;
