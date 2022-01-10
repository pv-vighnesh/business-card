import React from "react";
import FacebookIcon from "../icons/Facebook Icon.png";
import GitHubIcon from "../icons/GitHub Icon.png";
import InstagramIcon from "../icons/Instagram Icon.png";
import TwitterIcon from "../icons/Twitter Icon.png";

export default function Links() {
    return (
        <div className="links--container">
            <a href="https://twitter.com/VighneshPV"><img src={TwitterIcon} alt="" /></a>
            <a href=""><img src={FacebookIcon} alt="" /></a>
            <a href="https://www.instagram.com/pvvighnesh/"><img src={InstagramIcon} alt="" /></a>
            <a href="https://github.com/pv-vighnesh"><img src={GitHubIcon} alt="" /></a>
        </div>
    )
}