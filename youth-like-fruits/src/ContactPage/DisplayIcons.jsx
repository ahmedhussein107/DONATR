import React from "react";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import './DisplayIcons.css'

function DisplayIcons(){
    return(
        <div>
            <a href="https://www.facebook.com/57357Hospital" className="facebook"><FaFacebook className="icon" /></a>
            <a href="https://www.youtube.com/user/57357hospital" className="youtube"><FaYoutube className="icon" /></a>
            <a href="https://twitter.com/57357Hospital" className="twitter"><FaTwitter className="icon" /></a>
            <a href="https://www.instagram.com/57357hospital" className="instagram"><FaInstagram className="icon" /></a>
            <a href="https://www.linkedin.com/company/57357hospital" className="linkedin"><FaLinkedin className="icon" /></a>
        </div>
    )
}
export default DisplayIcons;
