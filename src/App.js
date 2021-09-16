


import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
const App = () => {
  return (
    
      <BrowserRouter>
      <Switch>
       <Route path= "/"  exact component= {Home}/>
       <Route path= "/competences"  exact component= {Knowledges}/>
       <Route path= "/portfolio"  exact component= {Portfolio}/>
       <Route path= "/contact"  exact component= {Contact}/>
       <Route  exact component= {NotFound}/>
       </Switch>
      
      </BrowserRouter>
    
    
  );
};

export default App;
