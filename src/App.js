import './App.css';
import Country from './Compunents/country/Country';
import Error from './Compunents/error/Error';
import Countryinfo from './Compunents/countryDetalce/Countryinfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (
     <div>
        <h1 className="header">wellto my website</h1>
        
        <Router>
          <Switch>
            <Route path="/home">
            <Country></Country>
            </Route>
            <Route path="/:name">
              <Countryinfo></Countryinfo>
            </Route>
            <Route exact path="/">
            <Country/>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
            
          </Switch>
        </Router>
     </div>
  );
}

export default App;
