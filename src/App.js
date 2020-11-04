import "./App.css";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { selectDevelopers } from "./store/developers/selectors";
import { selectDevelopersWithResource } from "./store/developers/selectors";
import {
  selectResourcesOfDeveloper,
  selectLoggedInUser,
} from "./store/selectors";
import ResourcesSection from "./components/ResourcesSection/ResourcesSection";
import AddResourceForm from "./components/AddResourceForm/AddResourceForm";

const selectStatistics = (reduxState) => {
  return {
    numDevelopers: reduxState.developers.length,
    numResources: reduxState.resources.length,
  };
};

const selectResources = (state) => {
  return state.resources;
};

function App() {
  const [resourceId, setResourceId] = useState("");
  const [developerId, setDeveloperId] = useState("0");
  const statistics = useSelector(selectStatistics);
  const resources = useSelector(selectResources);
  const developers = useSelector(selectDevelopers);
  // console.log("userId", userId);
  // console.log("DEV ID", developerId);
  // console.log("DEVELOPERS", developers);
  const developersWithThisResource = useSelector(
    selectDevelopersWithResource(resourceId)
  );
  const resourcesOfDeveloper = useSelector(
    selectResourcesOfDeveloper(developerId)
  );
  const loggedInUser = useSelector(selectLoggedInUser);

  // const selectedDev = allDevelopers.find(d => d.id === selectedDeveloper);
  // const favorites = useSelector(
  //   convertResourceIdsToNames(selectedDev.favorites)
  // );

  return (
    <div className="App">
      <p
        style={{
          margin: "",
          padding: "0.5rem",
          background: "darkgrey",
        }}
      >
        Welcome <strong>{loggedInUser.name}</strong>!
      </p>
      <h1>Web development resources</h1>
      <p>Hello there..</p>
      <p>Developers: {statistics.numDevelopers}</p>
      <p>Resources: {statistics.numResources}</p>
      Who likes resource:{" "}
      <select
        value={resourceId}
        onChange={(e) => setResourceId(parseInt(e.target.value))}
      >
        <option value="">Pick one</option>
        {resources.map((res) => {
          return (
            <option key={res.id} value={res.id}>
              {res.name}
            </option>
          );
        })}
      </select>
      {developersWithThisResource.map((dev) => {
        return <p key={dev.id}>- {dev.name}</p>;
      })}
      <div>
        Favorite resources of:
        <select
          value={developerId}
          onChange={(e) => setDeveloperId(parseInt(e.target.value))}
        >
          <option value="0">Pick one</option>
          {developers.map((dev) => {
            return (
              <option key={dev.id} value={dev.id}>
                {dev.name}
              </option>
            );
          })}
        </select>
        {resourcesOfDeveloper.map((res) => {
          return <p key={res.id}>- {res.name}</p>;
        })}
      </div>
      <ResourcesSection />
      <AddResourceForm />
    </div>
  );
}

export default App;
