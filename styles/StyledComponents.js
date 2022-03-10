import styled from "styled-components";
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
    padding: 0 10px;
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
`;
