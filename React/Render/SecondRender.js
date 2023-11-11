import { useLayoutEffect, useEffect, useState } from "react";

export default function Counter() {
  console.log("Counter start");
  // 0 => 1 => 1 => 0

  const [view, setView] = useState(false);

  const [state, setState] = useState(0);
  console.log("statet", state, view);
  // 0 => 2 => 2 => 0

  useLayoutEffect(() => {
    // 0 => 0 => 0 => 2
    console.log("useLayoutEffect", state);
    return () => console.log("useLayoutEffect > return", state);
    // 0 => 0 => 0 => 1
  }, [view]);

  useEffect(() => {
    // 0 => 0 => 0 => 4
    setView((cur) => !cur);
    console.log("useEffect", state);
    return () => console.log("useEffect > return", state);
    // 0 => 0 => 0 => 3
  }, [state]);

  function handleClick() {
    // click 1 => 0
    setState(state + 1);
    console.log("handleClick", state);
  }

  console.log("handleClick", handleClick);
  // 0 => 3 => 3 => 0

  // 0 => 4 => 4 => 0
  return console.log("Counter return", state) ? null : (
    <button onClick={handleClick}>You clicked {state} times</button>
  );
}
