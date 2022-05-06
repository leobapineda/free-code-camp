import React from "react"
import twitter from '../images/logo-twitter.svg'
// stylesheet
import '../stylesheet/Footer.css'
export default function Footer() {
    return(
        <div className="footer-container">
            <img src={twitter} alt="twitter logo" />
        </div>
    )
}