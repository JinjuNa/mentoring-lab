import React from 'react';
import SubTitle from '../components/SubTitle';
import SubCircle from '../components/SubCircle';
import ProgramTitle from '../components/ProgramTitle';
import icon_kgongvi from '../assets/icon_kgongvi.png';

function Kgongvi() {
    const title = "PROGRAM > 크공비";
    const txt = ["크리에이터가 ", "공유하는 ", "비전"];
    const img = icon_kgongvi
    const detail = ["현업에 있는 직업 전문인들을 만나","테이블 인터뷰를 통해서","진짜 사회의 이야기를 듣는 시간"]

  return (
    <main>
        <SubTitle title={title} />
        <div className="kgongvi">
        <div className="contents">
            <ProgramTitle txt = {txt} img = {img} detail={detail}/>
            크공비 내용
        </div>
        </div>
        <SubCircle />
    </main>
  );
}

export default Kgongvi;
