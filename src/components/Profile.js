import { useHistory } from "react-router"
import Nav from "./Nav"

function Profile({playerData, updatedInfo, setUpdatedInfo}) {
    const history = useHistory()
    const {id} = playerData
    const {username, avatar} = updatedInfo

    function handleChange(e) {
        setUpdatedInfo({...updatedInfo,
             [e.target.name] : e.target.value,
             'weaponName' : e.target.id
            })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedInfo)
        })
        .then(res => res.json())
        .then(alert('Profile Updated!'))
    }

    function handleLogOut() {
        history.push('/')
    }

    return (
        <div className='fight-background'>
            <div className='formbox'>
                <button className='logout-btn' onClick={handleLogOut}>Log Out</button>
                <img className='prof-pic' alt='Broken image link' src={avatar} />
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
                            id='sword' 
                            name='weapon' 
                            value='/images/hero/sword.png' 
                            onChange={e => handleChange(e)} >
                        </input>
                        <img className='nav-img' src='/images/hero/axe.png' />
                        <input 
                            type='radio' 
                            id='axe' 
                            name='weapon' 
                            value='/images/hero/axe.png'
                            onChange={e => handleChange(e)} >
                        </input>
                        <img className='nav-img' src='/images/hero/spear.png' />
                        <input 
                            type='radio' 
                            id='spear' 
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
}
export default Profile