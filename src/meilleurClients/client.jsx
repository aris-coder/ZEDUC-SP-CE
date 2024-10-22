import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import poulet from '../image/Ellipse 12.png';
import dg from '../image/Ellipse 11.png';
import fle from "../image/Drag List Down.png";

function Clients() {

    const pageStyle = {
        background: 'linear-gradient(to top, #CFBD97, #69604D)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <div style={pageStyle}>
            <div className="ligne" style={{ background: 'linear-gradient(to top, #69604D, #CFBD97)', width: '100%', maxWidth: '800px', padding: '15px', margin: '0 auto', borderRadius: '15px' }}>
                <div className="row">
                    <div className="col text-center">
                        <label className="text-white">Top des 10 meilleurs clients</label>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <button style={{ backgroundColor: '#CFBD97', borderColor: '#CFBD97', margin: '15px' }}>
                            <img src={fle} style={{ width: "40px", height: "40px" }} alt="fle" />
                        </button>
                    </div>
                </div>


                {["#796C52", "#CFBD97", "#988C73", "#CFBD97", "#988C73", "#CFBD97", "#988C73", "#CFBD97", "#988C73"].map((color, index) => (
                    <div key={index} className="row text-center mb-2" style={{ background: color, width: '100%', maxWidth: '680px', margin: '0 auto', padding: '10px', borderRadius: '15px' }}>
                        <div className="col">
                            <label>XX</label>
                        </div>
                        <div className="col">
                            <label>XXX</label>
                        </div>
                        <div className="col">
                            XXX
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Clients;
