import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
   state =  {
    languages: [
           {id:1 , value: "javascrit", xp:1.8},
           {id:2 , value: "C#", xp:1.2},
           {id:3 , value: "PHP", xp:1.8},
           {id:4 , value: "java", xp:1.8},
           {id:5 , value: "python", xp:1.3},
           {id:6 , value: "css", xp:2}
       ],
       frameworks:[
        {id:1 , value: "React", xp:1.4},
        {id:2 , value: "Angular", xp:1.6},
        {id:3 , value: "Vue js", xp:1.4},
        
        {id:4 , value: "spring boot", xp:1.8},
        {id:5, value: ".net core", xp:1}
       ]
   }
   
   
    render() {
        let { languages, frameworks}= this.state;
        return (
            <div  className = "languagesFrameworks">
                <ProgressBar
                 className = "languagesDisplay"
                  languages= {languages}
                  title="languages"/>
                <ProgressBar
                className = "framworksDisplay"
                languages={frameworks}
                title="framworks & bibliothèques"
                />
            </div>
        );
    }
}

export default Languages;