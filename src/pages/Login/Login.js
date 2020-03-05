import React from "react";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'

const Login = () => {
  return (
    <>
    {"Login"}
    <Paper elevation={3}>
      <TextField type="email" />
      <TextField type="password" />
    </Paper>
    </>
  )
}

export default Login;
