import { useState } from "react";

const useToggle = (initialValue) => {
  const [state, setState] = useState(initialValue);

  const toggle = () => setState(!state);

  return [state, toggle];
};

useToggle.defaultProps = {
  initialValue: false,
};

export { useToggle };
