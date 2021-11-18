import { NavLink, Link } from "react-router-dom"
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
        currentStage: 1,
        damage: 10,
        gold: 2000,
        image: "/images/hero/hero.png"
    })

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
        console.log(e.target.value)
        setFormData({...formData, [e.target.name] : e.target.value})
    }
    return (
        <div className='login'>
            <div className='login-back'>
                <form className='login-form' onSubmit={e => handleSubmit(e)}>
                    <input type='text' placeholder='Username' value={formData.username} name='username' onChange={e => handleChange(e)} ></input>
                    <input type='text' placeholder='Email' value={formData.email} name='email' onChange={e => handleChange(e)} ></input>
                    <input type='text' placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)} ></input>
                    {/* <Link className='login-btn' to="/login"> */}
                        <button className='login-btn' type='submit'>Sign Up</button>
                    {/* </Link> */}
                </form>
            </div>
        </div>
    )
}

export default Signup