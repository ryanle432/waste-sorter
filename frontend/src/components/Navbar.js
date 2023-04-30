import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <ul class="Navbar">
            <NavbarItem name="Webcam" route="/"/>
            <NavbarItem name="Trashcan Items" route="/items"/>
            <NavbarItem name="About Us" route="/about"/>
        </ul>
    )
}

export default Navbar;