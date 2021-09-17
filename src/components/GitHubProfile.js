import React from "react";

function GitHubProfile({ user = null }) {
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (user === null) {
    return null;
  }
  function getJoinedAtDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = MONTHS[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }
  return (
    <div className="github-profile">
      <div className="top-info">
        <img src={user.avatar_url} alt="profile photo" />
        <div className="top-info__text-data">
          <h2>{user.name}</h2>
          <span className="user-handle">@{user.login}</span>
          <span className="joined-at">
            Joined {getJoinedAtDate(user.created_at)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default GitHubProfile;
