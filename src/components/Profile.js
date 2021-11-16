import { useState } from "react"
import Nav from "./Nav"

function Profile({playerData, setPlayerData, updatedInfo, setUpdatedInfo}) {
    // console.log(updatedInfo)
    if (playerData.length > 0) {
        const {id} = playerData[0]
        const {username, avatar} = updatedInfo

        function handleChange(e) {
            // console.log(e.target.value)
            setUpdatedInfo({...updatedInfo, [e.target.name] : e.target.value})
        }

        function handleSubmit(e) {
            e.preventDefault()
            fetch(`http://localhost:3000/player/${id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updatedInfo)
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }

        return (
            <div className='fight-background'>
                <div className='formbox'>
                    <img className='prof-pic' alt='Profile Pic' src={playerData[0].avatar}/>
                    <br />
                    <form className='prof-form' onSubmit={e => handleSubmit(e)}>
                        <h3>Username</h3>
                        <input className='input' name='username' value={username} onChange={e => handleChange(e)} ></input>
                        <br />
                        <h3>Profile Image Url</h3>
                        <input className='input' name='avatar' value={avatar} onChange={e => handleChange(e)} ></input>
                        <br />
                        <h3>Weapon</h3>
                        <div className='armory'>
                            <img className='nav-img' src='/images/hero/sword.png' />
                            <input 
                                type='radio' 
                                id='weapon1' 
                                name='weapon' 
                                value='/images/hero/sword.png' 
                                onChange={e => handleChange(e)} >
                            </input>
                            <img className='nav-img' src='/images/hero/axe.png' />
                            <input 
                                type='radio' 
                                id='weapon2' 
                                name='weapon' 
                                value='/images/hero/axe.png'
                                onChange={e => handleChange(e)} >
                            </input>
                            <img className='nav-img' src='/images/hero/spear.png' />
                            <input 
                                type='radio' 
                                id='weapon3' 
                                name='weapon' 
                                value='/images/hero/spear.png' 
                                onChange={e => handleChange(e)} >
                            </input>
                        </div>
                        <button type='submit'>Update Hero</button>
                    </form>
                </div>
                <Nav />
            </div>
        )
    } else {
        window.history.back()
        console.log('dne')
        return(<div></div>)
    }
}
export default Profile