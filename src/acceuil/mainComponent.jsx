import React from 'react';
import Style from './style';

const MainComponent = () => {
  return (
    <>
        <Style/>
        <main className="main-content">
            <h2>Nos atouts</h2>
            <div className="atouts-list">
                <div className="atout-item">NDOLÉ</div>
                <div className="atout-item">Pilé Pommes</div>
                <div className="atout-item">Boulette</div>
            </div>
        </main>
    </>
  );
}

export default MainComponent;
