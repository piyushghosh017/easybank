import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './Header';
import Home from "./Home";
import Footer from "./Footer";
import CreateAccForm from "./CreateAccForm"
import transfer from "./Transfer.js";
import CharityPage from "./CharityPage";

const App = ()=>{
    return (
      <div className="app">
        <Router>
        <Header/>
          <Switch>
          <Route exact path="/" component={Home} />
            <Route exact path="/CreateAccForm" component={CreateAccForm} />
            <Route exact path="/CharityPage" component={CharityPage} />
            <Route exact path="/transfer" component={transfer} />
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
}

export default App;