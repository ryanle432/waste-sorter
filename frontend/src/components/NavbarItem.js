import { Link } from "react-router-dom";

function NavbarItem({ name, route }) {
    return (
        <>
        <Link to={ route }><li class="Navbar-Item" onMouseOver={changeBackground} onMouseOut={revertBackground}>{ name }</li></Link>
        </>
    )
}

function changeBackground(e) {
    e.target.style.background = "#013514";
    e.target.style.font = "#026928";
}

function revertBackground(e) {
    e.target.style.background = "unset";
}

export default NavbarItem;