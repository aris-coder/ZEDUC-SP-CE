import React from "react";
import poulet from '../image/Ellipse 12.png';
import dg from '../image/Ellipse 11.png';
import dge from '../image/dge.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import corbeille from '../image/Trash Can.png'
import moins from '../image/moins.jpeg'
import plus from '../image/Plus Math.png'



function Panier() {
    const pageStyle = {
        background: 'linear-gradient(to top, #CFBD97, #69604D)',
    };
    return (
        <div style={pageStyle} className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col d-flex justify-content-center align-items-center"><label style={{ color: "white", fontFamily: 'milonga', fontSize: '20px' }}>Mon panier</label></div>
                <div className="col d-flex"></div>
                <div className="col d-flex"></div>
            </div>

            <div className="" style={{ backgroundColor: 'white', padding: '15px', margin: '0 auto', maxWidth: '900px' }}>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="row" style={{ backgroundColor: '#B0A285', padding: '10px', maxWidth: '900px', marginBottom: '10px' }}>
                        <div className="col">
                            <img src={dge} alt='image poulet' style={{ width: '100px', height: '70px' }} />
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <div className="row">
                                <label style={{ color: 'white', fontFamily: 'milonga' }}>Poulet DG</label>
                                <label style={{ color: 'white', fontFamily: 'milonga' }}>Indisponible</label>
                                <label style={{ color: 'white', fontFamily: 'milonga' }}>1500 fcfa</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col d-flex justify-content-center align-items-center" style={{ marginBottom: '10px' }}>
                                <button className='d-flex justify-content-center align-items-center' style={{ width: '45px', height: '25px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', color: '#C3B391', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}><img src={moins} alt="image soustraction" style={{ width: '20px', height: '12px' }} /></button>
                                <button style={{ width: '45px', height: '25px', backgroundColor: '#CFBD97', borderColor: '#CFBD97', color: 'white' }}>1</button>
                                <button className='d-flex justify-content-center align-items-center' style={{ width: '45px', height: '25px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}><img src={plus} style={{ width: '20px', height: '12px' }} /></button>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <button className='d-flex justify-content-center align-items-center' style={{ width: '35px', height: '25px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}><img src={corbeille} style={{ width: '20px', height: '12px' }} /></button>
                                <button className='d-flex justify-content-center align-items-center' style={{ width: '100px', height: '25px', color: 'white', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}>Commander</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center align-items-center">
                    <div className="row" style={{ backgroundColor: '#B0A285', padding: '10px', maxWidth: '900px', marginBottom: '10px' }}>
                        <div className="col">
                            <img src={dge} alt='image poulet' style={{ width: '100px', height: '70px' }} />
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <div className="row">
                                <label style={{ color: 'white', fontFamily: 'milonga' }}>Poulet DG</label>
                                <label style={{ color: 'white', fontFamily: 'milonga' }}>Indisponible</label>
                                <label style={{ color: 'white', fontFamily: 'milonga' }}>1500 fcfa</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col d-flex justify-content-center align-items-center" style={{ marginBottom: '10px' }}>
                                <button className='d-flex justify-content-center align-items-center' style={{ width: '45px', height: '25px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', color: '#C3B391', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}><img src={moins} alt="image soustraction" style={{ width: '20px', height: '12px' }} /></button>
                                <button style={{ width: '45px', height: '25px', backgroundColor: '#CFBD97', borderColor: '#CFBD97', color: 'white' }}>1</button>
                                <button className='d-flex justify-content-center align-items-center' style={{ width: '45px', height: '25px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}><img src={plus} style={{ width: '20px', height: '12px' }} /></button>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <button className='d-flex justify-content-center align-items-center' style={{ width: '35px', height: '25px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}><img src={corbeille} style={{ width: '20px', height: '12px' }} /></button>
                                <button className='d-flex justify-content-center align-items-center' style={{ width: '100px', height: '25px', color: 'white', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}>Commander</button>
                            </div>
                        </div>
                    </div>
                </div>   <div className="row d-flex justify-content-center align-items-center">
                    <div className="row" style={{ backgroundColor: '#B0A285', padding: '10px', maxWidth: '900px', marginBottom: '10px' }}>
                        <div className="col">
                            <img src={dge} alt='image poulet' style={{ width: '100px', height: '70px' }} />
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <div className="row">
                                <label style={{ color: 'white', fontFamily: 'milonga' }}>Poulet DG</label>
                                <label style={{ color: 'white', fontFamily: 'milonga' }}>Indisponible</label>
                                <label style={{ color: 'white', fontFamily: 'milonga' }}>1500 fcfa</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col d-flex justify-content-center align-items-center" style={{ marginBottom: '10px' }}>
                                <button className='d-flex justify-content-center align-items-center' style={{ width: '45px', height: '25px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', color: '#C3B391', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}><img src={moins} alt="image soustraction" style={{ width: '20px', height: '12px' }} /></button>
                                <button style={{ width: '45px', height: '25px', backgroundColor: '#CFBD97', borderColor: '#CFBD97', color: 'white' }}>1</button>
                                <button className='d-flex justify-content-center align-items-center' style={{ width: '45px', height: '25px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}><img src={plus} style={{ width: '20px', height: '12px' }} /></button>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <button className='d-flex justify-content-center align-items-center' style={{ width: '35px', height: '25px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}><img src={corbeille} style={{ width: '20px', height: '12px' }} /></button>
                                <button className='d-flex justify-content-center align-items-center' style={{ width: '100px', height: '25px', color: 'white', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}>Commander</button>
                            </div>
                        </div>
                    </div>
                </div>   <div className="row d-flex justify-content-center align-items-center">
                    <div className="row" style={{ backgroundColor: '#B0A285', padding: '10px', maxWidth: '900px', marginBottom: '10px' }}>
                        <div className="col">
                            <img src={dge} alt='image poulet' style={{ width: '100px', height: '70px' }} />
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <div className="row">
                                <label style={{ color: 'white', fontFamily: 'milonga' }}>Poulet DG</label>
                                <label style={{ color: 'white', fontFamily: 'milonga' }}>Indisponible</label>
                                <label style={{ color: 'white', fontFamily: 'milonga' }}>1500 fcfa</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col d-flex justify-content-center align-items-center" style={{ marginBottom: '10px' }}>
                                <button className='d-flex justify-content-center align-items-center' style={{ width: '45px', height: '25px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', color: '#C3B391', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}><img src={moins} alt="image soustraction" style={{ width: '20px', height: '12px' }} /></button>
                                <button style={{ width: '45px', height: '25px', backgroundColor: '#CFBD97', borderColor: '#CFBD97', color: 'white' }}>1</button>
                                <button className='d-flex justify-content-center align-items-center' style={{ width: '45px', height: '25px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}><img src={plus} style={{ width: '20px', height: '12px' }} /></button>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <button className='d-flex justify-content-center align-items-center' style={{ width: '35px', height: '25px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}><img src={corbeille} style={{ width: '20px', height: '12px' }} /></button>
                                <button className='d-flex justify-content-center align-items-center' style={{ width: '100px', height: '25px', color: 'white', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}>Commander</button>
                            </div>
                        </div>
                    </div>
                </div>





            </div>

            <div className="row d-flex justify-content-center align-items-center" style={{ marginTop: '15px' }}>
                <div className="col d-flex justify-content-center align-items-center">
                    <label style={{ marginRight: '10px', color: 'white', fontFamily: 'milonga' }}>4500 fcfa</label>
                    <button style={{ width: '100px', borderRadius: '15px', backgroundColor: '#69604C', borderColor: '#69604C', fontFamily: 'milonga' }}>Payer(3)</button>
                </div>
            </div>


            <div className="ligne" >
                <div className="row justify-content-center">
                    <div className="text-content-start border-bottom " style={{ width: '900px', marginBottom: '45px', borderBottomColor: '#cfbd97', fontFamily: 'milonga' }}>
                        <label className="text-white">Historique des commandes</label>
                    </div>
                </div>

                {["#CFBD97", "#988C73", "#CFBD97", "#988C73", "#CFBD97", "#988C73", "#CFBD97", "#988C73"].map((color, index) => (
                    <div key={index} className="d-flex justify-content-center align-items-center" style={{ background: color, maxWidth: '900px', padding: '10px', margin: '0 auto' }}>
                        <div className="row" style={{ width: '500px' }}>
                            <div className="col text-center">
                                <label>XX</label>
                            </div>
                            <div className="col text-center">
                                <label>XXX</label>
                            </div>
                            <div className="col text-center">
                                XXX
                            </div>
                            <div className="col text-center">
                                <label>XXX</label>
                            </div>
                            <div className="col text-center">
                                XXX
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div >
    );
}


export default Panier;