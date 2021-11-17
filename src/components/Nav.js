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

function Nav() {
    return (
        <div className="navbar">
            <NavLink
                className="nav-item"
                to="/fight"
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
                <img className="nav-img" src="./images/hero/upgrade.png" alt="Upgrades Logo" />
            </NavLink>
            <NavLink
                className="nav-item"
                to="/profile"
                exact
                style={linkStyles}
                activeStyle={{background: "blue"}}
            >
                <img className="nav-img" src="./images/hero/profile.png" alt="Profile Logo" />
            </NavLink>
        </div>
    )
}

export default Nav