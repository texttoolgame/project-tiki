import React, {useState} from "react";
import { AiOutlineSearch, AiOutlineUser, AiFillCaretDown, AiOutlineShoppingCart, AiOutlineHome} from "react-icons/ai";
import { ContainerFull, ContainerFluid, FlexboxUl, Gird02li, Gird03li, Gird07li, Flexboxdiv, Gird02div, Gird06div, Gird04div, Gird08div, Gird04divOffset  } from "../styles/StyledComponents.js";
function NavBar() {
    const [classLoginForm, setClassLoginForm] = useState();
    const openFormLogin = () =>{
        setClassLoginForm(true)
    }
    const closeFormLogin = ()=> {
        setClassLoginForm()
    }
    return (
        <>
            <ContainerFull className="Navbox">
                <ContainerFluid>
                    <FlexboxUl padding=" 20px 0" flexDecoration="row">
                        <Gird02li>
                            <div className="logoBox textWhite">
                                <div className="logo">
                                    TIKI
                                </div>
                                <div className="adsLogo">
                                    Free ship +
                                </div>
                            </div>
                        </Gird02li>
                        <Gird07li>
                            <div className="SearchBox">
                                <form className="formSearch">
                                    <input className="inputSeacrh" name="inputSeacrh" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..." />
                                    <button className="btnSearch textWhite">
                                        <AiOutlineSearch/>
                                        Tìm kiếm
                                    </button>
                                </form>
                                <div className="adsFormSearch fontSize12px textWhite">
                                    <a href="">trái cây</a>
                                    <a href="">thịt, trứng</a>
                                    <a href="">rau củ quả</a>
                                    <a href="">sữa, bơ, phô mai</a>
                                    <a href="">hải sản</a>
                                    <a href="">gạo, mì ăn liền</a>
                                    <a href="">đồ uống, bia rượu</a>
                                    <a href="">bánh kẹo</a>
                                </div>
                            </div>
                        </Gird07li>
                        
                        <Gird03li className="textWhite">
                            <Flexboxdiv className="loginBox">
                                <button onClick={openFormLogin}  className="btnLoginForm"></button>
                                <Gird02div className="iconUserAndCart">
                                    <AiOutlineUser/>
                                </Gird02div>
                                <Gird06div>
                                    <div className="linkLogin fontSize12px">
                                        Đăng Nhập/Đăng Ký
                                    </div>
                                    <div clas>
                                        Tài khoản
                                        <AiFillCaretDown/>
                                    </div>
                                </Gird06div>
                                <Gird04div>
                                    <Flexboxdiv flexDecoration="space-between">
                                        <Gird06div className="iconUserAndCart">
                                            <AiOutlineShoppingCart/>
                                            <p className="countProductIncart fontSize12px">0</p>
                                        </Gird06div>
                                        <Gird06div className="cartTitle fontSize12px">
                                            Giỏ hàng
                                        </Gird06div>
                                    </Flexboxdiv>
                                </Gird04div>
                            </Flexboxdiv>
                            <Flexboxdiv justyfyContent="space-between">
                                <Gird04divOffset></Gird04divOffset>
                                <Gird06div className="resgiterSeller">
                                    <AiOutlineHome/>
                                    <p>
                                        Bán Hàng Cùng TiKi
                                    </p>
                                </Gird06div>
                            </Flexboxdiv>
                        </Gird03li>
                    </FlexboxUl>
                </ContainerFluid>
                <div onClick={closeFormLogin}  className={`loginFormBox ${classLoginForm ? 'loginFormBoxOpen' : ''}`}>
                    <Gird08div>
                        <Flexboxdiv>
                            <Flexboxdiv className="formBoxLogin">
                                <Gird08div>
                                    <h1>
                                        Xin Chào
                                    </h1>
                                </Gird08div>
                                <Gird04div>
                                    Mua sắm tại tiki
                                </Gird04div>
                            </Flexboxdiv>
                        </Flexboxdiv>
                    </Gird08div>
                   
                </div>
            </ContainerFull>
        </>
    )
}
export default NavBar ;