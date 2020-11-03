import "./App.css";
import { useSelector } from "react-redux";

const selectStatistics = (reduxState) => {
  return {
    numDevelopers: reduxState.developers.length,
    numResources: reduxState.resources.length,
  };
};

function App() {
  const statistics = useSelector(selectStatistics);

  return (
    <div className="App">
      <p>Hello there..</p>
      <p>Developers: {statistics.numDevelopers}</p>
      <p>Resources: {statistics.numResources}</p>
    </div>
  );
}

export default App;
