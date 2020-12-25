import React from 'react';
import SubTitle from '../components/SubTitle';
import SubCircle from '../components/SubCircle';
import ProgramTitle from '../components/ProgramTitle';
import icon_silkroad from '../assets/icon_silkroad.png';

function Silkroad() {
    const title = "PROGRAM > 실크로드";
    const txt = ["실력있는 ", "크리에이터가 ", "되는 길"];
    const img = icon_silkroad
    // const detail = ["살아가면서 필요한 지혜들을 강연을 통해 공유하고 ","함께 배워보는 강연 프로그램",""]

  return (
    <main>
        <SubTitle title={title} size="f-35"/>
        <div className="silkroad">
        <div className="contents">
          <ProgramTitle txt = {txt} img = {img}/>
          <div class="program-detail f-24">
            살아가면서 필요한 지혜들을 강연을 통해 공유하고 <br/>
            <span class="underline-container"><span class="underline-txt">함께 배워보는&nbsp;</span></span>
            <span class="underline-container"><span class="underline-txt">강연 프로그램</span><span class="underline"></span></span>
          </div>
          <div className="par">
            인문학,철학,경제,시간관리,인간관계,공부,습관에 이르기까지...<br/>
            다양한 삶의 지혜들을 윤성화 소장님의 직강을 통해 함께 공부해보는 시간입니다.<br/><br/>
            격월로 행사가 진행되며 연령,성별,직업에 상관없이 누구든 참여 가능합니다.
          </div>
          <div className="download"><a href="https://cafe.naver.com/mentoringlab/19019" target="_blank" rel="noopener noreferrer">연간멤버십 할인받기</a></div>
        </div>
        </div>
        <SubCircle />
    </main>
  );
}

export default Silkroad;
