import React from 'react';
import SubTitle from '../components/SubTitle';
import SubCircle from '../components/SubCircle';
import ProgramTitle from '../components/ProgramTitle';
import icon_kgongvi from '../assets/icon_kgongvi.png';

function Kgongvi() {
    const title = "PROGRAM > 크공비";
    const txt = ["크리에이터가 ", "공유하는", "비전"];
    const img = icon_kgongvi
    // const detail = ["현업에 있는 직업 전문인들을 만나","테이블 인터뷰를 통해서","진짜 사회의 이야기를 듣는 시간"]

  return (
    <main>
        <SubTitle title={title} size="f-35"/>
        <div className="kgongvi">
        <div className="contents">
          <ProgramTitle txt = {txt} img = {img}/>
          <div class="program-detail f-24">
            현업에 있는 직업 전문인들을 만나<br/>
            테이블 인터뷰를 통해서<br/>
            <span class="underline-container"><span class="underline-txt">진짜 사회의 이야기</span><span class="underline"></span></span>
            <span class="underline-container"><span class="underline-txt">를 듣는 시간</span></span>
          </div>
          <div className="par f-18">
            반찬가게 사장님에서부터 대기업 임원에 이르기까지 직업 전문인으로 살아가는 분들을<br/>
            한자리에 모셔서 간단한 토크쇼와 전담 인터뷰로 배움을 얻는 시간입니다.<br/><br/>
            분기별 1회로 행사가 진행되며 연령,성별,직업에 상관없이 누구든 참여 가능합니다.
          </div>
          <div className="download"><a href="/">연간멤버십 할인받기</a></div>
        </div>
        </div>
        <SubCircle />
    </main>
  );
}

export default Kgongvi;
