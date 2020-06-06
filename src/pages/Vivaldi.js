import React from 'react';
import SubTitle from '../components/SubTitle';
import SubCircle from '../components/SubCircle';
import ProgramTitle from '../components/ProgramTitle';
import icon_vivaldi from '../assets/icon_vivaldi.png';

function Vivaldi() {
    const title = "PROGRAM > 비발디";
    const txt = ["비전을 ", "발견하고 ", "디자인하라"];
    const img = icon_vivaldi;
    // const detail = ["꿈과 비전을 찾아가는 사람들이 한 자리에 모여서 ","각자의 꿈과 비전을 어떤 방식으로 찾아가는지 ","혹은 지금의 고민이 무엇인지를 나누는 네트워킹 파티"]

  return (
    <main>
        <SubTitle title={title}  size="f-35"/>
        <div className="vivaldi">
        <div className="contents">
          <ProgramTitle txt = {txt} img = {img} />
          <div class="program-detail f-24">
            꿈과 비전을 찾아가는 사람들이 한 자리에 모여서 <br/>
            각자의 꿈과 비전을 어떤 방식으로 찾아가는지 <br/>
            <span class="underline-container"><span class="underline-txt">혹은 지금의 고민이 무엇인지를 나누는&nbsp;</span></span>
            <span class="underline-container"><span class="underline-txt">네트워킹 파티</span><span class="underline"></span></span>
          </div>
          <div className="par">
            아이스브레이킹,강연,공연,네트워킹 파티로 이어지는<br/>
            알짜배기 하루를 보내고 싶다면 강력 추천합니다.<br/><br/>
            격월 1회로 행사가 진행되며 연령,성별,직업에 상관없이<br/>
            누구든 참여 가능합니다.
          </div>
          <div className="download"><a href="/">연간멤버십 할인받기</a></div>
        </div>
        </div>
        <SubCircle />
    </main>
  );
}

export default Vivaldi;
