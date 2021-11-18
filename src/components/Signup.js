import { NavLink, Link } from "react-router-dom"

function Signup() {
    return (
        <div className='login'>
            <div className='login-back'>
                <form className='login-form'>
                    <input type='text' placeholder='Username'></input>
                    <input type='text' placeholder='Email'></input>
                    <input type='text' placeholder='Password'></input>
                    <Link className='login-btn' to="/login">
                        <button className='login-btn' type='submit'>Sign Up</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Signup