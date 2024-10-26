import React from "react";

const Style = () => {
    return (
        <style> 
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Milonga&display=swap');
                    .form-label {
                        margin-bottom: 1px;
                    }
                    .form-control {
                        margin-top: 10px;
                    }
                    .password-eye {
                        cursor: pointer;
                        position: absolute;
                        right: 20px;
                        top: 40px;
                        z-index: 2;
                    }
                    .custom-link {
                        color: #c2a87f;
                    }
                    @media (max-width: 768px) {
                        .responsive-div {
                            height: 20vh !important
                            }
                        .responsive-div img {
                            width: 100px !important; 
                            height: 100px !important;
                        }
                        .circle-img.kok {
                            display: none;
                        }
                        .circle-img.dg {
                            display: none;
                        }
                    }
                    .custom-link {
                        color: #c2a87f;
                    }
                `}
            </style>
    );
};

export default Style;