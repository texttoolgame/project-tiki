import React from "react";
import { FlexboxUl, Gird02li, Gird03li, Gird07li, Flexboxdiv, Gird02div, Gird06div, Gird04div, Gird05div  } from "../styles/GirdComponents.js"; 
import { ContainerFull, ContainerFluid } from "../styles/StyledComponents.js";
import { AiOutlineSearch, AiOutlineUser, AiFillCaretDown, AiOutlineShoppingCart} from "react-icons/ai";

function NavBar() {
    return (
        <>
            <ContainerFull>
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
                                <div className="adsFormSearch">
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
                                <Gird02div className="iconUser">
                                    <AiOutlineUser/>
                                </Gird02div>
                                <Gird06div>
                                    <div className="linkLogin">
                                        Đăng Nhập/Đăng Ký
                                    </div>
                                    <div clas>
                                        Tài khoản
                                        <AiFillCaretDown/>
                                    </div>
                                </Gird06div>
                                <Gird04div>
                                    <Flexboxdiv flexDecoration="space-between">
                                        <Gird06div className="iconUser">
                                            <AiOutlineShoppingCart/>
                                        </Gird06div>
                                        <Gird06div className="  ">
                                            Giỏ hàng
                                        </Gird06div>
                                    </Flexboxdiv>
                                </Gird04div>
                            </Flexboxdiv>
                            <div>
                                bán hàng cùng tiki
                            </div>
                        </Gird03li>
                    </FlexboxUl>
                </ContainerFluid>
            </ContainerFull>
        </>
    )
}
export default NavBar;