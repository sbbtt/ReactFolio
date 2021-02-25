import React from 'react';
import './Footer.css';
import emoji from 'react-easy-emoji';

function Footer() {
    return (
        <footer>
            <div className="inner">

                <div className="footer-content">
                    <p>{emoji("\"Happy to work with you.\"")}</p>
                    <p style={{marginTop: "15px"}}>Max 💫</p>
                </div>

            </div>
        </footer>
    );
}
export default Footer;