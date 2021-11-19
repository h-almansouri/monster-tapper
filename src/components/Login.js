import { NavLink } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { useHistory } from "react-router";

function Login({setPlayerData}) {
    const history = useHistory()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.user) {
                setPlayerData(data.user)
                history.push('/fight')
            } else {
                alert('Invalid Email or Password')
            }
        })
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <div className='login'>
            <div className='login-back'>
                <form className='login-form' onSubmit={e => handleSubmit(e)}>
                    <input type='text' p value={formData.email} placeholder='Email' name='email' onChange={e => handleChange(e)} ></input>
                    <div>
                        <input type={showPassword ? 'text' : 'password'} value={formData.password} placeholder='Password' name='password' onChange={e => handleChange(e)} ></input>
                        {showPassword ?
                            <img className='show-password' onClick={() => setShowPassword(!showPassword)} src='https://cdn.discordapp.com/attachments/900501298049347625/911135105140015134/2072011.png' /> :
                            <img className='show-password' onClick={() => setShowPassword(!showPassword)} src='https://cdn.discordapp.com/attachments/900501298049347625/911135116607234078/2072008.png' />
                        }
                    </div>
                    <button className='login-btn' type='submit'>Login</button>
                </form>
                <NavLink className='signup-link' exact to='/signup'>Don't have an account? Sign Up</NavLink>
            </div>
        </div>
    )
}

export default Login