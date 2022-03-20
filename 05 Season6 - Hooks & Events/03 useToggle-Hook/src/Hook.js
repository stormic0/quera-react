import { useState } from "react";
const useToggle = (initialValue) => {
  const state = initialValue;
  const toggle = () => null;

  return [state, toggle];
};

export { useToggle };
