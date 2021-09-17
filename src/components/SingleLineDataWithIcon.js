import React from "react";

function SingleLineDataWithIcon({ data = "", children }) {
  return (
    <div className={`data-with-icon ${data ? "" : "disabled"}`}>
      {children}
      {data ? (
        <span>{data}</span>
      ) : (
        <span className="not-available">Not available</span>
      )}
    </div>
  );
}

export default SingleLineDataWithIcon;
