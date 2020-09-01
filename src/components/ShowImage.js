import React, { useContext, useReducer } from "react";
import { Box } from "@chakra-ui/core";
import { FacemaskContext, useDispatch } from "./context";

export const ShowImage = props => {
  const dispatch = useDispatch();
  const state = useContext(FacemaskContext);
  return (
    <Box>
      <span onClick={() => dispatch({ type: "click" })}>{state.count}</span>
    </Box>
  );
};
