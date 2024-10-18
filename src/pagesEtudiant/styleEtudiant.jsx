import React from "react";

const Style = () => {
    return (
        <style>
            {`
                @import url('https://fonts.googleapis.com/css2?family=Milonga&display=swap');
                .navbar {
                    background-color: #000;
                    padding: 10px;
                    font-family: 'Milonga', sans-serif;
                }
                .navLink {
                    color: white;
                    font-size: 18px;
                    margin-right: 20px;
                }
                .navLink:hover {
                    color: #ccc; 
                }
                .dropdownToggle {
                    background-color: #fff;
                    height: 25px;
                    font-size: 15px;
                }
            `}
        </style>
    );
};

export default Style;
