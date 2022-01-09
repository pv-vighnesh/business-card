import React from "react";
import profileImage from "../images/profile-image.jpg";

export default function Info() {
    return (
        <div className="info--card_container">
            <img src={profileImage} alt="Profile picture" className="info--card_image"/>
            <div className="info--card_details">
                <h2>P V Vighnesh</h2>
                <h3>Frontend Developer</h3>
                <p>pv-vighnesh.dev</p>
                <div className="info--card_buttons">
                    <button className="info--card-btn_email">Email</button>
                    <button className="info--card-btn_lkdin">LinkedIn</button>
                </div>
            </div>
        </div>
    )
}