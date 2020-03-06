import React from "react";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SocialAuth from "./../../components/SocialAuth/SocialAuth";
import githubIcon from "./../../images/svg/github.svg";
import googleIcon from "./../../images/svg/google.svg";
import weiboIcon from "./../../images/svg/weibo.svg";
import vkIcon from "./../../images/svg/vk.svg";
import fbIcon from "./../../images/svg/fb.svg";

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
          <div>
            OR LOGIN WITH
          </div>
          <SocialAuth icon={githubIcon} connection="github" />
          <SocialAuth icon={googleIcon} connection="google-oauth2" />
          <SocialAuth icon={fbIcon} connection="facebook" />
          <SocialAuth icon={weiboIcon} connection="weibo" />
          <SocialAuth icon={vkIcon} connection="vkontakte" />
        </Container>
      </Paper>
    </Container>
  )
}

export default Login;
