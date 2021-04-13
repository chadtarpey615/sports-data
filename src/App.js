import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner.js";
import Stat from "./components/Stats/Stats.js";
import requests from "./request.js";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Stat fetchUrl={requests.fetchTeams} />
    </div>
  );
}

export default App;
