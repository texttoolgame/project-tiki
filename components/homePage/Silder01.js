import {React, useRef, useState, useEffect} from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import {ContainerFull, ContainerFluid, Slider01LiofAItem} from "../../styles/StyledComponents"
import {Flexbox12idiv, Flexbox12iUl, } from "../../styles/GirdComponents12"

function Silder01(){
    const setWitdh = useRef(null)
    const takeWitdh = useRef(null)
    const btnNext = useRef(null)
    const btnPrev = useRef(null)
    const [widthSlider01, setwidthSlider01] = useState(10000);
    const [indexSlider01, setIndexSlider01] = useState(1)
    
    useEffect(()=>{
        //console.log(setWitdh.current.children[0].offsetWidth)
        const lenghtSliderBox = setWitdh.current.children.length;
        const childrenSliderBox = setWitdh.current.children;
        for( let i = 0 ; i < lenghtSliderBox ; i++){
            setwidthSlider01(prevState => prevState + childrenSliderBox[i].offsetWidth) ;
        }
    },[])
    // useEffect(()=>{
    //     btnNext.current.style.display = "none"
    // },[indexSlider01])
    const nextSlider01 = () => {
        setIndexSlider01(indexSlider01 + 1)
    }
    const prevtSlider01 = () => {
        setIndexSlider01(indexSlider01 - 1)
    }
    return (
        <>
            <ContainerFull className="Silder01FullBox">
                <ContainerFluid>
                    <Flexbox12idiv>
                        <button ref={btnNext} onClick={nextSlider01} ><AiOutlineLeft/></button>
                        <div ref={takeWitdh} className="SliderBoxItems" >
                            <Flexbox12iUl ref={setWitdh} width={`${widthSlider01}px`} >
                                <Slider01LiofAItem>Thịt, Rau Củ</Slider01LiofAItem>
                                <Slider01LiofAItem>Bách Hóa</Slider01LiofAItem>
                                <Slider01LiofAItem>Nhà Cửa</Slider01LiofAItem>
                                <Slider01LiofAItem>Điện Tử</Slider01LiofAItem>
                                <Slider01LiofAItem>Thiết Bị Số</Slider01LiofAItem>
                                <Slider01LiofAItem>Điện Thoại</Slider01LiofAItem>
                                <Slider01LiofAItem>Mẹ {`&`} bé</Slider01LiofAItem>
                                <Slider01LiofAItem>Làm đẹp</Slider01LiofAItem>
                                <Slider01LiofAItem>Gia Dụng</Slider01LiofAItem>
                                <Slider01LiofAItem>Thời Trang Nữ</Slider01LiofAItem>
                                <Slider01LiofAItem>Thời Trang Nam</Slider01LiofAItem>
                                <Slider01LiofAItem>Giày Nữ</Slider01LiofAItem>
                                <Slider01LiofAItem>Túi Nữ</Slider01LiofAItem>
                                <Slider01LiofAItem>Giày Nam</Slider01LiofAItem>
                                <Slider01LiofAItem>Túi Nam</Slider01LiofAItem>
                                <Slider01LiofAItem>Balo {`&`} Vali</Slider01LiofAItem>
                                <Slider01LiofAItem>Phụ kiện</Slider01LiofAItem>
                                <Slider01LiofAItem>Đồng Hồ</Slider01LiofAItem>
                                <Slider01LiofAItem>LapTop</Slider01LiofAItem>
                                <Slider01LiofAItem>Quốc Tế</Slider01LiofAItem>
                                <Slider01LiofAItem>Voucher</Slider01LiofAItem>
                                <Slider01LiofAItem>Xe</Slider01LiofAItem>
                                <Slider01LiofAItem>Sách</Slider01LiofAItem>
                                <Slider01LiofAItem>Thể Thao</Slider01LiofAItem>
                                <Slider01LiofAItem>Máy Ảnh</Slider01LiofAItem>
                            </Flexbox12iUl>
                        </div>
                        <button ref={btnPrev} onClick={prevtSlider01}><AiOutlineRight/></button>
                    </Flexbox12idiv>
                </ContainerFluid>
            </ContainerFull>
        </>
    )
}
export default Silder01;