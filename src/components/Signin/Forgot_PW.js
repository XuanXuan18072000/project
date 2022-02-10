import React, { Component } from 'react';
import  style from'./style/forgot_pw_style.module.css';
import { useHistory } from 'react-router-dom';


export default function Forgot_PW () {
        const history = useHistory();
        return (
            <div className={style.container}>
                <div className={style.left_content}>
                    <div className={style.top_content}>
                        <div className={style.logo_alta}>
                            <img src={require('./style/logo_alta.png')} />
                        </div>
                    </div>
                    <div className={style.middle_content}>
                        <div className={style.forgot_pw}>
                            <div className={style.forgot_title}>
                                <p>Đặt lại mật khẩu</p>
                            </div>
                            <div className={style.forgot_description}>
                                <p>Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
                            </div>
                            <div className={style.forgot_input}>
                                <input />
                            </div>  
                            <div className={style.forgot_actions}>
                                <div className={style.left_button}>
                                    <button onClick={() => history.push('/signin')}>Hủy</button>
                                </div>
                                <div className={style.right_button}>
                                    <button onClick={() => history.push('/reset_pw')}>Tiếp tục</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.right_content}>
                    <img className={style.img_bg_gruop1} src={require('./style/bg_gruop1.png')} />
                </div>
            </div>
        );
    }
