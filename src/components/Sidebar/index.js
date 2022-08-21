import "./index.scss"
import { Link, NavLink } from "react-router-dom"
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHome, faS, faUser } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faCode } from "@fortawesome/free-solid-svg-icons" 

const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className = 'logo' to = '/'>
            <FontAwesomeIcon icon = {faS} color = "#4d4d4e" className = "logo"/>
        </Link>
        <nav>
            <NavLink
             exact = "true" 
             activeclassname = "active" 
             to = "/"
            >
                <FontAwesomeIcon icon = {faHome} color = "#4d4d4e"/>
            </NavLink>

            <NavLink
             exact = "true" 
             activeclassname = "active"  
             className = "about-link" 
             to = "/about"
            >
                <FontAwesomeIcon icon = {faUser} color = "#4d4d4e"/>
            </NavLink>

            <NavLink
             exact = "true" 
             activeclassname = "active" 
             className = "contact-link" 
             to = "/contact"
            >
                <FontAwesomeIcon icon = {faEnvelope} color = "#4d4d4e"/>
            </NavLink>

            <NavLink 
                exact = "true"
                activeclassname = "active"
                className = "projects-link"
                to = "/projects"
            >
                <FontAwesomeIcon icon = {faCode} color = "#4d4d4e"/>
            </NavLink>

        </nav>
        <ul>
            <li>
                <a
                    target = "_blank"
                    rel = "noreferrer"
                    href = "https://www.linkedin.com/in/siddharth-balaji-8682b4210/"

                >
                    <FontAwesomeIcon icon = {faLinkedin} color = '#4d4d4e'/>
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar