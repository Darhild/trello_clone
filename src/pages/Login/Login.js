import React from "react";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1)
  }
}))

const Login = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <Container maxWidth="xs" style={{paddingTop: "20px", paddingBottom: "40px"}}>
          <TextField className={classes.root} type="email" label="Email" fullWidth/>
          <TextField className={classes.root} type="password" label="Password" fullWidth/>
        </Container>
      </Paper>
    </Container>
  )
}

export default Login;
