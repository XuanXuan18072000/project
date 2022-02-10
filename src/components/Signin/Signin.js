import React from 'react';
import bg_gruop from "./style/bg_gruop.png";
import logo_alta from "./style/logo_alta.png";
import style from "./style/signin_style.module.css"
import { useState } from "react";
import { useHistory } from 'react-router-dom';


export default function Signin() {
        const [passwordShown, setPasswordShown] = useState(false);
        const history = useHistory();
        const togglePassword = () => {
            setPasswordShown(!passwordShown);
        };
        return (
            <div className={style.App}>
                <div className={style.container}>
                    <div className={style.left_container}>
                        <div className={style.left_login_form}>
                            <div className={style.logo_login}>
                                <img src={logo_alta} alt="logo_alta" width={170} height={136}/>
                            </div>
                            <form>
                                <div className={style.login_form}>
                                    <div className={style.login_username_title}>
                                        <label>Tên đăng nhập <span>*</span></label>
                                    </div>
                                    <div className={style.login_username_input}>
                                        <input className={style.input_username} placeholder='lequynhaivan01' required></input>
                                    </div>
                                    <div className={style.login_password_title} >
                                        <label>Mật khẩu <span>*</span></label>
                                    </div>
                                    <div className={style.login_password_input}>
                                        <input type={passwordShown ? "text" : "password"} className={style.input_password} placeholder='213152624' Required></input><p onClick={togglePassword} className={`${style.eye_icon} fas fa-eye-slash`}></p>
                                    </div>
                                    <div className={style.login_forgot_password}>
                                        <p onClick={() => history.push('/forgot_pw')} className={style.forgot_password_title}>Quên mật khẩu?</p>
                                    </div>
                                    <div className={style.login_button}>
                                        <button type='submit' onClick={() => history.push('/dashboard')} className={style.login_button_signin}>Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={style.right_container}>
                        <div className={style.right_content}>
                            <div className={style.right_image_background}>
                                <img src={bg_gruop} alt="bg_gruop" width={605} height={614.06}/>
                            </div>
                            <div className={style.right_title_background}>
                                <p className={style.right_top_title}>Hệ thống <br/><b className={style.right_bottom_title}>QUẢN LÝ XẾP HÀNG</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

