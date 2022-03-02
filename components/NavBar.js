import React from "react";
import { FlexboxUl, Gird02li, Gird03li, Gird07li, Flexboxdiv, Gird05div, Gird02div } from "../styles/GirdComponents.js"; 
import { ContainerFull, ContainerFluid } from "../styles/StyledComponents.js";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

function NavBar() {
    return (
        <>
            <ContainerFull>
                <ContainerFluid>
                    <FlexboxUl padding=" 20px 0">
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
                        <Gird03li>
                            <Flexboxdiv>
                                <Flexboxdiv>
                                    <Gird02div>
                                        <AiOutlineUser/>
                                    </Gird02div>
                                    
                                    <Gird05div>
                                        đăng nhập/đăng ký
                                        <br/>
                                        Tài khoản
                                    </Gird05div>

                                    <Gird05div>
                                        Giỏ hàng
                                    </Gird05div>
                                </Flexboxdiv>
                                    <div>
                                        bán hàng cùng tiki
                                    </div>
                            </Flexboxdiv>
                        </Gird03li>
                    </FlexboxUl>
                </ContainerFluid>
            </ContainerFull>
        </>
    )
}
export default NavBar;