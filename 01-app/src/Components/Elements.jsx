import React from "react";
const Elements = (props) => {
  return (
    <li className="ele">
      <span>
        {props.completed ? (
          <></>
        ) : (
          <span>
            <input type="checkbox" />
          </span>
        )}
        <span>{props.text}</span>
      </span>

      <span>...</span>
    </li>
  );
};
export default Elements;
