import React from 'react';
import SubTitle from '../components/SubTitle';
import SubCircle from '../components/SubCircle';
import ProgramTitle from '../components/ProgramTitle';
import icon_vivaldi from '../assets/icon_vivaldi.png';

function Vivaldi() {
    const title = "PROGRAM > 비발디";
    const txt = ["비전을 ", "발견하고 ", "디자인하라"];
    const img = icon_vivaldi
    const detail = ["꿈과 비전을 찾아가는 사람들이 한 자리에 모여서 ","각자의 꿈과 비전을 어떤 방식으로 찾아가는지 ","혹은 지금의 고민이 무엇인지를 나누는 네트워킹 파티"]

  return (
    <main>
        <SubTitle title={title} />
        <div className="kgongvi">
        <div className="contents">
            <ProgramTitle txt = {txt} img = {img} detail={detail}/>
            비발디 내용
        </div>
        </div>
        <SubCircle />
    </main>
  );
}

export default Vivaldi;
