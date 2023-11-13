import "./index.scss"
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faS, faCode } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"


const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className = 'logo' to = '/'>
            <FontAwesomeIcon icon = {faS} color = "#000000" className = "logo"/>
        </Link>
        <nav>
            <NavLink
             exact = "true" 
             activeclassname = "active" 
             to = "/"
            >
                <FontAwesomeIcon icon = {faHome} color = "#000000"/>
            </NavLink>

            {/* <NavLink
             exact = "true" 
             activeclassname = "active"  
             className = "about-link" 
             to = "/about"
            >
                <FontAwesomeIcon icon = {faUser} color = "#000000"/>
            </NavLink> */}

            {/* <NavLink
             exact = "true" 
             activeclassname = "active" 
             className = "contact-link" 
             to = "/contact"
            >
                <FontAwesomeIcon icon = {faEnvelope} color = "#000000"/>
            </NavLink> */}

            <NavLink 
                exact = "true"
                activeclassname = "active"
                className = "projects-link"
                to = "/projects"
            >
                <FontAwesomeIcon icon = {faCode} color = "#000000"/>
            </NavLink>

        </nav>
        <ul>
            <li>
                <a
                    target = "_blank"
                    rel = "noreferrer"
                    href = "https://www.linkedin.com/in/siddharth-balaji-8682b4210/"

                >
                    <FontAwesomeIcon icon = {faLinkedin} color = '#000000'/>
                </a>
            </li>
            <li>
                <a
                    target = "_blank"
                    rel = "noreferrer"
                    href = "https://github.com/SB379"
                >
                    <FontAwesomeIcon icon = {faGithubSquare} color = "#000000"/>
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar