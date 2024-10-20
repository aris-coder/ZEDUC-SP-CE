import logo from './image/logo1.png'
import React from "react";
import MaleUser from "./image/MaleUser.png"
import panier from './image/Full Shopping Basket.png'
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
    const stylePage = {
        background: 'linear-gradient(to bottom, #111010 , #685F4C)',
    }
    return (
        <div style={stylePage}>
            <nav className="navbar navbar-expand-lg navbar-light border-bottom border-white" style={{ background: "linear-gradient(to bottom,#000000)" }}>
                <div className="container-fluid">
                    <a className="Navbar-brand">
                        <img src={logo} alt="logo zeduc space" width="164.83px" height="150px" />
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#" style={{ fontFamily: 'Be Vietnam Pro', fontSize: '20' }}>Commandes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#" style={{ fontFamily: 'Be Vietnam Pro', fontSize: '20' }}>Reclamations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#" style={{ fontFamily: 'Be Vietnam Pro', fontSize: '20' }}>jeux & Evenements</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#" style={{ fontFamily: 'Be Vietnam Pro', fontSize: '20' }}>Meilleurs clients</a>
                        </li>
                        <li>
                            <button className='btn rounded-circle'><img src={panier} style={{ width: "40px", height: "40px" }} /></button>
                            <button className='btn rounded-circle'><img src={MaleUser} style={{ width: "50px", height: "40px" }} /></button>
                        </li>
                    </ul>
                </div>
            </nav> </div>

    )
}
export default Navbar;
