import {React, useRef, useState, useEffect, useReducer} from "react";
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
    const [sliderPage, setSliderPage] = useState()

    useEffect(()=>{
        //console.log(setWitdh.current.children[0].offsetWidth)
        const lenghtSliderBox = setWitdh.current.children.length;
        const childrenSliderBox = setWitdh.current.children;
        for( let i = 0 ; i < lenghtSliderBox ; i++){
            setwidthSlider01(prevState => prevState + childrenSliderBox[i].offsetWidth) ;
        }
        setwidthSlider01(prevState => prevState -10000)
    },[])
    useEffect(()=>{
        //console.log(takeWitdh.current.offsetWidth)
        if(indexSlider01 == 1){
            setWitdh.current.style.marginLeft = 0
            btnNext.current.style.display = "none"
            btnPrev.current.style.display = ""
        }else{
            setWitdh.current.style.marginLeft = `-${takeWitdh.current.offsetWidth}px`
            btnPrev.current.style.display = "none"
            btnNext.current.style.display = ""
        }
    },[indexSlider01])
    const checkBtnFC = (state, action ) => {
        switch(action){
            case 'NEXT': 
            return setIndexSlider01(indexSlider01 + 1 )
            case 'PREV':
            return setIndexSlider01(indexSlider01 - 1 )
        }
    }
    const [btnChage, checkBtn] = useReducer(checkBtnFC , 1)
    return (
        <>
            <ContainerFull className="Silder01FullBox">
                <ContainerFluid>
                    <Flexbox12idiv>
                        <button className="btnSlider01" ref={btnNext} onClick={() =>{checkBtn("PREV")}} ><AiOutlineLeft/></button>
                        <div ref={takeWitdh} className="SliderBoxItems" >
                            <Flexbox12iUl justyfyContent="center"  alignItems="center" ref={setWitdh} width={`${widthSlider01}px`} >
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
                        <button className="btnSlider01" ref={btnPrev} onClick={() =>{checkBtn("NEXT")}}><AiOutlineRight/></button>
                    </Flexbox12idiv>
                </ContainerFluid>
            </ContainerFull>
        </>
    )
}
export default Silder01;