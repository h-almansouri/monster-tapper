import React, { useEffect, useState } from "react";
import Fight from "./Fight";
import Nav from "./Nav";
import {Route, Switch} from "react-router-dom"
import Upgrades from "./Upgrades";
import Profile from "./Profile";
import Start from "./Start";
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
    "goldMultiplier": 1,
    "image": "/images/hero/hero.png",
    "id": ''
  })
  const [updatedInfo, setUpdatedInfo] = useState({})
  const [currGold, setCurrGold] = useState()
  const [currStage, setCurrStage] = useState()
  const [currDamage, setCurrDamage] = useState()
  const [goldMultiplier, setGoldMultiplier] = useState()

  useEffect(() => {
    console.log(playerData)
      setUpdatedInfo({
        username: playerData.username,
        avatar: playerData.avatar,
        weapon: playerData.weapon
      })
      setCurrGold(playerData.gold)
      setCurrStage(playerData.currentStage)
      setCurrDamage(playerData.damage)
      setGoldMultiplier(playerData.goldMultiplier)
      patchUpgrades(playerData)
  }, [playerData])

  function patchUpgrades(data) {
    fetch(`http://localhost:3000/users/${data.id}`, {
        method: 'PATCH',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          "damage": Math.ceil(data.damage),
          "gold": data.gold,
          "goldMultiplier": data.goldMultiplier,
        })
    })
}

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
          <Upgrades 
            playerData={playerData} 
            currStage={currStage}
            setPlayerData={setPlayerData} 
            currGold={currGold} 
            setCurrGold={setCurrGold}
            currDamage={currDamage}
            setCurrDamage={setCurrDamage}
            goldMultiplier={goldMultiplier}
            setGoldMultiplier={setGoldMultiplier}
            patchUpgrades={patchUpgrades}
            />
        </Route>
        <Route exact path="/profile">
          <Profile 
            playerData={playerData} 
            setPlayerData={setPlayerData} 
            updatedInfo={updatedInfo} 
            setUpdatedInfo={setUpdatedInfo} />
        </Route>
      </Switch>
    </div>
  );
  
}

export default App;
