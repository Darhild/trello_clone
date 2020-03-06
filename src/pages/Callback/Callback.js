import React, { useContext, useEffect } from "react";
import { AuthContext} from "./../../contexts/Auth/Auth";

const Callback = () => {
  const {handleAuthorization} = useContext(AuthContext);

  useEffect(() => {
    if(handleAuthorization) handleAuthorization();
  }, []);

  return (
    <div>
      Callback
    </div>
  )
};

export default Callback;
