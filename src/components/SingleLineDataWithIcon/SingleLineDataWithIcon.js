import React from "react";
import styles from "./SingleLineDataWithIcon.module.css";

function SingleLineDataWithIcon({ data = "", link = false, children }) {
  return (
    <div className={`${styles["data-with-icon"]} ${data ? "" : "disabled"}`}>
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
