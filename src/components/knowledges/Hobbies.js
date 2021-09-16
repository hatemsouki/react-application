import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
           <h3>Intérets</h3>
           <ul>
               <li className ="hobby"> <i class="fas fa-futbol"></i><span>Football</span></li>
               <li className ="hobby"><i class="fas fa-plane"></i> <span>Voyage</span></li>
               <li className ="hobby"><i class="fas fa-volleyball-ball"></i><span>Handball</span></li>
               
           </ul>

        </div>
    );
};

export default Hobbies;