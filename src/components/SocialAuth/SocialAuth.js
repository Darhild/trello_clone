import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from "./../../contexts/Auth";


const useStyles = makeStyles(theme => ({
  root: {
    cursor: "pointer",
  },
}));


const SocialAuth = ({icon, connection}) => {
  const {authorize} = useContext(AuthContext);
  const classes = useStyles();

  return (
    <img width="70" className={classes.root} src={icon} onClick={() => authorize(connection)} />
  )
}

export default SocialAuth;
