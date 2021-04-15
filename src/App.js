import './App.css';
import Header from "./components/Header";
import Yoga from "./components/Yoga"
import Wiki from "./components/Wiki"
import Programming from "./components/Programming"
import Writing from "./components/Writing"
import PageNotFound from "./components/PageNotFound"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    
      <Router>
        <div className="allWrapper">
        <Header />
        <Switch>
          
          <Route path="/yoga" component={Yoga} />
          <Route path="/programming" component={Programming} />


        </Switch>

        </div>
      </Router>
        


     
  
      
      
      
    
  );
}

export default App;
