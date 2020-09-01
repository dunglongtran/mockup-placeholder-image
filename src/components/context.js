import React, { useReducer } from "react";

export const initialState = {
  count: 0,
  texture: null,
  stripColor: { hex: "#F8E71C" },
  clothColor: { hex: "#DFC0C0" },
  bgColor: { hex: "#417505" }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "texture":
      console.log("texture");
      return { ...state, texture: action.data };
    case "strip-color":
      console.log("strip-color");
      return { ...state, stripColor: action.data };
    case "cloth-color":
      console.log("cloth-color");
      return { ...state, clothColor: action.data };
    case "bg-color":
      console.log("bg-color");
      return { ...state, bgColor: action.data };
    case "click":
      console.log("click");
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};
let store = null;
const createStore = () => {
  store = useReducer(reducer, initialState);
  return store;
};
export const useDispatch = () => {
  const [, dispatch] = store;
  return dispatch;
};
export const useStore = () => createStore();
export const FacemaskContext = React.createContext(initialState);
