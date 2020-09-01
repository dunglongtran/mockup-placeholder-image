import React, { useContext, useReducer } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton
} from "@chakra-ui/core";
import { FacemaskContext, useDispatch } from "./context";
import { SketchPicker } from "react-color";

const ColorPallete = ({ color, setColor }) => {
  console.log("ColorPallete", color);
  return (
    <Popover usePortal>
      <PopoverTrigger>
        <Button
          h="1.75rem"
          variantColor="green"
          variant="outline"
          bg={color ? color.hex : "green"}
          color="white"
        >
          Choose
        </Button>
      </PopoverTrigger>
      <PopoverContent zIndex={4}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>
          <SketchPicker color={color} onChange={setColor} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export const ChooseColor = props => {
  const dispatch = useDispatch();
  const { stripColor, clothColor, bgColor } = useContext(FacemaskContext);
  const setColor = (color, type) => dispatch({ type, data: color });
  const setStripColor = color => setColor(color, "strip-color");
  const setClothColor = color => setColor(color, "cloth-color");
  const setBgColor = color => setColor(color, "bg-color");
  return (
    <Box>
      <FormControl>
        <InputGroup size="md">
          <InputLeftElement width="50%">
            <FormLabel>Strip Color</FormLabel>
          </InputLeftElement>
          <Input />
          <InputRightElement width="50%">
            <ColorPallete color={stripColor} setColor={setStripColor} />
          </InputRightElement>
        </InputGroup>
        <InputGroup size="md">
          <InputLeftElement width="50%">
            <FormLabel>Cloth Color</FormLabel>
          </InputLeftElement>
          <Input />
          <InputRightElement width="50%">
            <ColorPallete color={clothColor} setColor={setClothColor} />
          </InputRightElement>
        </InputGroup>
        <InputGroup size="md">
          <InputLeftElement width="50%">
            <FormLabel>Backgound Color</FormLabel>
          </InputLeftElement>
          <Input />
          <InputRightElement width="50%">
            <ColorPallete color={bgColor} setColor={setBgColor} />
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  );
};
