import React, { useContext } from "react";
import { Box, FormControl, FormLabel, Input, Image } from "@chakra-ui/core";
import { FacemaskContext, useDispatch } from "./context";

export const InputImage = props => {
  const dispatch = useDispatch();
  const state = useContext(FacemaskContext);
  console.log("state", state);
  const _onChange = event => {
    // Assuming only image
    var file = event.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function(e) {
      dispatch({ type: "texture", data: reader.result });
    };
    console.log(url); // Would see a path?
    // TODO: concat files
  };
  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor="image">Select your image</FormLabel>
        <Input type="file" id="image" size="200px" onChange={_onChange} />
        <Image src={state.texture} />
      </FormControl>
    </Box>
  );
};
