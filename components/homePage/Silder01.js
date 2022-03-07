import react from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import {ContainerFull, ContainerFluid} from "../../styles/StyledComponents"
import {Flexbox12idiv, Flexbox12iUl} from "../../styles/GirdComponents12"

function Silder01(){
    return (
        <>
            <ContainerFull className="Silder01FullBox">
                <ContainerFluid>
                    <Flexbox12idiv>
                        <button><AiOutlineLeft></AiOutlineLeft></button>
                        <Flexbox12iUl>
                            <li>helo</li>
                        </Flexbox12iUl>
                        <button><AiOutlineRight/></button>
                    </Flexbox12idiv>
                    
                </ContainerFluid>
            </ContainerFull>
        </>
    )
}
export default Silder01;