import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import SubTitle from '../components/SubTitle';
import SubCircle from '../components/SubCircle';
import VisionSchool from '../components/VisionSchool';
import ParadigmSchool from '../components/ParadigmSchool';
import EconomicSchool from '../components/EconomicSchool';
import StartupSchool from '../components/StartupSchool';

function School() {
    const [activeTab, setActiveTab] = useState(1);
    const title = "SHCOOL";
    const menu = [
        {id : 1, text : "비전스쿨", url : "/program/school/vision"},
        {id : 2, text : "패러다임스쿨", url : "/program/school/paradigm"},
        {id : 3, text : "경제스쿨", url : "/program/school/economic"},
        {id : 4, text : "창업스쿨", url : "/program/school/startup"}
    ];


  return (
    <main>
        <SubTitle title={title} />
        <div className="school">
        <div className="contents">
            <h2>매월 격주마다 2회, 1년간 운영되는 아카데미<br />
            <span className="underline-container">
                <span className="underline-txt">오프라인 토론과 미션들을</span>
                <span className="underline"></span>
            </span>
            <span className="underline-container">
                <span className="underline-txt">&nbsp;통해 생각하며 배웁니다</span>
            </span>
             </h2>
            <p className="par">한국의 교육은 주로 지식적으로 배우는 학(學) 위주로 배웁니다.<br />
            하지만 유럽과 미국은 이 학과 습(習)을 병행하며 배웁니다.<br />
            몸에 익혀지는 시간을 통해 자신의 적성과 강점에 맞는지를<br />
            검증하는 과정이 이미 교육과정의 기초에 들어가 있는 것이죠.</p>
            <p className="par">진로, 창의력, 경제, 창업···<br />
            어느 하나 쉽지 않은 영역이지만 학과 습의 병행과 함께<br />
            그룹토론 수업으로 밀도있게 공부하면 그 동안 알지 못했던<br />
            새로운 배움의 장(場)을 경험할 수 있습니다.</p>
            <Router>
            <ul className="school-menu">
            {menu.map((item, index)=>{
                return <li key={index} className={activeTab === item.id ? 'active' : ''} onClick={() => setActiveTab(item.id)}><Link to={item.url}>{item.text}</Link></li>
            })}
            </ul>

            
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
