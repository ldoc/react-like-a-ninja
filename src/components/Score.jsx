import React from "react";

export const Score = (props) => {
  return <text x="0" y="-80" fontFamily="Verdana" fontSize="20">
           {props.points}
        </text>
}