import React from "react";
import "./ResourcesSection.css";
import { useDispatch, useSelector } from "react-redux";
import { selectResources } from "../../store/resources/selectors";
import { selectLoggedInUser } from "../../store/selectors";
import { toggleFavorite } from "../../store/developers/actions";

export default function ResourcesSection() {
  const dispatch = useDispatch();
  const resources = useSelector(selectResources);
  const loggedInUser = useSelector(selectLoggedInUser);
  //   console.log("loggedInUser", loggedInUser);

  return (
    <div className="ResourcesSection">
      <h1>All resources:</h1>
      {resources.map((res) => {
        return (
          <div key={res.id} className="resource-container">
            <h3>{res.name}</h3>{" "}
            <button
              className="favorite-button"
              onClick={() => dispatch(toggleFavorite(loggedInUser.id, res.id))}
            >
              {loggedInUser.favorites.includes(res.id)
                ? "\uD83D\uDC96"
                : "\uD83D\uDDA4"}
            </button>
            <p>
              (<i>{res.type}</i>) - More info:{" "}
              <a className="resource-url" href={res.url}>
                {res.url}
              </a>
            </p>
            <p>
              {res.tags.map((tag, i) => {
                return (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                );
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
}

// {
//     id: 6,
//     name: "unDraw",
//     type: "resource",
//     tags: ["sketches", "svg", "graphics"],
//     url: "https://undraw.co/illustrations",
//   },
