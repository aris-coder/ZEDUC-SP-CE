import React from "react";
import logo from './image/logo.png';
import what from './image/WhatsApp.png';

function Footer() {
    const stylePage = {
        background: 'linear-gradient(to bottom,#BAAA88,#69604D)',

    }
    return (
        <footer style={stylePage} className="footer" >
            <div className="container-fluid">
                <div className="row align-items-center">

                    <div className="col-12 col-md-4 text-center text-md-left mb-3 mb-md-0">
                        <img src={logo} alt="Logo" style={{ width: "90px", height: "80px" }} />
                    </div>

                    <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li><a href="#" style={{ color: "#fff" }}>Aide</a></li>
                            <li><a href="#" style={{ color: "#fff" }}>A propos</a></li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-4 text-center text-md-right">
                        <button className="btn rounded-circle" style={{ marginLeft: "10px" }}>
                            <img src={what} alt="WhatsApp" style={{ width: "70px", height: "60px" }} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
