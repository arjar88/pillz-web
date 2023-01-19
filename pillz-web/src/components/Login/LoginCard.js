import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";

function LoginCard() {
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
        <TextField
          label="Email"
          id="outlined-start-adornment"
          sx={{ m: 1, minWidth: "20em" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
        />
        <TextField
          label="Email"
          id="outlined-start-adornment"
          sx={{ m: 1, minWidth: "20em" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
        />
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default LoginCard;
