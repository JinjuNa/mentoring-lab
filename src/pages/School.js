import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SubTitle from '../components/SubTitle';
import SubCircle from '../components/SubCircle';
import VisionSchool from '../components/VisionSchool';
import ParadigmSchool from '../components/ParadigmSchool';
import EconomicSchool from '../components/EconomicSchool';
import StartupSchool from '../components/StartupSchool';

function School() {
    const title = "SHCOOL";
    const menu = [
        {text : "비전스쿨", url : "/program/school/vision"},
        {text : "패러다임스쿨", url : "/program/school/paradigm"},
        {text : "경제스쿨", url : "/program/school/economic"},
        {text : "창업스쿨", url : "/program/school/startup"}
    ];

  return (
    <main>
        <SubTitle title={title} />
        <div className="school">
        <div className="contents">
            School 윗부분 내용

            <ul class="schoolMenu">
            {menu.map((item, index)=>{
                return <li key={index}><a href={item.url}>{item.text}</a></li>
            })}
            </ul>

            <Router>
            <Switch>
                <Route path="/program/school/vision" component={VisionSchool} />
                <Route path="/program/school/paradigm" component={ParadigmSchool} />
                <Route path="/program/school/economic" component={EconomicSchool} />
                <Route path="/program/school/startup" component={StartupSchool} />
            </Switch>
            </Router>
        </div>
        </div>
        <SubCircle />
    </main>
  );
}

export default School;
