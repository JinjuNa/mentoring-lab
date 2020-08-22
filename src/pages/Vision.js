import React from 'react';
import SubTitle from '../components/SubTitle';
import SubCircle from '../components/SubCircle';
import vision_background from "../assets/vision_background.png";

function Vision() {
    const title = "VISION";

  return (
    <main>
        <SubTitle title={title} />
        <div className="vision">
        <div className="contents">
            <h2>실력과 인성을 겸비한 청년들을 양성하는 곳,<br />
            <span class="underline-container"><span class="underline-txt">여기는&nbsp;</span></span>
            <span class="underline-container"><span class="underline-txt">Mentoring-Lab</span><span class="underline"></span></span>
            <span class="underline-container"><span class="underline-txt">&nbsp;입니다.</span></span>
            </h2>
            <div className="diagram-container">
                <img src={vision_background} alt="vision_background"/>
                <div className="diagram-text top">
                    미래사회형
                    <br />진로교육의 실현
                </div>
                <div className="diagram-text left">
                    수요인력 양성으로
                    <br />통합사회 추구
                </div>
                <div className="diagram-text right">
                    기업가정신 기반한
                    <br />자립형 인간 양성
                </div>
            </div>
            <p className="par">사람들에게 잘 보이기 위한 삶에서 벗어나서 <br className="responsive-br"/>
                자신만의 삶을 살아가려면 자신만의 기준이 필요합니다.<br/><br/>
                그래서 Mentoring-Lab에서는 자기경영, 창의력, 경제교육, 창업가육성을 <br className="responsive-br"/>
                통해 자신의 길을 스스로 찾아가는 힘을 훈련하고 있습니다.<br/><br/>
                Mentoring-Lab은 나아가 유럽, 일본, 프랑스의 좋은 진로교육제도를 <br className="responsive-br"/>
                도입하여 국내 유일의 '진로교육대학'을 설립하기 위해 힘쓰고 있습니다.<br/><br/>
                모든 인생이 탁월한 인생으로 살아갈 때 까지 Mentoring-Lab의 <br className="responsive-br"/>
                교육실험은 계속됩니다.
            </p>
            <div className="button"><a href="/">회사소개서 다운로드</a></div>
        </div>
        </div>
        <SubCircle />
    </main>
  );
}

export default Vision;
