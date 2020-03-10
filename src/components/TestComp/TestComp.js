import React, { useContext } from "react";
import { AuthContext } from "./../../contexts/Auth";

const TestComp = () => {
  const { state, setState } = useContext(AuthContext);
  console.log(state)

  return (
    <div>
      {state.currentUser.toString()}
    </div>
  )
}

export default TestComp;
