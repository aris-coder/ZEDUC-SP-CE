import React from "react";

const Style = () => {
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
                        min-height: 268vh;
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
                            width: 210px;
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
                            width: 170px;
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

                    .customFoot{
                        position:absolute;
                        background-image: linear-gradient(to bottom, #BAAA88 40.5%, #69604D 100%);
                        width: 664px;
                        height: 200px;
                        top:942px;
                        border-top: 1px solid #CFBD97;
                    }
                    @media (min-width: 768px) {
                        .customFoot{
                            background-image: linear-gradient(to bottom, #BAAA88 40.5%, #69604D 100%);
                            width: 1349px;
                            height: 200px;
                        }
                    }

                    .aide{
                        position: relative;
                        top: 10px;
                        left: 70px;
                        display: flex;
                        flex-direction:column;
                        gap: 10px;
                        font-family: Milonga, serif;
                        font-size: 13px;
                        text-align: center;
                        color: black;
                    }
                    @media (min-width: 768px) {
                        .aide{
                            position: relative;
                            top: 10px;
                            left: 360px;
                            display: flex;
                            flex-direction:column;
                            gap: 20px;
                            font-family: Milonga, serif;
                            font-size: 16px;
                            text-align: center;
                            color: black;
                        }
                    }
                    .eventI{
                        position: relative;
                        top: 10px;
                        left: 130px;
                        display: flex;
                        flex-direction:column;
                        gap: 10px;
                        font-family: Milonga, serif;
                        font-size: 13px;
                        text-align: center;  
                        color: black; 
                    }
                    @media (min-width: 768px) {
                        .eventI{
                            position: relative;
                            top: 10px;
                            left: 550px;
                            display: flex;
                            flex-direction:column;
                            gap: 20px;
                            font-family: Milonga, serif;
                            font-size: 16px;
                            text-align: center;   
                            color: black;
                        }
                    }

                    .eventII{
                        position: relative;
                        top: 10px;
                        left: 195px;
                        display: flex;
                        flex-direction:column;
                        gap: 12px;
                        font-family: Milonga, serif;
                        font-size: 13px;
                        text-align: center; 
                    }
                    @media (min-width: 768px) {
                        .eventII{
                            position: relative;
                            top: 10px;
                            left: 750px;
                            display: flex;
                            flex-direction:column;
                            gap: 20px;
                            font-family: Milonga, serif;
                            font-size: 16px;
                            text-align: center; 
                            color: black;
                        }
                    }

                    .Whatsapp{
                        height:40px;
                        position: relative;
                        margin-top: 5px;
                        left: 220px;
                    }
                    @media (min-width: 768px) {
                        .Whatsapp{
                            height:60px;
                            position: relative;
                            margin-top: 5px;
                            left: 850px;
                        }
                    }

                    .LogoFoot{
                        height:90px;
                    }
                    @media (min-width: 768px) {
                        .LogoFoot{
                            height:150px;
                            position: absolute;
                            left:50px;
                            top:25px;
                        }
                    }
                    
                    .bienvenue_message_employé{
                        position: absolute;
                        align-self: center;
                        top: 160px;
                        left: 370px;
                        font-family: "Milonga", serif;
                        color: white;
                        font-size: 30px;
                    }
                    @media (min-width: 768px) {
                        .bienvenue_message_employé{
                            position: absolute;
                            align-self: center;
                            top: 200px;
                            left: 450px;
                            font-family: "Milonga", serif;
                            color: white;
                            font-size: 60px;
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


                    .commande_attente{
                        position: absolute;
                        top: 690px;
                        left: 5px;
                        display: grid;
                        height: 40px;
                        width: 650px;
                        background-color: rgba(0, 0, 0, 0.5);
                        color:black;
                        text-align: center;
                        font-size: 25px;
                        font-family: "Milonga", serif;
                        border-radius: 5px;
                    }
                    .voir_plus_employé{
                        position: relative;
                        top:-30px;
                        left: 565px;
                        border-radius: 5px;
                        height: 20px;
                        width: 80px;
                        font-size: 15px;
                        font-family: Microsoft Tai Le, serif;
                        text-align: center;
                    }
                    .commande_attente_info{
                        position: absolute;
                        display: grid;
                        height: 100vh;
                        background-image: linear-gradient(to top, #D9D9D9, #CFBD97);
                        height: 200px;
                        width: 650px;
                        top: 725px;
                        left: 5px;
                        border-radius: 10px;
                    }
                    @media (min-width: 768px) {
                            .commande_attente{
                            position: absolute;
                            top: 730px;
                            left: 240px;
                            display: grid;
                            height: 40px;
                            width: 950px;
                            background-color: rgba(0, 0, 0, 0.5);
                            color:black;
                            text-align: center;
                            font-size: 30px;
                            font-family: "Milonga", serif;
                            border-radius: 5px;
                        }
                        .voir_plus_employé{
                            position: relative;
                            top:-35px;
                            left: 840px;
                            border-radius: 5px;
                            height: 20px;
                            width: 80px;
                            font-size: 15px;
                            font-family: Microsoft Tai Le, serif;
                            text-align: center;
                        }
                        .commande_attente_info{
                            position: absolute;
                            display: grid;
                            height: 100vh;
                            background-image: linear-gradient(to top, #D9D9D9, #CFBD97);
                            height: 245px;
                            width: 950px;
                            top: 765px;
                            left: 240px;
                            border-radius: 10px;
                        }
                    }

                    .réclamation_en_attente{
                        position: absolute;
                        top: 960px;
                        left: 5px;
                        display: grid;
                        height: 40px;
                        width: 650px;
                        background-color: rgba(0, 0, 0, 0.5);
                        color:black;
                        text-align: center;
                        font-size: 25px;
                        font-family: "Milonga", serif;
                        border-radius: 5px;
                    }
                    .voir_plusréclamation_employé{
                        position: relative;
                        top:-30px;
                        left: 565px;
                        border-radius: 5px;
                        height: 20px;
                        width: 80px;
                        font-size: 15px;
                        font-family: Microsoft Tai Le, serif;
                        text-align: center;
                    }
                    .réclamations_info{
                        position: absolute;
                        display: grid;
                        height: 100vh;
                        background-image: linear-gradient(to top, #D9D9D9, #CFBD97);
                        height: 200px;
                        width: 650px;
                        top: 995px;
                        left: 5px;
                        border-radius: 10px;
                    }
                    @media (min-width: 768px) {
                        .réclamation_en_attente{
                            position: absolute;
                            top: 1050px;
                            left: 240px;
                            display: grid;
                            height: 40px;
                            width: 950px;
                            background-color: rgba(0, 0, 0, 0.5);
                            color:black;
                            text-align: center;
                            font-size: 30px;
                            font-family: "Milonga", serif;
                            border-radius: 5px;
                        }
                        .voir_plusréclamation_employé{
                            position: relative;
                            top:-35px;
                            left: 840px;
                            border-radius: 5px;
                            height: 20px;
                            width: 80px;
                            font-size: 15px;
                            font-family: Microsoft Tai Le, serif;
                            text-align: center;
                        }
                        .réclamations_info{
                            position: absolute;
                            display: grid;
                            height: 100vh;
                            background-image: linear-gradient(to top, #D9D9D9, #CFBD97);
                            height: 245px;
                            width: 950px;
                            top: 1085px;
                            left: 240px;
                            border-radius: 10px;
                        }
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

                    .total-ventes {
                        background-color: #CFBD97;
                        height: 50px;
                        width: 630px;
                        left: 15px;
                        border-radius: 5px;
                        position: absolute;
                        top: 610px;
                        display: flex; 
                        justify-content: center; 
                        align-items: center;
                    }

                    .date-range {
                        width: 650px;
                        height: 40px;
                        border-radius: 5px;
                        position: absolute;
                        top: 550px;
                        left: 10px;
                    }

                    .white-box {
                        background-color: #FFFFFF;
                        height: 600px;
                        border-radius: 5px;
                        position: absolute;
                        top: 680px;
                        width: 630px;
                        left: 15px;
                    }


                    @media (min-width: 768px) {
                    .Semaine_trierpar{
                        background-color:#CFBD97;
                        width:140px;
                        height:40px;
                        border-radius:5px; 
                        position:absolute; 
                        top:550px; 
                        left:100px;
                    }
                    .total-ventes {
                        background-color: #CFBD97;
                        width: 1040px;
                        height: 50px;
                        border-radius: 5px;
                        position: absolute;
                        top: 620px;
                        left: 100px;
                    }

                    .date-range {
                        width: 670px;
                        height: 40px;
                        border-radius: 5px;
                        position: absolute;
                        top: 520px;
                        left: 95px;
                    }

                    .white-box {
                        background-color: #FFFFFF;
                        width: 1040px;
                        height: 600px;
                        border-radius: 5px;
                        position: absolute;
                        top: 710px;
                        left: 100px;
                    }}

                    .Tableau{
                        borderCollapse: collapse;
                        width:635px;
                        position:absolute; 
                        top:525px; 
                        left:15px;
                    }
                    @media (min-width: 768px) {
                        .Tableau{
                        borderCollapse: collapse;
                        width:1300px;
                        position:absolute; 
                        top:530px; 
                        left:15px;
                        }
                    }

                    .menujour{
                        position:absolute;
                        background-image:linear-gradient(to bottom, #CFBD97 0%, #69604D 100%);
                        border-radius:10px;
                        left: 5px;
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
                `}
        </style>
    );
};

export default Style;