import "./App.css";
import { useSelector } from "react-redux";
import React, { useState } from "react";
// import { selectUsers } from "./store/users/selectors";
import { selectDevelopersWithResource } from "./store/developers/selectors";

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
  const statistics = useSelector(selectStatistics);
  const resources = useSelector(selectResources);
  // console.log("RESOURCE", resourceId);

  const changeResource = (e) => setResourceId(parseInt(e.target.value));

  const developersWithThisResource = useSelector(
    selectDevelopersWithResource(resourceId)
  );

  return (
    <div className="App">
      <h1>Web development resources</h1>
      <p>Hello there..</p>
      <p>Developers: {statistics.numDevelopers}</p>
      <p>Resources: {statistics.numResources}</p>
      <select value={resourceId} onChange={changeResource}>
        <option value="">Select resource</option>
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
    </div>
  );
}

export default App;
