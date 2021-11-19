import {useState} from 'react'
import { useHistory } from "react-router"

function Signup() {
    const history = useHistory()
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '', 
        avatar: "/images/hero/profile.png",
        weapon: "/images/hero/sword.png",
        weaponName: 'sword',
        currentStage: 1,
        damage: 10,
        gold: 2000,
        goldMultiplier: 1,
        image: "/images/hero/hero.png"
    })
    const [showPassword, setShowPassword] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(history.push('/login'))
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }
    return (
        <div className='login'>
            <div className='login-back'>
                <form className='login-form' onSubmit={e => handleSubmit(e)}>
                    <input type='text' placeholder='Username' value={formData.username} name='username' onChange={e => handleChange(e)} ></input>
                    <input type='text' placeholder='Email' value={formData.email} name='email' onChange={e => handleChange(e)} ></input>
                    <div>
                        <input type={showPassword ? 'text' : 'password'} placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)} ></input>
                        {showPassword ?
                            <img className='show-password' onClick={() => setShowPassword(!showPassword)} src='https://cdn.discordapp.com/attachments/900501298049347625/911135105140015134/2072011.png' /> :
                            <img className='show-password' onClick={() => setShowPassword(!showPassword)} src='https://cdn.discordapp.com/attachments/900501298049347625/911135116607234078/2072008.png' />
                        }
                    </div>
                    <button className='login-btn' type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup