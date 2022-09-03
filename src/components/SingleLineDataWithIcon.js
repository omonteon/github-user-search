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
          <p>{data}</p>
        )
      ) : (
        <p className="not-available">Not available</p>
      )}
    </div>
  );
}

export default SingleLineDataWithIcon;
