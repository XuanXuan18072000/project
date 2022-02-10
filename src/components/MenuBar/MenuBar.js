import React, { Component } from 'react';
import style from "../MenuBar/menubar_style.module.css";
import logo_alta from "../../static/img/logo_alta.png";
import logo_dashboard from "../../static/img/logo_dashboard.svg";
import logo_device from "../../static/img/logo_device.svg";
import logo_level from "../../static/img/logo_level.svg";
import logo_service from "../../static/img/logo_service.svg";
import logo_report from "../../static/img/logo_report.svg";
import logo_logout from "../../static/img/logo_logout.svg";
import logo_setting from "../../static/img/logo_setting.svg";
import img_user_account from "../../static/img/img_user_account.png"


import { useHistory } from 'react-router-dom';


export default function MenuBar() {
        const history = useHistory();
        return (
                <div className={style.container}>
                    <div className={style.left_container}>
                        <div className={style.logo_login}>
                            <img src={logo_alta} alt="logo_alta"/>
                        </div>
                        <div className={style.vertical_navbar}>
                            <ul>
                                <li className={style.menu_tag} ><div className={style.dashboard_active}><img src={logo_dashboard} alt='logo_dashboard'/><a>Dashboard</a></div></li>
                                <li className={style.menu_tag}><div ><img src={logo_device} alt='logo_device'/><a >Thiết Bị</a></div></li>
                                <li className={style.menu_tag}><div ><img src={logo_service} alt='logo_service'/><a >Dịch vụ</a></div></li>
                                <li className={style.menu_tag}><div ><img src={logo_level} alt='logo_level'/><a >Cấp số</a></div></li>
                                <li className={style.menu_tag}><div ><img src={logo_report} alt='logo_report'/><a>Báo cáo</a></div></li>
                                <li className={style.menu_tag}><div ><img src={logo_setting} alt='logo_setting'/><a>Cài đặt hệ thống</a><span className='fas fa-ellipsis-v fa-xs'></span></div></li>
                                <li className={style.menu_tag}><div  onClick={() => history.push('/signin')} className={style.logout_button}><img src={logo_logout} alt='logo_logout'/><a>Đăng xuất</a>&nbsp;&nbsp;</div></li> 
                            </ul>
                        </div>
                    </div>
                </div>
        );
    }