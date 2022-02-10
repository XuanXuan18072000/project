import React, { Component } from 'react';
import style from './style/reset_pw_style.module.css';
import { useHistory } from 'react-router-dom';
import { useState } from "react";

export default function Reset_PW () {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const history = useHistory();
        return (
            <div className={style.container}>
                <div className={style.left_content}>
                    <div className={style.top_content}>
                        <div className={style.logo_alta}>
                            <img src={require('./style/logo_alta.png')} />
                        </div>
                    </div>
                    <div className={style.login_form}>
                        <div className={style.reset_pw_title}>
                            <p>Đặt lại mật khẩu</p>
                        </div>
                        <div className={style.login_username_title}>
                            <label>Mật khẩu </label>
                        </div>
                        <div className={style.login_username_input}>
                            <input type={passwordShown ? "text" : "password"} className={style.input_username} placeholder='****************' ></input><p onClick={togglePassword} className={`${style.eye_icon_top} fas fa-eye-slash`}></p>
                        </div>
                        <div className={style.login_password_title} >
                            <label>Nhập lại mật khẩu </label>
                        </div>
                        <div className={style.login_password_input}>
                            <input type={passwordShown ? "text" : "password"}    className={style.input_password} placeholder='****************' ></input><p onClick={togglePassword} className={`${style.eye_icon_bottom} fas fa-eye-slash`}></p>
                        </div>
                        <div className={style.login_button}>
                            <button onClick={() => history.push('/signin')} className={style.login_button_signin}>Xác nhận</button>
                        </div>
                    </div>
                </div>
                <div className={style.right_content}>
                    <img className={style.img_bg_gruop1} src={require('./style/bg_gruop1.png')} />
                </div>
            </div>
        );
    }
