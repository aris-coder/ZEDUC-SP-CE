import React from 'react';

const Style = () => {
  return (
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Milonga&display=swap');
        

        /*Navbar*/
        * {
          font-family: 'Milonga', sans-serif;
        }

        .navbar {
          background-color: #000;
          padding: 10px;
          border-bottom: 1px solid white;
        }

        .navLink {
          color: white;
          font-size: 18px;
          margin-right: 20px;
        }

        .navLink:hover {
          color: #EAC26E; 
        }

        .dropdownToggle {
          background-color: #fff;
          height: 25px;
          font-size: 15px;
        }


          /*header*/

        .header-container {
          display: flex;
          justify-content: center; 
          align-items: center;
          max-width: 9000px;
          margin: 0 auto;
          position: relative;
          padding: 20px; 
          overflow: hidden;
          color: white;
        }
         

        .header-image {
          width: 250px;
          height: 250px;
          border-radius: 50%;
        }

        .image1{
          left: -70px;
          bottom: -20px;
        }

        .image2{
          right: -70px;
          top: -50px;
        }

        .header-text {
          flex-grow: 0;
          padding: 0 170px; 
          z-index: 1;
        }

        .header-title {
          font-family: 'Milonga', sans-serif; 
          font-size: 3rem;
          margin-bottom: 25px;
        }

        .header-subtitle {
          font-family: 'Milonga', sans-serif; 
          font-size: 1.5rem;
          margin-bottom: 20px;
        }

        .header-description {
          font-family: 'Milonga', sans-serif; 
          font-size: 1.2rem;
        }

        @media screen and (max-width: 768px) {
          .header-image {
            width: 150px;
            height: 150px;
          }

          .header-title {
            font-size: 2rem;
          }

          .header-subtitle {
            font-size: 1.2rem;
          }

          .header-description {
            font-size: 0.9rem;
          }

          .header-text {
            padding: 0 30px; 
        }

        @media screen and (max-width: 480px) {
          .header-image {
            width: 100px;
            height: 100px;
          }

          .header-title {
            font-size: 1.5rem;
          }

          .header-subtitle {
            font-size: 1rem;
          }

          .header-description {
            font-size: 0.8rem;
          }

          .header-text {
            padding: 0 20px; 
          }
        }
        
      `}
    </style>
  );
};

export default Style;
