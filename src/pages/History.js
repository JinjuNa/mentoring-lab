import React from 'react';
import SubTitle from '../components/SubTitle';
import SubCircle from '../components/SubCircle';

function History() {
    const title = "HISTORY";

  return (
    <main>
        <SubTitle title={title} />
        <div className="history">
        <div className="contents">
            <div className="timeline">
            <div className="start">OUR START</div>
            <div className="timeline-container right">
                <div className="timeline-content">
                <h2>2012</h2>
                <ul>
                    <li>Mentoring-Lab 설립</li>
                </ul>
                </div>
            </div>
            <div className="timeline-container left">
                <div className="timeline-content">
                <h2>2013</h2>
                <ul>
                    <li>진로교육 1년 아카데미 '비전스쿨' 개설</li>
                    <li className="clear-before">(~2019년 12월 현재 437명 훈련 중)</li>
                </ul>
                </div>
            </div>
            <div className="timeline-container right">
                <div className="timeline-content">
                <h2>2014</h2>
                <ul>
                    <li>경기도 교육청 진로멘토단 선정</li>
                    <li>삼성 SDI 청소년 직업멘토단 활동</li>
                    <li>전국 직업인 멘토단 창단</li>
                    <li>창의력 1년 아카데미 '패러다임스쿨' 개설</li>
                </ul>
                </div>
            </div>
            <div className="timeline-container left">
                <div className="timeline-content">
                <h2>2015</h2>
                <ul>
                    <li>싱가폴 MICROSOFT 직원 직무교육 운영</li>
                    <li>굿네이버스 취약계층 진로교육 멘토단 운영</li>
                    <li>경제교육 1년 아카데미 '경제스쿨' 개설</li>
                </ul>
                </div>
            </div>
            <div className="timeline-container right">
                <div className="timeline-content">
                <h2>2016</h2>
                <ul>
                    <li>교육부 진로교육 정보망 상담교사 활동</li>
                    <li>기업가양성 1년 아카데미 '창업스쿨' 개설</li>
                </ul>
                </div>
            </div>
            <div className="timeline-container left">
                <div className="timeline-content">
                <h2>2017</h2>
                <ul>
                    <li>한국 진로직업협회 이사 취임</li>
                    <li>MENTORING-LAB 서울 본사 개소</li>
                </ul>
                </div>
            </div>
            <div className="timeline-container right">
                <div className="timeline-content">
                <h2>2018</h2>
                <ul>
                    <li>성신여자대학교 창업교육 학과 개설</li>
                    <li>초기창업패키지 창업과정 4개 아이템 선정</li>
                </ul>
                </div>
            </div>
            <div className="timeline-container left">
                <div className="timeline-content">
                <h2>2019</h2>
                <ul>
                    <li>온라인 진로멘토링 교육과정 개설</li>
                </ul>
                </div>
            </div>
            <div className="timeline-container right">
                <div className="timeline-content">
                <h2>2020</h2>
                <ul>
                    <li>진로코칭북 ‘그래서 제가 뭘하면 되나요’ 출간</li>
                </ul>
                </div>
            </div>
            <div className="end">OUR STORY WILL GO ON</div>
            </div>
        </div>
        </div>
        <SubCircle />
    </main>
  );
}

export default History;
