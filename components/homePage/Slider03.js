import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination , Navigation} from "swiper";

import { AiOutlineRight } from "react-icons/ai";
import {ContainerFull, ContainerFluid, BoxItemSlider03, ImgBoxSlider03, MainImgSlider03, SubImgSlider03, PriceProductSlider03, SaleProductSlider03, StatusProductBox, StatusProductDivSlider03, ProductDivSlider03, CurrencyProductSlider03, ImgIconSlider03, TimeCountDowSlider03} from "../../styles/StyledComponents"
import {Flexbox12idiv} from "../../styles/GirdComponents12"
function Slider03() {
  const [sliderElement, setSliderElement] = useState()
  const [StartTimeSlider03, SetStartTimeSlider03] = useState(3600)
  const [TimeSlider03, setTimeSlider03] = useState({
      h: 0,
      m: 0,
      s: 0
    })
  const arrData = [
    {
      id: '00',
      img: "https://salt.tikicdn.com/cache/200x200/ts/product/91/44/e5/506b73fccbf32103f69f9820c0649c98.jpg.webp",
      price: "157.000",
      sale: "-54%",
      status: "90",
      freeShip: true,
    },
    {
      id: '01',
      img: "https://salt.tikicdn.com/cache/200x200/ts/product/ab/cb/91/7572776c7909ea0a36e71cf2309aa82e.jpg.webp",
      price: "352.000",
      sale: "-12%",
      status: "10",
      freeShip: true,
    },
    {
      id: '02',
      img: "https://salt.tikicdn.com/cache/200x200/ts/product/65/73/0b/618814ff857cd0671005dc6c4b3d5485.jpg.webp",
      price: "129.000",
      sale: "-86%",
      status: "90",
      freeShip: true,
    },
    {
      id: '03',
      img: "https://salt.tikicdn.com/cache/200x200/ts/product/e8/79/95/1149c7ef93172a6c6d2d7d07a89e69db.jpg.webp",
      price: "146.000",
      sale: "-57%",
      status: "20",
      freeShip: true,
    },
    {
      id: '04',
      img: "https://salt.tikicdn.com/cache/200x200/ts/product/db/38/27/00c78033f03e563cca9e89ea85e6272a.jpg.webp",
      price: "32.000",
      sale: "-51%",
      status: "40",
      freeShip: false,
    },
    {
      id: '05',
      img: "https://salt.tikicdn.com/cache/200x200/ts/product/78/83/23/7cad758fc5e8fd666e7be6f042860535.jpg.webp",
      price: "564.000",
      sale: "-56%",
      status: "10",
      freeShip: true,
    },
    {
      id: '06',
      img: "https://salt.tikicdn.com/cache/200x200/ts/product/e8/48/ab/6c9e5e4cce11ebe5b79378a83badd52b.jpg.webp",
      price: "199.000",
      sale: "-13%",
      status: "10",
      freeShip: true,
    },
    {
      id: '07',
      img: "https://salt.tikicdn.com/cache/200x200/ts/product/79/95/64/dca51704a65fb411c167f317a44b61b1.jpg.webp",
      price: "55.000",
      sale: "-31%",
      status: "10",
      freeShip: true,
    },
    {
      id: '08',
      img: "https://salt.tikicdn.com/cache/200x200/ts/product/75/bb/49/622ca55ade6de838cc9f453dc9c25786.jpg.webp",
      price: "343.000",
      sale: "-3%",
      status: "10",
      freeShip: true,
    },
    {
      id: '09',
      img: "https://salt.tikicdn.com/cache/200x200/ts/product/c2/d7/f9/e73318b3ea2ee04db2022b646a63819c.jpg.webp",
      price: "248.000",
      sale: "-29%",
      status: "20",
      freeShip: true,
    },
    {
      id: '010',
      img: "https://salt.tikicdn.com/cache/200x200/ts/product/67/c5/28/d9fd32ff94a8ccc005dbf56bd0a8556a.jpg.webp",
      price: "112.000",
      sale: "-9%",
      status: "10",
      freeShip: false,
    },
    {
      id: '011',
      img: "https://salt.tikicdn.com/cache/200x200/ts/product/2c/b5/44/ab1cfb5e9013fc47df514bdc92632ba7.jpg.webp",
      price: "183.864",
      sale: "-29%",
      status: "10",
      freeShip: true,
    }
  ]
  useEffect(()=>{
    const fecthData = (item, index) =>{
      return(
        <>
          <SwiperSlide>
            <Flexbox12idiv flexDecoration="column">
              <BoxItemSlider03>
                <ImgBoxSlider03>
                  <MainImgSlider03 src={item.img}/>
                  {()=>{
                    return item[index].freeShip ? <SubImgSlider03/> : '';
                  }}
                </ImgBoxSlider03>
                <Flexbox12idiv padding="10px 0" alignItems="center">
                  <PriceProductSlider03>{item.price}</PriceProductSlider03>
                  <CurrencyProductSlider03> đ </CurrencyProductSlider03>
                  <SaleProductSlider03>{item.sale}</SaleProductSlider03>
                </Flexbox12idiv>
                <StatusProductBox>
                  <ProductDivSlider03></ProductDivSlider03>
                  <StatusProductDivSlider03 witdh={`${item.status}px`}></StatusProductDivSlider03>
                </StatusProductBox>
              </BoxItemSlider03>
            </Flexbox12idiv>
          </SwiperSlide>
        </>
      )
    }
    setSliderElement(arrData.map(fecthData));
  },[])
  useEffect(() =>{
    let hours = Math.floor(StartTimeSlider03 / (60 * 60));
    let divisor_for_minutes = StartTimeSlider03 % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    setTimeSlider03(
      {
        h: hours,
        m: minutes,
        s: seconds
      }
    )
    setTimeout(()=>{
      SetStartTimeSlider03(StartTimeSlider03 - 1)
    },1000)
  },[StartTimeSlider03])
  
  return (
    <>
    <ContainerFull className="Slider03 GapsItemHomePage">
        <ContainerFluid>
            <Flexbox12idiv className="TitleSlider03">
              <Flexbox12idiv>
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg" />
                <ImgIconSlider03 src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg"/>
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg"/>
              </Flexbox12idiv>
              <Flexbox12idiv alignitems="center">
                <TimeCountDowSlider03>{TimeSlider03.h}</TimeCountDowSlider03>
                <p>:</p>
                <TimeCountDowSlider03>{TimeSlider03.m}</TimeCountDowSlider03>
                <p>:</p>
                <TimeCountDowSlider03>{TimeSlider03.s}</TimeCountDowSlider03>
                <Flexbox12idiv alignItems="center" >
                  <AiOutlineRight></AiOutlineRight>
                </Flexbox12idiv>
              </Flexbox12idiv>
            </Flexbox12idiv>
            <Swiper
              slidesPerView={6}
              slidesPerGroup={6}
              navigation={true}
              loop={false}
              loopFillGroupWithBlank={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {
               sliderElement
              }
            </Swiper>
        </ContainerFluid>
    </ContainerFull>
    </>
  );
}
export default Slider03;