import React from 'react';
import './Curriculum.css';
import CurriItem from './CurriItem';
import curri_icon1 from '../assets/curri_icon1.png';
import curri_icon2 from '../assets/curri_icon2.png';
import curri_icon3 from '../assets/curri_icon3.png';
import curri_icon4 from '../assets/curri_icon4.png';

function Curriculum() {
  // num, txt, detail, color
  const curriData1 = [
    {
      num : "1", 
      txt : ["감정의 5가지" , "구성요소 이해"],
      detail : ["과거 사건들의", "스토리 텔링으로", "감정의 회복 작업"], 
      color : "blue" 
    },
    { 
      num : "2", 
      txt : ["탑메모리의 정리"], 
      detail : ["가슴 벅찼던", "순간의 기억을", "정리를 통한", "자존감 회복"], 
      color : "blue" 
    },
    { 
      num : "3", 
      txt : ["강점 근원이", "되는 흥미 찾기"], 
      detail : ["대인미션을 통한", "자신감 회복"], 
      color : "blue" 
    },
    { 
      num : "4", 
      txt : ["나의", "가치관 찾기"], 
      detail : ["마지막 2주일", "미션으로 시간에", "대한 가치관 정립"], 
      color : "blue" 
    },
    { 
      num : "5",
      txt : ["나의", "강점을 통한", "SWOT 분석"], 
      detail : ["강점 마인드맵과", "SWOT 분석을", "통한 강점 구체화"], 
      color : "blue" 
    },
  ]
  const curriData2 = [
    { 
      num : "1", 
      txt : ["비전선언문의", "작성"], 
      detail : ["사명을 위한", "비전선언문", "작성하기"], 
      color : "green" 
    },
    { 
      num : "2", 
      txt : ["비전독서", "리스트의 작성"], 
      detail : ["비전의 실제적", "구체화를 위한", "연도별 버킷 리스트"], 
      color : "green" 
    },
    { 
      num : "3", 
      txt : ["비전정보 수립","및 활용전략"], 
      detail : ["비전에 필요한","정보의 선점","시스템 구축과","단기비전"], 
      color : "green" 
    },
    { 
      num : "4", 
      txt : ["비전을 위한","실행전략"], 
      detail : ["아는 정보를","행동으로 옮기는","리더들의 주간계획표"], 
      color : "green" 
    },
    { 
      num : "5", 
      txt : ["비전명함 출력","및 공개선언"], 
      detail : ["비전명함","미션을 통해","동역자 세우기"], 
      color : "green" 
    },
  ]
  const curriData3 = [
    { 
      num : "1", 
      txt : ["비전있는","리더들의","행동철학"], 
      detail : ["스스로 시간을 ","관리하는 시간","관리능력 향상"], 
      color : "blue" 
    },
    { 
      num : "2", 
      txt : ["리더들의","자기관리와","리더십"], 
      detail : ["미래지향적","리더들의","비전로드맵","따라해보기"], 
      color : "blue" 
    },
    { 
      num : "3", 
      txt : ["패러다임의","정보화"], 
      detail : ["단순한 DATA를","정보화하는 방법"], 
      color : "blue" 
    },
    { 
      num : "4", 
      txt : ["정보의","선점으로 인한","도약"], 
      detail : ["지름길을","개척해내야 하는","퍼스트 무버"], 
      color : "blue" 
    },
    { 
      num : "5", 
      txt : ["분야별","멘토와의","만남"], 
      detail : ["크공비를 통한","인터뷰, 비지니스","매너 및 인터뷰 기법"], 
      color : "blue" 
    }
  ]
  return (
    <div className="curriculum-container">
      <div className="curriculum">
        <h4 className="curri-left"><img src={curri_icon1} alt="커리큘럼 아이콘" />자아발견과정</h4>
        <div className="curri-item-container">
        {curriData1.map((data)=>{
            return <CurriItem data={data} />
        })}
        </div>
        <div className="curri-line"></div>
      </div>
      <div className="curriculum">
        <h4 className="curri-right">비전발견과정<img src={curri_icon2} alt="커리큘럼 아이콘" /></h4>
        <div className="curri-item-container">
          {curriData2.map((data)=>{
              return <CurriItem data={data} />
          })}
        </div>
        <div className="curri-line"></div>
      </div>
      <div className="curriculum">
        <h4 className="curri-right">멘토발견과정<img src={curri_icon3} alt="커리큘럼 아이콘" /></h4>
        <div className="curri-item-container">
          {curriData3.map((data)=>{
              return <CurriItem data={data} />
          })}
        </div>
        <div className="curri-line"></div>
      </div>
      <div className="curriculum">
        <h4 className="curri-left"><img src={curri_icon4} alt="커리큘럼 아이콘" />수료식 및 아동후원 결연식</h4>
        <h5 className="f-18">12개월간의 훈련과정 전체발표 및 취약계층 아동후원 결연</h5>
        <div>
          <span className="num f-35">1</span>
          <span>비전스쿨에서의 변화된 모습을 PPT로 발표</span>
        </div>
        <div>
          <span className="num f-35">2</span>
          <span>취약계층 아동과의 결연을 통해 매월 1만원 기부활동</span>
        </div>
      </div>
        
    </div>
  );
}

export default Curriculum;
