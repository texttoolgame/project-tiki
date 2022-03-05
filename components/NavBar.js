import React, {useState} from "react";
import {FlexboxUl, Gird02li, Gird03li, Gird07li, Flexboxdiv, Gird02div, Gird06div, Gird04div, Gird08div, Gird04divOffset } from "../styles/GirdComponents12";
import { AiOutlineSearch, AiOutlineUser, AiFillCaretDown, AiOutlineShoppingCart, AiOutlineHome,AiOutlineGoogle, AiFillFacebook, AiFillGithub, AiOutlineClose, AiOutlineLeft} from "react-icons/ai";
import { ContainerFull, ContainerFluid, } from "../styles/StyledComponents.js";
function NavBar() {
    const [classLoginForm, setClassLoginForm] = useState();
    const [openLoginEmail, setOpenloginEmail] = useState();
    const fcOpenLoginEmail = ()=>{
        setOpenloginEmail(true)
    }
    const fcCloseloginEmail = ()=>{
        setOpenloginEmail()
    }
    const openFormLogin = () =>{
        setClassLoginForm(true)
    }
    const closeFormLogin = ()=> {
        setClassLoginForm();
        setOpenloginEmail();
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
                <div className={`loginFormBox ${classLoginForm ? 'loginFormBoxOpen' : ''}`} > 
                    <Gird06div>
                        <Flexboxdiv flexDecoration='column'>
                            <Flexboxdiv className="formBoxLogin">
                                <Gird08div className={`formLoginByGmailBox ${openLoginEmail ? 'formLoginBoxEmailOpen' : 'formLoginBoxEmailClose'}`}>
                                    <Flexboxdiv flexDecoration="column" className="formLoginByGmail">
                                        <button onClick={fcCloseloginEmail}>
                                            <AiOutlineLeft/>
                                        </button>
                                        <div className="formLoginBoxEmail">
                                            <h2 >
                                                Đăng nhập bằng email
                                            </h2>
                                            <p>
                                                Nhập email và mật khẩu tài khoản Tiki
                                            </p>
                                            <form>
                                                <input className="inputLogin" placeholder="acb@email.com"></input>
                                                <br/>
                                                <input className="inputLogin" placeholder="mật khẩu"></input>
                                                <br/>
                                                <input className="submitLoginBtn textWhite" type='submit' value='Đăng Nhập'></input>
                                            </form>
                                            <div className="fontSize12px">
                                                <a>Quên mật khẩu ?</a>
                                                <p>
                                                    Chưa có tài khoản ?
                                                    <a> Tạo tài khoản</a>
                                                </p>
                                            </div>
                                        </div>
                                    </Flexboxdiv>
                                </Gird08div>
                                <Gird08div className={`formLoginDefault ${openLoginEmail ? 'formloginDefaultClose' : ''}`}>
                                    <Flexboxdiv padding="20px 40px 0 40px" flexDecoration="column">
                                        <div className='formLoginBoxDefault'>
                                            <h2>
                                                Xin Chào,
                                            </h2>
                                            <p>
                                                Đăng nhập hoặc Tạo tài khoản
                                            </p>
                                            <form>
                                                <input className="inputLogin" placeholder="Số điện thoại"></input>
                                                <br/>
                                                <input className="submitLoginBtn textWhite" type='submit' value='Tiếp Tục'></input>
                                            </form>
                                            <button onClick={fcOpenLoginEmail} className="loginByGmailText">
                                                Đăng nhập bằng Gmail
                                            </button>
                                        </div>
                                        <Flexboxdiv padding="40px 0" justifyItem="center" alignItem="center" flexDecoration="column">
                                            <div className="moreLoginbox">
                                                <div className="moreLogin">
                                                    <p></p>
                                                    <p>
                                                        Hoặc tiếp tục bằng
                                                    </p>
                                                </div>
                                            </div>
                                            <Flexboxdiv className="iconLoginBox" justyfyContent="center">
                                                <AiFillFacebook/>
                                                <AiOutlineGoogle/>
                                                <AiFillGithub/>
                                            </Flexboxdiv>
                                            <p className="fontSize12px">
                                                Bằng việc tiếp tục, bạn đã chấp nhận
                                                <a> điều khoản sử dụng</a>
                                            </p>
                                        </Flexboxdiv>
                                    </Flexboxdiv>
                                </Gird08div>
                                <Gird04div className="imgAdsLogin">
                                    Mua sắm tại tiki
                                </Gird04div>
                            <button  className="btnCloseFormLogin" onClick={closeFormLogin}>
                                <AiOutlineClose/>
                            </button>    
                            </Flexboxdiv>
                        </Flexboxdiv>
                    </Gird06div>
                </div>
            </ContainerFull>
        </>
    )
}
export default NavBar ;