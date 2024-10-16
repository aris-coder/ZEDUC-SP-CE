import React from "react";

const Style = () => {
    return (
        <style> 
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Milonga&display=swap');

                    // .navbar-custom {
                    // background: linear-gradient(180deg, rgba(14,14,14,1) 0%, rgba(15,14,14,0) 100%);
                    // border-bottom: none;
                    // box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                    // }
                    .navbar-custom {
                        background: linear-gradient(180deg, rgba(14,14,14,1) 0%, rgba(15,14,14,0) 100%);
                        border-bottom: none;
                        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                        position: absolute;
                        width: 100%;
                        z-index: 10;
                    }

                    .navbar-brand {
                    font-weight: bold;
                    color: white;
                    }

                    .navbar .btn {
                    color: white;
                    border: 1px solid white;
                    }

                    .navbar .btn:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                    }

                    /* Style pour la navbar */


                    .navbar-logo {
                    height: 40px;
                    width: auto;
                    margin-right: 10px;
                    }

                    .brand-name {
                    color: white;
                    font-size: 1.5rem;
                    font-weight: bold;
                    }
                    

                    .homepage {
                        background: url('../images/imageacceuil.png') no-repeat center center fixed;
                        background-size: 100% auto; /* Empêche la déformation de l'image tout en s'adaptant */
                        height: 974px; /* Taille exacte souhaitée */
                        position: relative;
                    }

                    /* Style pour le header */
                    .header-custom {
                        color: white;
                        text-align: center;
                        padding: 150px 20px;
                        z-index: 5;
                        position: relative;
                    }

                    /* Style pour le contenu principal */
                    .main-content {
                    padding: 50px 20px;
                    background-color: #fff;
                    z-index: 1;
                    position: relative;
                    }

                    .atouts-list {
                    display: flex;
                    justify-content: space-around;
                    margin-top: 20px;
                    }

                    .atout-item {
                    background-color: #f8f9fa;
                    border: 1px solid #dee2e6;
                    border-radius: 5px;
                    padding: 20px;
                    text-align: center;
                    flex: 1;
                    margin: 0 10px;
                    }

                    /* Style pour le footer */
                    .footer-custom {
                    background-color: rgba(0, 0, 0, 0.8);
                    color: white;
                    text-align: center;
                    padding: 20px 0;
                    position: relative;
                    bottom: 0;
                    width: 100%;
                    }

                `}
            </style>
    );
};

export default Style;