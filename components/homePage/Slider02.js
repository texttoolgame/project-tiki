import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import {ContainerFull, ContainerFluid} from "../../styles/StyledComponents"
import {Flexbox12idiv, Gird12i08div, Gird12i04div} from "../../styles/GirdComponents12"
const arrImg = [
    "https://salt.tikicdn.com/cache/w1080/ts/banner/34/f7/9c/89dd52030b19c648757d6029efe206ad.png.webp",
    "https://salt.tikicdn.com/cache/w1080/ts/banner/09/9d/9d/afbf7435009ac092ee8a9fb931548a27.png.webp",
    "https://salt.tikicdn.com/cache/w1080/ts/banner/2e/47/02/ca8feffafaa9cb3a61d7f20e725b0d26.png.webp",
    "https://salt.tikicdn.com/cache/w1080/ts/banner/9b/63/18/e2e887c858f0fd297a590b9c82dc8847.png.webp",
    "https://salt.tikicdn.com/cache/w1080/ts/banner/57/94/ce/26365d4b4bbdd5782826a7a36ddc94e2.png.webp",
    "https://salt.tikicdn.com/cache/w1080/ts/banner/c2/17/22/a1851049c5e0256284936fb43ff1bb96.png.webp",
    "https://salt.tikicdn.com/cache/w1080/ts/banner/3b/9d/7a/9ac3c5c1c9e7666bf5bdd785c5eb2659.png.webp",
    "https://salt.tikicdn.com/cache/w1080/ts/banner/4f/a0/0d/7a2513c506b245fcf88f1e25101edcac.png.webp",
    "https://salt.tikicdn.com/cache/w1080/ts/banner/71/7b/38/bc5a6bd10fe7db96152c1c644b72b58e.png.webp",
    "https://salt.tikicdn.com/cache/w1080/ts/banner/3f/76/d7/62ea1734dd29def8c7754ada11e4e1c5.png.webp",
    "https://salt.tikicdn.com/cache/w1080/ts/banner/26/3d/a1/b260b37caf446a94cc1596d75dcdef59.png.webp",
    "https://salt.tikicdn.com/cache/w1080/ts/banner/82/2b/7a/e2959151e04c8fec162a6e0d7c12e799.png.webp",
    "https://salt.tikicdn.com/cache/w1080/ts/banner/f9/34/7c/df2b5ec29ca7ba6c32b2172aa3f1892e.png.webp",
    "https://salt.tikicdn.com/cache/w1080/ts/banner/92/8a/3a/0cdef566a247dafab56f4730c71596f1.png.webp",
    "https://salt.tikicdn.com/cache/w1080/ts/banner/a4/59/44/233d6a7affd693fa1f3a96302547cbca.png.webp"
]
export default function App() {
  return (
    <>
        <ContainerFull className="Slider02 GapsItemHomePage">
            <ContainerFluid>
                <Flexbox12idiv>
                    <Gird12i08div>
                        <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                        >
                        {
                            arrImg.map((Item, index) =>{
                                return(
                                    <SwiperSlide>
                                        <img
                                        src={Item}
                                        alt={`img${index}`}
                                        />
                                    </SwiperSlide>
                                ) 
                            })
                        }
                        </Swiper>
                    </Gird12i08div>
                    <Gird12i04div className="adsSlider02">
                        <img  src="https://salt.tikicdn.com/cache/w400/ts/banner/97/0b/e5/26d0ae1ca6d0baa7707d0b6c01c7312d.png.webp" />
                    </Gird12i04div>
                </Flexbox12idiv>
            </ContainerFluid>
        </ContainerFull>
        
    </>
  );
}
