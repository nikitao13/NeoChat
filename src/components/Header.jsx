import eraseAllMessages from "../../helpers/dbErase.js";

const handleClick = () => {
    eraseAllMessages();
}

function Header() {
    return (
        <header>
            <h1>neo chat</h1>
            <div id="nav-links">
                <p className="header-link">sign up</p>
                <p className="header-link">log in</p>
                <p className="header-link" onClick={handleClick}>settings</p>
            </div>
        </header>
    )
}

export default Header