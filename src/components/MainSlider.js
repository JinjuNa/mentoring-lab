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
  width: 100%;
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
var active1 = ''
var active2 = ''
var active3 = ''
var active4 = ''

const MainSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    

    const slideItem = [
      {num : 1, img : slide1},
      {num : 2, img : slide2},
      {num : 3, img : slide3},
      {num : 4, img : slide4}
    ]

    const slideContent = slideItem.map((slideItem, index)=> <CarouselComponent slideItem={slideItem} key={index} />);
    
    function pager1(){
      setCurrentSlide(0)
    }

    function pager2(){
      setCurrentSlide(1)
    }

    function pager3(){
      setCurrentSlide(2)
    }

    function pager4(){
      setCurrentSlide(3)
    }
    
    const Pager = (()=>{
      return (
        <PagerContainer>
          <li onClick={()=>pager1()} className={active1} >01</li>
          <li onClick={()=>pager2()} className={active2} >02</li>
          <li onClick={()=>pager3()} className={active3} >03</li>
          <li onClick={()=>pager4()} className={active4} >04</li>
        </PagerContainer>
      )
    }) 

    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
        active1 = '';
        active2 = '';
        active3 = '';
        active4 = '';
        if(currentSlide === 0){
          active1 = "active";
        }else if(currentSlide === 1){
          active2 = "active";
        }else if(currentSlide === 2){
          active3 = "active";
        }else if(currentSlide === 3){
          active4 = "active";
        }
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
