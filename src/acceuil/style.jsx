import React from "react";

const Style = () => {
    return (
        <style> 
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Milonga&display=swap');

                    .navbar-custom {
                        background: linear-gradient(180deg, rgba(14,14,14,1) 0%, rgba(15,14,14,0) 100%);
                        border-bottom: none;
                        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                        position: absolute;
                        width: 100%;
                        z-index: 10;
                        height: 150px
                    }
                    .navbar {
                        display: flex;
                        align-items: center; 
                        height: 150px; 
                    }

                    .navbar .btn {
                        color: #CFBD97;  
                        border: 2px solid #CFBD97;  
                        border-radius: 50px; 
                        padding: 10px 25px;  
                        font-size: 1rem;     
                    }

                    .navbar .btn:hover {
                        background-color: rgba(255, 255, 255, 0.2);
                        color: white;
                    }

                    .navbar-logo {
                        height: 100px !important;
                        width: 150px !important;
                        margin-right: 5px;
                    }

                    .navbar-toggler-icon {
                        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
                    }

                    .brand-name {
                    color: #CFBD97;
                    font-size: 1.1rem;
                    }

                    .homepage {
                        background: url('../images/imageacceuil.png') no-repeat center center fixed;
                        background-size: 100% auto; /* Empêche la déformation de l'image tout en s'adaptant */
                        height: 974px; /* Taille exacte souhaitée */
                        position: relative;
                    }

                    .header-custom {
                        color: white;
                        text-align: center;
                        padding: 150px 20px;
                        z-index: 5;
                        position: relative;
                    }

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