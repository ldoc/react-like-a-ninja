import React, { useEffect } from "react";

export const useKatana = (ref) => {

  const start = () => {
    console.log('start')
  }

  const move = (e) => {
    console.log(e.touches)
    console.log('move')
    let newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
    newElement.setAttribute("r","5"); //Set path's data
    newElement.setAttribute("cx",e.touches[0].clientX+100);
    newElement.setAttribute("cy",e.touches[0].clientY+100);
    ref.current.appendChild(newElement);
  }

  const end = () => {
    console.log('end')
  }

  const cancel = () => {
    console.log('cancel')
  }

  useEffect(() => {
    console.log(ref.current.height.baseVal.value);
    console.log(ref.current.width.baseVal.value);
    ref.current.addEventListener('touchstart', start, false);
    ref.current.addEventListener('touchmove', move, false);
    ref.current.addEventListener('touchcancel', cancel, false);
    ref.current.addEventListener('touchend', end, false);
  }, [])
}