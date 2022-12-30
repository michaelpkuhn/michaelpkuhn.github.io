import './nav.css'
import { useState } from 'react'

export default function NavBar(){
    // Active page is saved in state, home is default
    const [active, setActive] = useState("Home");

    // Define nav buttons
    const NavItem = (props) => {
        let itemClass = "nav-item"; // default class
        if (props.page === active){
            itemClass += " nav-item-active" // additional class if active
        }

        // onclick, set active page to clicked page
        const handleClick = () => {
            setActive(props.page)
        }

        return (
            <li className={itemClass} onClick={handleClick}>
                {props.page}
            </li>
        )
    }

    return (
        <nav>
            <ul className="nav-menu">
                <NavItem page="Home"/>
                <NavItem page="About"/>
                <NavItem page="Contact"/>
            </ul>
        </nav>
    )
}