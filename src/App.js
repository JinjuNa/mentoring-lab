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
    <div className="App">
      <Header />
      <Menu />
      {/* <MenuMobile /> */}
      <Router>
      <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/vision" component={Vision}/>
          <Route path="/history" component={History}/>
          <Route path="/program/school/:keyword" component={School} />
          <Route path="/program/vivaldi" component={Vivaldi} />
          <Route path="/program/kgongvi" component={Kgongvi} />
          <Route path="/program/silkroad" component={Silkroad} />
          <Route path="/recruit" component={Recruit} />
          <Route path="/contact" component={Contact} />
      </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;