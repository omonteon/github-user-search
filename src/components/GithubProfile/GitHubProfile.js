import React from "react";
import SingleLineDataWithIcon from "../SingleLineDataWithIcon";
import { ReactComponent as LocationIcon } from "../../assets/icon-location.svg";
import { ReactComponent as WebSiteIcon } from "../../assets/icon-website.svg";
import { ReactComponent as CompanyIcon } from "../../assets/icon-company.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icon-twitter.svg";
import { MONTHS } from "../../constants";
import styles from "./GithubProfile.module.css";

function GitHubProfile({ user = null }) {
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
    <div className={styles["github-profile"]}>
      <img src={user.avatar_url} alt={user.name} className={styles.avatar} />
      <div className={styles["top-info"]}>
        <div className={styles["top-info__text-data"]}>
          <h2>{user.name}</h2>
          <p className={styles["user-handle"]}>@{user.login}</p>
          <p className={styles["joined-at"]}>
            Joined {getJoinedAtDate(user.created_at)}
          </p>
        </div>
      </div>
      {user.bio ? <p className="bio">{user.bio}</p> : null}
      <ul className={styles["metrics"]}>
        <li className={styles["metric"]}>
          <h3>Repos</h3>
          <p>{user.public_repos}</p>
        </li>
        <li className={styles["metric"]}>
          <h3>Followers</h3>
          <p>{user.followers}</p>
        </li>
        <li className={styles["metric"]}>
          <h3>Following</h3>
          <p>{user.following}</p>
        </li>
      </ul>
      <ul className={styles["bottom-info"]}>
        <li>
          <SingleLineDataWithIcon data={user.location}>
            <LocationIcon width={20} />
          </SingleLineDataWithIcon>
        </li>
        <li>
          <SingleLineDataWithIcon data={user.blog} link={true}>
            <WebSiteIcon width={20} />
          </SingleLineDataWithIcon>
        </li>
        <li>
          <SingleLineDataWithIcon data={user.twitter_username}>
            <TwitterIcon width={20} />
          </SingleLineDataWithIcon>
        </li>
        <li>
          <SingleLineDataWithIcon data={user.company}>
            <CompanyIcon width={20} />
          </SingleLineDataWithIcon>
        </li>
      </ul>
    </div>
  );
}

export default GitHubProfile;
