import styled from "styled-components";
import { keyframes } from "styled-components";
// function contruction
const FooterLiOfAItemsFc = ({className, children}) => (
    <FooterLiItems className={className}>
        <FooterAItems>
            {children}
        </FooterAItems>
    </FooterLiItems>
)
const FooterLiOfH4ItemsFc = ({className, children}) => (
    <FooterLiItems className={className}>
        <FooterH4Items>
            {children}
        </FooterH4Items>
    </FooterLiItems>
)
const FooterSubTitleItemFc = ({className, children}) => (
    <FooterLiItems className={className}>
        <FooterSubTitleH5Item>
            {children}
        </FooterSubTitleH5Item>
    </FooterLiItems>
)
const Slider01LiofAFc = ({className, children}) =>(
    <Slider01LiItem className={className}>
        <Slider01AItem>
            {children}
        </Slider01AItem>
    </Slider01LiItem>
)
//styled
export const ContainerFull = styled.div`
    width: 100vw;
`
export const ContainerFluid = styled.div`
    width: 1200px;
    margin: 0 auto;
`
export const FooterH4Items = styled.h4`
    font-size: 16px;
    color: black;
`
export const FooterLiItems = styled.li`
    font-size: 12px;
    color: #808089;
    padding: 5px 0;
`
export const FooterAItems = styled.a`
    text-decoration: none;
    &:hover{
        text-decoration: underline
    }
`   
export const FooterAItemDefaultColor = styled(FooterAItems)`
    color: #0b74e5;
`
export const FooterAItemList = styled(FooterAItems)`
    &:not(:last-child){
        &::after{
            content: " / ";
        }
    }
`
export const FooterLiOfAItem = styled(FooterLiOfAItemsFc)`
`
export const FooterLiOfH4Item = styled(FooterLiOfH4ItemsFc)`
`
export const FooterSubTitleH5Item =styled.h5`
    color: #808089;
    font-size: 14px;
`
export const FooterSubTitleLiOfH5Item = styled(FooterSubTitleItemFc)`
`
export const Slider01AItem = styled.a`
    font-size:14px;
    color: black;
    max-height: 20px;
    width: 100%;
    align-items: center;
    `
export const Slider01LiItem = styled.li`
    width: auto;
    padding: 0 20px;
    &:first-child {
        padding-left: 0;
    }
    &:first-child {
        padding-right: 0;
    }
`
export const Slider01LiofAItem = styled(Slider01LiofAFc)`
`
export const Button = styled.button`
    display: inline-block;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: block;
`
export const BoxItemSlider03 = styled.div`
    width: 100%;
    height: 275px;
    padding: 10px;
    &:hover{
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        z-index: 5;
    }
`
export const ImgBoxSlider03 = styled.div`
    width: 100%;
    height: auto;
    position: relative;
`
export const MainImgSlider03 = styled.img`
    background-image: url("${prop => prop.src}");
    width: 100%;
    height: 100%;
    object-fit : cover;
`
export const SubImgSlider03 = styled.img`
    background-image: url("https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png");
    width: auto;
    position: absolute;
    bottom: 5px;
    left: 0;
    z-index: 5;
    height: 20px;
    background-size: cover;
    width: 50%;
`
export const PriceProductSlider03 = styled.h3`
    color: #ff424e;
`
export const SaleProductSlider03 = styled.p`
    color: #ff424e;
    border: 1px solid #ff424e;
    backgroud-color: #fff0f1;
    border-radius: 2px;
    font-size: 14px;
    align-items: center;
    padding: 0 5px;
    height: 20px;
`
export const CurrencyProductSlider03 = styled.h3`
    color: #ff424e;
    text-decoration: solid #ff424e underline;
    padding: 0 5px;
`
export const StatusProductBox = styled.div`
    height: 20px;
    width: 100%;
    position: relative;
`
export const StatusProductDivSlider03 = styled.div`
    width: ${prop => prop.witdh};
    height: inherit;
    background-color: #ff424e;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left:0;
`
export const ProductDivSlider03 = styled.div`
    width: inherit;
    height: inherit;
    background-color: rgba(255, 170, 175, 1);
    border-radius: 25px;
`

export const AnimationIconSlider03 = keyframes`
    0% {transform: scale(1,1);}	
    50% {
        transform: scale(2,2);
        opacity: 0.2
    }
    100% {transform: scale(1,1);}
`
export const ImgIconSlider03 = styled.img`
    animation: ${AnimationIconSlider03} 1s infinite;
    witdh: 20px;
    height: auto;
`
export const TimeCountDowSlider03 = styled.p`
    padding: 5px;
    background-color:#ff424e;
    corlor: white;
`