import React from "react";
import FacebookIcon from "../icons/Facebook Icon.png";
import GitHubIcon from "../icons/GitHub Icon.png";
import InstagramIcon from "../icons/Instagram Icon.png";
import TwitterIcon from "../icons/Twitter Icon.png";

export default function Links() {
    return (
        <>
            <a href=""><img src={TwitterIcon} alt="" /></a>
            <a href=""><img src={FacebookIcon} alt="" /></a>
            <a href=""><img src={InstagramIcon} alt="" /></a>
            <a href=""><img src={GitHubIcon} alt="" /></a>
        </>
    )
}