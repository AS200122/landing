import { CiSearch } from "react-icons/ci";
import { userConfig } from "../../../config";
import { Link } from "react-router-dom";

import "./Search.scss";

export default function SearchUser() {
  return (
    <div className="search">
      <div className="search-content">
        <input
          className="search-content-search"
          type="text"
          placeholder="Search"
        />
        <button className="search-content-button">
          <CiSearch />
        </button>
      </div>
      <div className="search-icons">
        {userConfig.map(({ id, title, link }) => {
          return (
            <Link to={link} key={id}>
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
