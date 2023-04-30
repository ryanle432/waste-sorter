import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <ul class="Navbar">
            <a href="https://waste-sorter.herokuapp.com/" style={{paddingRight:"15px"}}>Go to Waste Sorter App</a>
            <NavbarItem name="Trashcan Items" route="/items"/>
            <NavbarItem name="About Us" route="/"/>
        </ul>
    )
}

export default Navbar;