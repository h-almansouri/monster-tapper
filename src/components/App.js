import React, { useEffect, useState } from "react";
import Fight from "./Fight";
import Nav from "./Nav";
import {Route, Switch} from "react-router-dom"
import Upgrades from "./Upgrades";
import Profile from "./Profile";
import Player from "./Player";

function App() {
  const Url = 'http://localhost:3000/player'
  const [playerData, setPlayerData] = useState([])
  const [updatedInfo, setUpdatedInfo] = useState({})

  useEffect(() => {
    fetch(Url)
    .then(res => res.json())
    .then(data => {
      setPlayerData(data)
      setUpdatedInfo({
        username: data[0].username,
        avatar: data[0].avatar,
        weapon: data[0].weapon
      })
    })
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
          <Profile 
            playerData={playerData} 
            setPlayerData={setPlayerData} 
            updatedInfo={updatedInfo} 
            setUpdatedInfo={setUpdatedInfo} />
        </Route>
      </Switch>
      {/* <Nav playerData={playerData}/> */}
    </div>
  );
}

export default App;
