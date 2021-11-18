import React, { useEffect, useState } from "react";
import Fight from "./Fight";
import Nav from "./Nav";
import {Route, Switch} from "react-router-dom"
import Upgrades from "./Upgrades";
import Profile from "./Profile";
import Start from "./Start";
import Player from "./Player";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const Url = 'http://localhost:3000/users'
  const [playerData, setPlayerData] = useState([])
  const [updatedInfo, setUpdatedInfo] = useState({})
  const [currGold, setCurrGold] = useState()
  const [currStage, setCurrStage] = useState()

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
      setCurrGold(data[0].gold)
      setCurrStage(data[0].currentStage)
    })
  }, [])

  if (playerData.length > 0) {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/fight">
            <Fight 
              playerData={playerData} 
              setPlayerData={setPlayerData} 
              currGold={currGold} 
              setCurrGold={setCurrGold} 
              currStage={currStage} 
              setCurrStage={setCurrStage} />
          </Route>
          <Route exact path="/upgrades">
            <Upgrades playerData={playerData} currGold={currGold} setCurrGold={setCurrGold} currStage={currStage} />
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
  } else {
    return null
  }
  
}

export default App;
