import { useLayoutEffect, useEffect, useRef, useState } from "react";

export default function Counter() {
  console.log("Counter start");
  // 1 => 1 => 0 => 0
  const [state, setState] = useState(0);
  console.log("statet", state);
  // 2 => 2 => 0 => 0

  useLayoutEffect(() => {
    // 0 => 0 => 1 => 1
    console.log("useLayoutEffect", state);
    return () => console.log("useLayoutEffect > return", state);
    // 0 => 0 => 3 => 0
  }, []);

  useEffect(() => {
    // 0 => 0 => 2 => 2
    console.log("useEffect", state);
    return () => console.log("useEffect > return", state);
    // 0 => 0 => 4  => 0
  }, [state]);

  function handleClick() {
    setState(state + 1);

    console.log("handleClick", state);
  }

  console.log("handleClick", handleClick);
  // 3 => 3 => 0 => 0

  //4  => 4 => 0 => 0
  return console.log("Counter return", state) ? null : (
    <button onClick={handleClick}>You clicked {state} times</button>
  );
}
