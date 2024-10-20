import React from "react";
import poulet from './image/Ellipse 12.png';
import dg from './image/Ellipse 11.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const pageStyle = {
        background: 'linear-gradient(to top, #69604D, #69604D)',
        minHeight: '60vh',
        width: '100%',
    };

    return (
        <header>
            <div style={pageStyle}>
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-4 col-12 text-center text-md-left">
                    </div>
                    <div className="col-md-4 col-12 text-center">
                        <label className="text-white" style={{ fontFamily: "milonga", fontSize: "70px", width: '500px', height: '13px' }}>ZeDuc Sp@ce</label>
                    </div>
                    <div className="col-md-4 col-12 d-flex justify-content-md-end justify-content-center">
                        <button className="btn rounded-circle">
                            <img src={poulet} className="rounded-circle" alt="poulet" style={{ width: "172px", height: "164px" }} />
                        </button>
                    </div>
                </div>

                <div className="row d-flex justify-content-between align-items-center my-3">
                    <div className="col-md-4 col-12 d-flex justify-content-md-start justify-content-center">
                        <button className="btn rounded-circle">
                            <img src={dg} className="rounded-circle" alt="dg" style={{ width: "172px", height: "164px" }} />
                        </button>
                    </div>
                    <div className="col-md-4 col-12 text-center">
                        <label className="text-white" style={{ fontSize: "24px", fontFamily: "milonga" }}>Votre espace goût et détente</label>
                        <p className="text-white mt-3" style={{ fontFamily: "milonga" }}>
                            Savourez chaque moment, plongez dans des délices uniques avec une vue imprenable sur la Dibamba et une ambiance à savourer.
                        </p>
                    </div>
                    <div className="col-md-4 col-12 text-center">
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
