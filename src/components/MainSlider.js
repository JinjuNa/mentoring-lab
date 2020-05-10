import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';
import effect from '../assets/effect.png';

const Slide = styled.div`
  width: 100%;
  flex: 0 0 100%;

  & img{
    width:100%;
  }
`;

const Container = styled.div`
  width: 1165px;
  margin:0 auto;
  overflow: hidden;
  background-color : #493fd3;
  background-image: url("${effect}");
  background-repeat: no-repeat;
  background-position : right 10px top 50px;
  background-size: 150px auto;
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;

const PagerContainer = styled.ul`
  color : #fff;
  text-align:right;

  & li {
    display : inline-block;
    padding: 8px;
    font-size:20px;
    list-style:none;
    cursor: pointer;
    z-index:100;
  }

  & li.active{
    text-decoration : underline;
  }

`

const CarouselComponent = ({slideItem}) =>{
  return (
    <Slide>
        <img src={slideItem.img} alt="슬라이드 이미지" />
    </Slide>
  )
}



const TOTAL_SLIDES = 3;

const MainSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const [activePage, setActivePage] = useState(1);
    
    const slideItem = [
      {num : 1, img : slide1},
      {num : 2, img : slide2},
      {num : 3, img : slide3},
      {num : 4, img : slide4}
    ]

    const slideContent = slideItem.map((slideItem, index)=> <CarouselComponent slideItem={slideItem} key={index} />);
    const pagerMenu = [
      {id: 1, text : "01"},
      {id: 2, text : "02"},
      {id: 3, text : "03"},
      {id: 4, text : "04"}
    ];
    const Pager = (()=>{
      return (
        <PagerContainer>
          {
            pagerMenu.map((item, index) =>{
                return <li key={index} className={activePage === item.id ? 'active' : ''} onClick={() => {setActivePage(item.id); setCurrentSlide(index)}}>{item.text}</li>
            })
          }
        </PagerContainer>
      )
    }) 

    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
        setActivePage(currentSlide+1)
      }, [currentSlide]);
    
    setInterval(() => {
      
    }, 4000);

    useEffect(() => {
      const interval = setInterval(() => {
        if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
          setCurrentSlide(0);
      } else {
          setCurrentSlide(currentSlide + 1);
      }
      }, 4000);
      return () => clearInterval(interval);
    }, );

    return(
      <Container>
        <Pager />
        <SliderContainer ref={slideRef}>
            {slideContent}
        </SliderContainer>
      </Container>
    )
}

export default MainSlider;
