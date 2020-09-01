import React, { useContext, useReducer } from "react";
import { Box } from "@chakra-ui/core";
import { FacemaskContext, useDispatch } from "./context";

const masks = [
  "https://api.smartmockups.com/imgixv1/apparel_smartmockups_face_mask_3_color_a.png?w=900",
  "https://api.smartmockups.com/imgixv1/apparel_smartmockups_face_mask_3_color_b.png?w=900",
  "https://api.smartmockups.com/imgixv1/apparel_smartmockups_face_mask_3_crop.png?w=900",
  "https://api.smartmockups.com/imgixv1/apparel_smartmockups_face_mask_3_highlight.png?w=900",
  "https://api.smartmockups.com/imgixv1/apparel_smartmockups_face_mask_3_shadow.png?w=900"
];
export const StripLayer = props => {
  const { stripColor } = useContext(FacemaskContext);
  const mask = `url(${masks[0]})`;
  return (
    <div
      className="layer strip-layer"
      style={{
        background: stripColor.hex,
        maskImage: mask,
        WebkitMaskImage: mask
      }}
    />
  );
};
export const StripMaskLayer = props => {
  return <Box className="layer strip-mask" />;
};
export const ClothLayer = props => {
  const { clothColor, texture } = useContext(FacemaskContext);
  const mask = `url(${masks[1]})`;
  const img = `url(${texture})`;
  return (
    <div
      className="layer cloth-layer"
      style={{
        background: clothColor.hex,
        backgroundImage: img,
        maskImage: mask,
        WebkitMaskImage: mask
      }}
    />
  );
};

export const ClothTexture = props => {
  const { texture } = useContext(FacemaskContext);
  const mask = `url(${masks[1]})`;
  const img = `url(${texture})`;
  return (
    <div
      className="layer cloth-layer"
      style={{
        // background: clothColor.hex,
        backgroundImage: img,
        maskImage: mask,
        WebkitMaskImage: mask
      }}
    />
  );
};

export const ClothMaskLayer = props => {
  return <Box className="layer cloth-mask" />;
};

export const FaceMask = props => {
  const { bgColor } = useContext(FacemaskContext);
  const mask = `url(${masks[3]})`;
  // const dispatch = useDispatch();
  // const state = useContext(FacemaskContext);
  return (
    <Box
      className="face-mask"
      width={["70%"]}
      height={["100%"]}
      maxWidth="900"
      style={{
        background: bgColor.hex
        // maskImage: mask,
        // WebkitMaskImage: mask
      }}
    >
      <StripLayer />
      <ClothLayer />
      {/* <ClothTexture /> */}
    </Box>
  );
};
