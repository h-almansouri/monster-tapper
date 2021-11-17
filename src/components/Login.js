import { Link } from "react-router-dom"

function Login() {
    return (
        <div className='login'>
            <Link to="/fight">
                <img src='https://cdn.discordapp.com/attachments/900501298049347625/910311588240719892/button_adobespark.png'/>
            </Link>
        </div>
    )
}

export default Login