import React from 'react';
import './App.css';
import './style/main.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import MenuMobile from './components/MenuMobile';
import Main from './pages/Main';
import Vision from './pages/Vision';
import History from './pages/History';
import School from './pages/School';
import Vivaldi from './pages/Vivaldi';
import Kgongvi from './pages/Kgongvi';
import Silkroad from './pages/Silkroad';
import Recruit from './pages/Recruit';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Header />
      <Menu />
      {/* <MenuMobile /> */}
      <Router>
      <Switch>
          <Route exact path="/" render={ (routerProps) => < Main routerProps={routerProps} />} />
          <Route path="/vision" render={ (routerProps) => < Vision routerProps={routerProps} />} />
          <Route path="/history" render={ (routerProps) => < History routerProps={routerProps} />} />
          <Route path="/program/school/:keyword" render={ (routerProps) => < School routerProps={routerProps} />} />
          <Route path="/program/vivaldi" render={ (routerProps) => < Vivaldi routerProps={routerProps} />} />
          <Route path="/program/kgongvi" render={ (routerProps) => < Kgongvi routerProps={routerProps} />}  />
          <Route path="/program/silkroad" render={ (routerProps) => < Silkroad routerProps={routerProps} />}  />
          <Route path="/recruit" render={ (routerProps) => < Recruit routerProps={routerProps} />}  />
          <Route path="/contact" render={ (routerProps) => < Contact routerProps={routerProps} />}  />
      </Switch>
      </Router>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
