import React from 'react';
import SubTitle from '../components/SubTitle';
import SubCircle from '../components/SubCircle';
// import RecruitItem from '../components/RecruitItem';
import Department from '../components/Department';
import icon_recruit01 from '../assets/icon_recruit01.png';
import icon_recruit02 from '../assets/icon_recruit02.png';
import icon_recruit03 from '../assets/icon_recruit03.png';
import icon_recruit04 from '../assets/icon_recruit04.png';

function Recruit() {
    const title = "RECRUIT";
    // const item = [
    //     {
    //         num : "01",
    //         txt : "직급이 없습니다",
    //         img : icon_recruit01,
    //         detail : [
    //             "동등한 관계에서만 좋은 아이디어가 나온다고 믿기 때문입니다. ",
    //             "그래서 모두 'oo씨'라고 부릅니다.",
    //             ""
    //         ]
    //     },
    //     {
    //         num : "02",
    //         txt : "야근이 없습니다",
    //         img : icon_recruit02,
    //         detail : [
    //             "모든 직원이 재택근무를 하기 때문에 야근이 없습니다. ",
    //             "대신 주어진 일을 책임 있게 해내지 못하면 불이익이 있습니다. ",
    //             "월 2회 전체회의 4시간은 필참입니다."
    //         ]
    //     },
    //     {
    //         num : "03",
    //         txt : "회식이 없습니다",
    //         img : icon_recruit03,
    //         detail : [
    //             "의무적인 회식문화 자체가 없습니다. ",
    //             "대표가 회식을 싫어합니다. ",
    //             "회식비 모았다가 해외 워크샵 갑니다."
    //         ]
    //     },
    //     {
    //         num : "04",
    //         txt : "경력직이 없습니다",
    //         img : icon_recruit04,
    //         detail : [
    //             "모든 직원은 3년 안에 독립(창업)하는 것을 목표로 합니다. ",
    //             "3년 이후에는 회사를 설립하여 파트너쉽을 맺어 일을 함께 합니다. ",
    //             "3년 이상 일하고 싶을 때는 합당한 사유서를 제출해야 합니다."
    //         ]
    //     }
    // ];

    const dep = [
        {
            txt : "교육사업부",
            detail : [
                "교육사업부는 오프라인 스쿨과정과 전국 학교에 ",
                "출강하는 교육컨텐츠의 기획 및 운영과 ",
                "기업체 홍보 및 마케팅 업부를 담당합니다."
            ],
            content : [
                "- 프로그램 개발 및 교육",
                "- 프로그램 홍보 및 마케팅",
                ""
            ]
        },
        {
            txt : "IT사업부",
            detail : [
                "IT사업부는 온라인 스쿨과정과 개발과 운영에",
                "필요한 서비스를 제공하는 업무를 담당하며, ",
                "추후 IT 스타트업으로의 독립을 목표로 합니다."
            ],
            content : [
                "- 온라인 서비스 기획 및 개발",
                "- Android / iOS 개발",
                "- 온라인 홍보 및 마케팅"
            ]
        },
        {
            txt : "경영지원부",
            detail : [
                "경영지원팀은 Mentoring-lab의 ",
                "전반적인 업무가 원활하게 진행될 수 있도록 ",
                "돕는 핵심적인 부서입니다."
            ],
            content : [
                "- 재무, 회계관리",
                "- 행정, 사업일정관리",
                ""
            ]
        }
    ]

  return (
    <main>
        <SubTitle title={title} />
        <div className="recruit">
        <div className="contents">
            <div className="contents-header">
            <h2 className="f-26">
                월급만 필요하다면 지원하지 마세요<br/>
                <span className="underline-container">
                <span className="underline-txt">
                우리는&nbsp;
                </span>
                </span>
                <span className="underline-container">
                    <span className="underline-txt">의미 있는 일을</span>
                    <span className="underline"></span>
                </span>
                <span className="underline-container">
                <span className="underline-txt">
                &nbsp;하려고 합니다
                </span>
                </span>
             <br/>
            <span className="underline-bottom">대신 함께 할 수 있다면 업계 최고대우를 보장합니다.</span></h2>
            <p className="par">교육에 대한 열정이 남다르고 아이디어가 넘쳐나는 사람들은<br/>
            절대로 현재에 머무르려고 하지 않는다고 믿습니다.<br/><br/>
            그래서 저희 회사에는 없는 것이 다음과 같습니다.</p>
            </div>
            {/* <div className="recruit-item-container">
            <RecruitItem num={item[0].num} txt = {item[0].txt} img={item[0].img} detail={item[0].detail} />
            <RecruitItem num={item[1].num} txt = {item[1].txt} img={item[1].img} detail={item[1].detail} />
            <RecruitItem num={item[2].num} txt = {item[2].txt} img={item[2].img} detail={item[2].detail} />
            <RecruitItem num={item[3].num} txt = {item[3].txt} img={item[3].img} detail={item[3].detail} />
            </div> */}
            <div class="recruit-item-container">
                <div class="recruit-item">
                    <div class="icon">
                        <img src={icon_recruit01} alt="recruit-item-img" />
                    </div>
                    <span class="num f-60">01</span>
                    <span class="underline-container">
                        <span class="txt f-25 underline-txt">직급이 없습니다</span>
                        <span class="underline"></span>
                    </span>
                    <div class="recruit-item-detail f-15">동등한 관계에서만 좋은 아이디어가 나온다고 믿기 때문입니다. <br />그래서 모두 <span className="highlight">'oo씨'</span>라고 부릅니다.<br /></div>
                </div>
                <div class="recruit-item">
                    <div class="icon">
                        <img src={icon_recruit02} alt="recruit-item-img" />
                    </div>
                    <span class="num f-60">02</span>
                    <span class="underline-container">
                        <span class="txt f-25 underline-txt">야근이 없습니다</span>
                        <span class="underline"></span>
                    </span>
                    <div class="recruit-item-detail f-15"><span className="highlight">모든 직원이 재택근무</span>를 하기 때문에 야근이 없습니다. <br />대신 주어진 일을 책임 있게 해내지 못하면 불이익이 있습니다. <br /><span className="highlight">월 2회 전체회의 4시간</span>은 필참입니다.</div>
                </div>
                <div class="recruit-item">
                    <div class="icon">
                        <img src={icon_recruit03} alt="recruit-item-img" />
                    </div>
                    <span class="num f-60">03</span>
                    <span class="underline-container">
                        <span class="txt f-25 underline-txt">회식이 없습니다</span>
                        <span class="underline"></span>
                    </span>
                    <div class="recruit-item-detail f-15">의무적인 회식문화 자체가 없습니다. <br /><span className="highlight">대표가 회식을 싫어합니다.</span> <br />회식비 모았다가 <span className="highlight">해외 워크샵</span> 갑니다.</div>
                </div>
                <div class="recruit-item">
                    <div class="icon">
                        <img src={icon_recruit04} alt="recruit-item-img" />
                    </div>
                    <span class="num f-60">04</span>
                    <span class="underline-container">
                        <span class="txt f-25 underline-txt">경력직이 없습니다</span>
                        <span class="underline"></span>
                    </span>
                    <div class="recruit-item-detail f-15">모든 직원은 3년 안에 <span className="highlight">독립(창업)</span>하는 것을 목표로 합니다. <br />3년 이후에는 회사를 <span className="highlight">설립</span>하여 파트너쉽을 맺어 일을 함께 합니다. <br />3년 이상 일하고 싶을 때는 합당한 사유서를 제출해야 합니다.</div>
                </div>
            </div>
            <div className="department-container">
                <Department txt={dep[0].txt} detail={dep[0].detail} content={dep[0].content} /> 
                <Department txt={dep[1].txt} detail={dep[1].detail} content={dep[1].content} /> 
                <Department txt={dep[2].txt} detail={dep[2].detail} content={dep[2].content} /> 
            </div>
            <div className="download"><a href="https://cafe.naver.com/mentoringlab/18403" target="_blank" rel="noopener noreferrer" >지원서 다운로드</a></div>
        </div>
        </div>
        <SubCircle />
    </main>
  );
}

export default Recruit;
