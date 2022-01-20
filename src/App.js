import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link  
} from "react-router-dom";
import InputForm from "./Components/InputForm";
import People from "./Views/People";
import Planet from "./Views/Planet";
import Starships from "./Views/Starships";
    
function App() {
  return (
    <BrowserRouter>
    <div>
      <InputForm />
    </div>
    
    <Switch>

      <Route path="/people/:Id">
        <People />
      </Route>
      <Route path="/planets/:Id">
        <Planet />
      </Route>
      <Route path="/starships/:Id">
        <Planet />
      </Route>
          
    </Switch>
    </BrowserRouter>
  );
}
    
export default App;
