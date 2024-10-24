import React from "react";

const StyleG = () => {
    return (
        <style> 
                {`
                    @import url(https://fonts.googleapis.com/css2?family=Milonga&display=swap);
                    *{
                        margin: 0px;
                        padding: 0px;
                        border: 0px;
                    }

                    body{
                        min-height: 100vh;
                        background-image: linear-gradient(to bottom ,#000000 -20%, #685F4C, #CFBD97);
                    }

                    .custom-image {
                        height: 40px;
                        margin-left: 10px;
                        margin-top:10px;
                    }

                    @media (min-width: 768px) {
                        .custom-image {
                            height: 70px;
                            margin-left: 25px;
                        }
                    }

                    .Img-menu {
                        display:block;
                        height: 50px;
                        margin-left:70px;
                        margin-top:25px;
                    }

                    @media (min-width: 768px) {
                        .Img-menu {
                            display:none;
                        }
                    }

                    .Img-button {
                        padding: 0;
                        cursor: pointer;
                        border: none;
                        background-color: transparent;
                    }

                    @media (min-width: 768px) {
                        .Img-button {
                            display:none;
                        }
                    }

                    .custom-header {
                        position:absolute;
                        margin-top:-25px;
                        margin-left: 0px;
                    }

                    @media (min-width: 768px) {
                        .custom-header {
                            position:absolute;
                            margin-top:-20px;
                            margin-left:0px
                        }
                    }

                    .Message{
                        display:block;
                        width: 200px;
                        height: 45px;
                        borderRadius: 10px;
                        color:white;
                        border:none;
                        fontFamily: Be Vietnam Pro, sans-serif;
                        margin-left: 10px;
                        padding-top:25px;
                    }
                    @media (min-width: 768px) {
                        .Message {
                            display: none;
                            width: 150px;
                            height: 45px;
                            borderRadius: 10px;
                            color:white;
                            border:none;
                            fontFamily: Be Vietnam Pro, sans-serif;
                        }
                    }

                    .A{
                        display:none;
                        width: 100px;
                        height: 45px;
                        borderRadius: 10px;
                        color:white;
                        border:none;
                        fontFamily: Be Vietnam Pro, sans-serif;
                        margin-left: -5px;
                    }
                    @media (min-width: 768px) {
                        .A {
                            display:block;
                            width: 150px;
                            height: 45px;
                            borderRadius: 10px;
                            color:white;
                            border:none;
                            fontFamily: Be Vietnam Pro, sans-serif;
                        }
                    }
                    
                    .C{
                        display:none;
                        width: 120px;
                        height: 45px;
                        borderRadius: 10px;
                        color:white;
                        border:none;
                        fontFamily: Be Vietnam Pro, sans-serif;
                        margin-left: -5px;
                    }
                    @media (min-width: 768px) {
                        .C {
                            display:block;
                            width: 150px;
                            height: 45px;
                            borderRadius: 10px;
                            color:white;
                            border:none;
                            fontFamily: Be Vietnam Pro, sans-serif;
                        }
                    }

                    .M{
                        display:none;
                        width: 100px;
                        height: 45px;
                        borderRadius: 10px;
                        color:white;
                        border:none;
                        fontFamily: Be Vietnam Pro, sans-serif;
                        margin-left: -5px;
                    }
                    @media (min-width: 768px) {
                        .M {
                            display:block;
                            width: 200px;
                            height: 45px;
                            borderRadius: 10px;
                            color:white;
                            border:none;
                            fontFamily: Be Vietnam Pro, sans-serif;
                        }
                    }

                    .R{
                        display:none;
                        width: 100px;
                        height: 45px;
                        borderRadius: 10px;
                        color:white;
                        border:none;
                        fontFamily: Be Vietnam Pro, sans-serif;
                        margin-left:-15px
                    }
                    @media (min-width: 768px) {
                        .R {
                            display:block;
                            width: 150px;
                            height: 45px;
                            borderRadius: 10px;
                            color:white;
                            border:none;
                            fontFamily: Be Vietnam Pro, sans-serif;
                        }
                    }
                    .S{
                        display:none;
                        width: 100px;
                        height: 45px;
                        borderRadius: 10px;
                        color:white;
                        border:none;
                        fontFamily: Be Vietnam Pro, sans-serif;
                        margin-left:-27px
                    }
                    @media (min-width: 768px) {
                        .S {
                            display:block;
                            width: 150px;
                            height: 45px;
                            borderRadius: 10px;
                            color:white;
                            border:none;
                            fontFamily: Be Vietnam Pro, sans-serif;
                        }
                    }

                    .Ligne{
                        border-top: 1px solid white; 
                        margin: 10px 0;
                        width: 99%;
                        top: 125px; 
                        left:5px ; 
                        position: absolute;
                    }

                    .menu-floating {
                        position: absolute; 
                        top: 110px; 
                        left: 365px; 
                        width: 205px; 
                        background-color: #343a40;
                        border-radius: 10px;
                        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
                        z-index: 1000; 
                    }
                    .LienMenu{
                        width: 205px;
                    }

                    .MessageAcceuilGérant{
                        position: absolute;
                        align-self: center;
                        top: 160px;
                        left: 270px;
                        font-family: Milonga, serif;
                        color: white;
                        font-size: 30px;
                    }
                    @media (min-width: 768px) {
                        .MessageAcceuilGérant{
                            position: absolute;
                            align-self: center;
                            top: 150px;
                            left: 450px;
                            font-family: "Milonga", serif;
                            color: white;
                            font-size: 55px;
                        }
                    }

                    .PLATI{
                        display:none;
                    }
                    @media (min-width: 768px) {
                        .PLATI{
                        display:block;
                        height:210px;
                        position:absolute;
                        top:116px;
                        left:1165px;
                        }
                    }

                    .PLATII{
                        height:260px;
                        position:absolute;
                        top:130px;
                        left:1px;
                    }
                    @media (min-width: 768px) {
                        .PLATII{
                        height:255px;
                        position:absolute;
                        top:200px;
                        left:1px;
                        }
                    }

                    .menujour{
                        position:absolute;
                        background-image:linear-gradient(to bottom, #CFBD97 0%, #69604D 100%);
                        border-radius:10px;
                        left: 90px;
                        height: 245px;
                        top: 420px;
                        width: 950px;
                    }
                    @media (min-width: 768px) {
                        .menujour{
                        position:absolute;
                        background-image:linear-gradient(to bottom, #CFBD97 0%, #69604D 100%);
                        border-radius:10px;
                        left: 240px;
                        height: 245px;
                        top: 450px;
                        width: 950px;
                        }
                    }


                    .ligne{
                        position:relative;
                        left: 20px;
                        top: -10px;
                        width:95%;
                    }

                    .Tableau{
                        margin-left:0px;
                    }
                    @media (min-width: 768px) {
                        .Tableau{
                            margin-left:255px;
                        }
                    }

                    .TexteAcceuil_gerant{
                        margin-left:5px;
                        padding-top:280px;
                        font-size:22px;
                        color:white;
                        font-family: Milonga, serif;
                    }
                    .BouttonAcceuil_gerant{
                        border-radius:15px;
                        width:100px;
                        background-color:#212F23;
                        color:white;
                        margin-left:300px;
                    }
                        
                    @media (min-width: 768px) {
                        .TexteAcceuil_gerant{
                            margin-left:250px;
                            padding-top:350px;
                            font-size:22px;
                            color:white;
                            font-family: Milonga, serif;
                        }
                        .BouttonAcceuil_gerant{
                        border-radius:15px;
                        width:100px;
                        background-color:#212F23;
                        color:white;
                        margin-left:600px;
                        }
                    }


                `}
        </style>
    );
};

export default StyleG;