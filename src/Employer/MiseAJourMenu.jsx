import React from "react";
import Header from "./HeaderEmployer";
import FooterComponent from "../acceuil/footerComponent";
import Style from "../Styles/StyleEmployer";
import PlatI from '../images/PlatI.png';
import PlatII from '../images/PlatII.png';
import menu from '../images/Menutest.png';



const CardMenu = ({ title, price, description, imageUrl, isOutOfStock }) => {
    return (
        <div className="col-4 col-lg-4 mb-4">
            <div className="card h-100" style={{ borderRadius: '20px', backgroundColor: '#c5b083' }}>
                <img src={imageUrl} className="card-img-top" alt={title}
                    style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', margin: '5px auto', width: '100%', height: 'auto', maxWidth: '300px' }}
                />
                <div className="card-body text-center">
                    <h5 className="card-title" style={{ fontSize: '1.1rem' }}>{title} <span>{price}fcfa</span></h5>
                    <p className="card-text" style={{ fontSize: '0.9rem' }}><strong>Accompagnement:</strong> {description}</p>
                    {isOutOfStock && (
                        <button className="btn w-100" enabled
                            style={{ backgroundColor: '#da0008', color: 'white', fontFamily: 'Milonga, serif' }}>
                            ÉPUISÉ
                        </button>
                    )}
                </div>
            </div>
        </div>

    );
};

const MiseJourM = () => {
    const menuItems = [
        {
            title: 'Okok salé',
            price: '1000',
            description: 'baton de manioc / tubercule de manioc',
            imageUrl: menu,
            isOutOfStock: true
        },
        {
            title: 'Poulet pané',
            price: '1500',
            description: 'frites de pommes / tubercule de manioc',
            imageUrl: menu,
            isOutOfStock: false
        },
        {
            title: 'Poulet pané',
            price: '1500',
            description: 'frites de pommes / tubercule de manioc',
            imageUrl: menu,
            isOutOfStock: true
        },
        {
            title: 'Poulet pané',
            price: '1500',
            description: 'frites de pommes / tubercule de manioc',
            imageUrl: menu,
            isOutOfStock: true
        },
        {
            title: 'Poulet pané',
            price: '1500',
            description: 'frites de pommes / tubercule de manioc',
            imageUrl: menu,
            isOutOfStock: false
        },
    ]

    return (
        <div style={{ minHeight: '242vh' }}>
            <Style />
            <header>
                <Header />
            </header>
            <main>
                <img src={PlatI} class="img-fluid" className='PLATI' />
                <img src={PlatII} class="img-fluid" className='PLATII' />
                <div className="bienvenue_message_employé">
                    ZEDUC SP@CE <br /><p style={{ marginLeft: '-20px' }}>Mise à jour des plats</p>
                </div>
                <p className="fw-bold" style={{ paddingLeft: '25px', paddingTop: '480px', fontSize: '20px', fontFamily: 'Milonga, serif', color: 'white' }}>Mettre à jour le menu </p>
                <p className="fw-bold" style={{ paddingLeft: '25px', paddingTop: '5px', fontSize: '15px', fontFamily: 'Milonga, serif', color: 'black' }}>Cliquer sur le boutton épuisé pour mettre à jour le menu. les plats qui ne sont plus <br /> disponible disparaîtrons du menu.  </p>

                <div className="container-fluid" style={{ position: 'absolute', top: '620px' }}>
                    <div className="row">
                        {menuItems.map((item, index) => (
                            <CardMenu
                                key={index}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                imageUrl={item.imageUrl}
                                isOutOfStock={item.isOutOfStock}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <footer style={{ position: 'relative', top: '1050px' }}>
                <FooterComponent />
            </footer>
        </div>
    );
}
export default MiseJourM;