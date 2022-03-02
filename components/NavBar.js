import React from "react";
import { ContainerFull, ContainerFluid } from "../styles/StyledComponents.js";
import { FlexboxUl, Grid02li, Grid03li, Grid07li, Flexboxdiv, Grid05div, Grid06div } from "../styles/GirdComponents.js"; 
import { AiOutlineSearch } from "react-icons/ai";
function NavBar() {
    return (
        <>
            <ContainerFull>
                <ContainerFluid>
                    <FlexboxUl padding=" 20px 0">
                        <Grid02li>
                            <div className="logoBox textWhite">
                                <div className="logo">
                                    TIKI
                                </div>
                                <div className="adsLogo">
                                    Free ship +
                                </div>
                            </div>
                        </Grid02li>
                        <Grid07li>
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
                        </Grid07li>
                        <Grid03li>
                            <Flexboxdiv>
                                <Flexboxdiv>
                                    <Grid05div>

                                    </Grid05div>
                                    <Grid06div>
                                        đăng nhập/đăng ký
                                        <br/>
                                        Tài khoản
                                    </Grid06div>
                                </Flexboxdiv>
                                <div>

                                </div>
                            </Flexboxdiv>
                        </Grid03li>
                    </FlexboxUl>
                </ContainerFluid>
            </ContainerFull>
        </>
    )
}
export default NavBar;