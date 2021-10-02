import React from "react";

function SingleLineDataWithIcon({ data = "", link = false, children }) {
  return (
    <div className={`data-with-icon ${data ? "" : "disabled"}`}>
      {children}
      {data ? (
        link ? (
          <a href={data} target="_blank" rel="noopener noreferrer">
            {data}
          </a>
        ) : (
          <span>{data}</span>
        )
      ) : (
        <span className="not-available">Not available</span>
      )}
    </div>
  );
}

export default SingleLineDataWithIcon;
