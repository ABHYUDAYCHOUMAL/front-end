import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

class LoginForm extends React.Component {
 render() {
  return (
   <Box
    component="form"
    sx={{
     "& > :not(style)": { m: 1, width: "25ch" },
    }}
    noValidate
    autoComplete="off"
   >
    <form>
     <TextField id="outlined-basic" label="email" variant="outlined" />
     <TextField id="outlined-basic" label="password" variant="outlined" />
     <Button variant="contained">Login</Button>
     <br />
     <br />
     <Button variant="contained" color="success">
      Google Sign
     </Button>
    </form>
   </Box>
  );
 }
}

export default LoginForm;
