import React from 'react';
import logo from '../images/logo.png';
import kok from '../images/kok.png';
import dg from '../images/dg.png';

const Sidebar = () => {
    return (
        <div className="col-md-4 responsive-div bg-black d-flex flex-column justify-content-between align-items-center py-4" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <div className="circle-img kok">
                <img src={kok} alt="cercle haut" className="rounded-circle" style={{ position: 'absolute', top: '-50px', left: '270px', width: '180px', height: '180px' }} />
            </div>
            <div>
                <img src={logo} alt="logo" className="img-fluid mb-4" style={{ width: '200px' }} />
            </div>
            <div className="circle-img dg">
                <img src={dg} alt="cercle bas" className="rounded-circle" style={{ position: 'absolute', top: '470px', left: '-20px', width: '180px', height: '180px' }} />
            </div>
        </div>
    );
};

export default Sidebar;
