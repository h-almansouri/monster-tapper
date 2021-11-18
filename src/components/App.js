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
  const [playerData, setPlayerData] = useState({
    "email": "",
    "password": "",
    "username": "",
    "avatar": "/images/hero/profile.png",
    "weapon": "/images/hero/sword.png",
    "currentStage": 1,
    "damage": 10,
    "gold": 2000,
    "image": "/images/hero/hero.png",
    "id": ''
  })
  const [updatedInfo, setUpdatedInfo] = useState({})
  const [currGold, setCurrGold] = useState()
  const [currStage, setCurrStage] = useState()

  useEffect(() => {
    console.log(playerData)
      setUpdatedInfo({
        username: playerData.username,
        avatar: playerData.avatar,
        weapon: playerData.weapon
      })
      setCurrGold(playerData.gold)
      setCurrStage(playerData.currentStage)
    
  }, [playerData])



  // if (playerData.length > 0) {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route exact path="/login">
            <Login setPlayerData={setPlayerData}/>
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
  
}

export default App;
