import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className ="sidebar">

            <div className="id">
                <div className ="idContent">
                    <img src=".././img/hatem.jpg" alt ="profil-pic"/>
                    <h3>Souki Hatem</h3>
                </div>
                                  
                    
                      </div>

                      <div className = "navigation "  >

                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="navActive">

                                <i className="fas fa-home"></i>
                                <span>Accceuil</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/competences" activeClassName="navActive">

                                <i className="fas fa-mountain"></i>
                                <span>Competences</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/portfolio" activeClassName="navActive">

                                <i className="fas fa-images"></i>
                                <span>Portfolio</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/contact" activeClassName="                                      ">

                                <i className="fas fa-home"></i>
                                <span>Contact</span>
                            </NavLink>
                        </li>
                    </ul>
                  
                    </div> 
                    <div className="socialNetwork">
                        <ul>
                            <li>
                                <a href ="https://www.linkedin.com/in/hatem-souki/" target="_blank" rel="nooper noref ">  <i class="fab fa-linkedin"></i> </a>
                            </li>
                            <li>
                                <a href ="https://github.com/hatemsouki" target="_blank" rel="nooper noref ">  <i class="fab fa-github"></i> </a>
                            </li>
                            <li>
                                <a href ="https://www.linkedin.com/in/hatem-souki/" target="_blank" rel="nooper noref ">  <i class="fab fa-twitter"></i> </a>
                            </li>
                            <li>
                                <a href ="https://www.linkedin.com/in/hatem-souki/" target="_blank" rel="nooper noref ">  <i class="fab fa-codepen"></i> </a>
                            </li>
                        </ul>
                        <div className="signature">
                    <a href ="#">  Font size </a>
                    </div>
                    </div>
                    


                    



                    

        </div>
    );
};

export default Navigation;