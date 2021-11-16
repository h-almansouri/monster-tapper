import React, { useEffect, useState } from "react";
import Fight from "./Fight";
import Nav from "./Nav";
import {Route, Switch} from "react-router-dom"
import Upgrades from "./Upgrades";
import Profile from "./Profile";

function App() {
  const Url = 'http://localhost:3000/player'
  const [playerData, setPlayerData] = useState([])

  useEffect(() => {
    fetch(Url)
    .then(res => res.json())
    .then(data => setPlayerData(data))
  }, [])


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Fight playerData={playerData}/>
        </Route>
        <Route exact path="/upgrades">
          <Upgrades />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
      {/* <Nav playerData={playerData}/> */}
    </div>
  );
}

export default App;
