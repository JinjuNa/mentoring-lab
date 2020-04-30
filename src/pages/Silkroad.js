import React from 'react';
import SubTitle from '../components/SubTitle';
import SubCircle from '../components/SubCircle';
import ProgramTitle from '../components/ProgramTitle';
import icon_silkroad from '../assets/icon_silkroad.png';

function Silkroad() {
    const title = "PROGRAM > 실크로드";
    const txt = ["실력있는 ", "크리에이터가 ", "되는 길"];
    const img = icon_silkroad
    const detail = ["살아가면서 필요한 지혜들을 강연을 통해 공유하고 ","함께 배워보는 강연 프로그램",""]

  return (
    <main>
        <SubTitle title={title} />
        <div className="kgongvi">
        <div className="contents">
            <ProgramTitle txt = {txt} img = {img} detail={detail}/>
            실크로드 내용
        </div>
        </div>
        <SubCircle />
    </main>
  );
}

export default Silkroad;
