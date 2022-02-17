

import logo from "./img/logo.svg"
import HeaderMenu from "./HeaderMenu"

function Header () {
    return (
    <header className="page-header container">
    <img src={logo} alt="логотип" width="75" height="70" /> <HeaderMenu />
    </header>)
}
export default Header