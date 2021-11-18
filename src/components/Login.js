import { NavLink, Link } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { useHistory } from "react-router";

function Login({setPlayerData}) {
    const history = useHistory()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

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
        console.log(e.target.value)
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <div className='login'>
            <div className='login-back'>
                <form className='login-form' onSubmit={e => handleSubmit(e)}>
                    <input type='text' value={formData.email} placeholder='Email' name='email' onChange={e => handleChange(e)} ></input>
                    <input type='text' value={formData.password} placeholder='Password' name='password' onChange={e => handleChange(e)} ></input>
                    {/* <Link className='login-btn' to="/fight"> */}
                        <button className='login-btn' type='submit'>Login</button>
                    {/* </Link> */}
                </form>
                <NavLink className='signup-link' exact to='/signup'>Don't have an account? Sign Up</NavLink>
            </div>
        </div>
    )
}

export default Login