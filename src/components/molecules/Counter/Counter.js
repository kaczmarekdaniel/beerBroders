import { animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(100);

  function Counter({ from, to }) {
    const nodeRef = useRef();

    useEffect(() => {
      const node = nodeRef.current;

      const controls = animate(from, to, {
        duration: 1,
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        },
      });

      return () => controls.stop();
    }, [from, to]);

    return <p ref={nodeRef} />;
  }

  useEffect(() => {
    setFrom(0);
    setTo(100);
  }, [to]);

  return <Counter from={from} to={to} />;
};
export default Counter;
