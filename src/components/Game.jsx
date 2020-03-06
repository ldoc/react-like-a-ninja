import React, {useEffect} from "react";
import { Board } from "./Board.jsx";
import { Score } from "./Score.jsx";

export const Game = () => {

  useEffect(() => {
    screen.orientation.lock('landscape');
  },[]);

  return <div id='game' className='game'>
    <Board>
      <Score points={230}/>
      <rect fill="white" y="-10" x="0" width="50" height="50"/>
    </Board>
  </div>;
}