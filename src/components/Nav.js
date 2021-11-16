import { NavLink } from "react-router-dom"

const linkStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100px',
    height: '100px',
    borderRadius: '100%',
    background: 'lightblue'
}

function Nav({playerData}) {
    return (
        <div className="navbar">
            {/* <Fight playerData={playerData} /> */}
            <NavLink
                className="nav-item"
                to="/"
                exact
                style={linkStyles}
                activeStyle={{background: "blue"}}
            >
                <img className="nav-img" src="./images/hero/fight.png" alt="Fight Logo" />
            </NavLink>
            <NavLink
                className="nav-item"
                to="/upgrades"
                exact
                style={linkStyles}
                activeStyle={{background: "blue"}}
            >
                <img className="nav-img" src="./images/hero/upgrade.png" alt="Fight Logo" />
            </NavLink>
            <NavLink
                className="nav-item"
                to="/profile"
                exact
                style={linkStyles}
                activeStyle={{background: "blue"}}
            >
                <img className="nav-img" src="./images/hero/profile.png" alt="Fight Logo" />
            </NavLink>
        </div>
    )
}

export default Nav