import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className ="home" >
          <Navigation/>
        <div className ="homeContent">
        <div className ="content">
          <h1> Souki Hatem</h1>
          <h2>Ingénieur DevOps et génie logiciel</h2>
          <div className ="pdf">
            <a href="./media/CVSoukiHatem.pdf" target="_blank"> Télécharger CV</a>
            

          </div>

        </div>
        </div>



          
        </div>
    );
};

export default Home;