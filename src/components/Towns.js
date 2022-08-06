import React from "react";

function Towns(props) {
  return (
    <ul>
      <li>
        <div id={props.townId}>{props.townName}</div>
      </li>
    </ul>
  );
}

export default Towns;
