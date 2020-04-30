import React from 'react';
import SubTitle from '../components/SubTitle';
import SubCircle from '../components/SubCircle';
import vision_diagram from "../assets/vision_diagram.png";

function Vision() {
    const title = "VISION";

  return (
    <main>
        <SubTitle title={title} />
        <div className="vision">
        <div className="contents">
            <h2>실력과 인성을 겸비한 청년들을 양성하는 곳,<br />
            여기는 MENTORING LAB 입니다.</h2>
            <div className="diagram">
                <img src={vision_diagram} alt="vision_diagram"/>
            </div>
            <p className="par">사람들에게 잘 보이기 위한 삶에서 벗어나서<br/>
                자신만의 삶을 살아가려면 자신만의 기준이 필요합니다.<br/>
                그래서 MENTORING-LAB에서는 자기경영, 창의력, 경제교육, 창업가육성을<br/>
                통해 자신의 길을 스스로 찾아가는 힘을 훈련하고 있습니다.<br/>
                MENTORING-LAB은 나아가 유럽, 일본, 프랑스의 좋은 진로교육제도를<br/>
                도입하여 국내 유일의 '진로교육대학'을 설립하기 위해 힘쓰고 있습니다.<br/>
                모든 인생이 탁월한 인생으로 살아갈 때 까지 MENTORING-LAB의<br/>
                교육실험은 계속됩니다.
            </p>
            <div className="download"><a href="/">회사소개서 다운로드</a></div>
        </div>
        </div>
        <SubCircle />
    </main>
  );
}

export default Vision;
