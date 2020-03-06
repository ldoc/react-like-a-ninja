import React, { useRef } from "react";
import { useKatana } from "../hooks/useKatana.js";

export const Board = (props) => {
  const svgEl = useRef(null);
  const katana = useKatana(svgEl);

  return <svg className='board' viewBox="-711.46 -800 1422.92 800" ref={svgEl}>
    {props.children}
  </svg>;
}