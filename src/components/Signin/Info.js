import React, { Component } from 'react';
import style from "./style/info_style.module.css";
import logo_alta from "./style/logo_alta.png";
import logo_dashboard from "./style/logo_dashboard.svg";
import logo_device from "./style/logo_device.svg";
import logo_level from "./style/logo_level.svg";
import logo_service from "./style/logo_service.svg";
import logo_report from "./style/logo_report.svg";
import logo_logout from "./style/logo_logout.svg";
import logo_setting from "./style/logo_setting.svg";
import img_user_account from "./style/img_user_account.png"
import { useHistory } from 'react-router-dom';


export default function Info() {
        const history = useHistory();
        return (
            <div className={style.total_container}>
                <div className={style.container}>
                        <div className={style.left_container}>
                            <div className={style.logo_login}>
                                <img src={logo_alta} alt="logo_alta"/>
                            </div>
                            <div className={style.vertical_navbar}>
                                <ul>
                                    <li><div><img src={logo_dashboard} alt='logo_dashboard'/><a>Dashboard</a></div></li>
                                    <li><div><img src={logo_device} alt='logo_device'/><a >Thiết Bị</a></div></li>
                                    <li><div><img src={logo_service} alt='logo_service'/><a >Dịch vụ</a></div></li>
                                    <li><div><img src={logo_level} alt='logo_level'/><a >Cấp số</a></div></li>
                                    <li><div><img src={logo_report} alt='logo_report'/><a>Báo cáo</a></div></li>
                                    <li><div><img src={logo_setting} alt='logo_setting'/><a>Cài đặt hệ thống</a><span className='fas fa-ellipsis-v fa-xs'></span></div></li>
                                    <li><div  onClick={() => history.push('/signin')} className={style.logout_button}><img src={logo_logout} alt='logo_logout'/><a>Đăng xuất</a>&nbsp;&nbsp;</div></li> 
                                </ul>
                            </div>
                        </div>
                    <div className={style.right_container}>
                        <div className={style.top_content}>
                            <div className={style.left_title}>
                                <p> Thông tin cá nhân</p>
                            </div>
                            <div className={style.right_title}>
                                
                                {/* <div className={style.alarm_button}>
                                    <p className={`${style.alarm_button_icon} fas fa-bell`}></p>
                                    <div class={style.dropdown_content}>
                                        <p>Hello World!</p>
                                    </div>
                                </div> */}
                                <div className={style.user_account}>
                                    <div>
                                        <img src={img_user_account} width={40} height={40}></img>
                                        <p>Xin chào <br/><b>Lê Quỳnh Ái Vân</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.middle_content}>
                            <div className={style.left_title}>
                                <div className={style.top_img}>
                                    <img src={img_user_account} width={248} height={248}></img><p className={`${style.logo_camera} fas fa-camera`}></p>
                                </div>
                                <div className={style.bottom_username}>
                                    <p>Lê Quỳnh Ái Vân</p>
                                </div>
                            </div>
                            <div className={style.middle_title}>
                                <div className={style.name}>
                                    <div className={style.name_title}>
                                        <p>Tên người dùng</p>
                                    </div>
                                    <div>
                                        <input placeholder='Lê Quỳnh Ái Vân'/>
                                    </div>
                                </div>
                                <div className={style.phone}>
                                    <div className={style.phone_title}>
                                        <p>Số Điện Thoại</p>
                                    </div>
                                    <div>
                                        <input placeholder='0767375921'/>
                                    </div>
                                </div>
                                <div className={style.email}>
                                    <div className={style.email_title}>
                                        <p>Email</p>
                                    </div>
                                    <div>
                                        <input placeholder='adminSSO1@domain.com'/>
                                    </div>
                                </div>
                            </div>
                            <div className={style.right_title}>
                                <div className={style.username}>
                                    <div className={style.username_title}>
                                        <p>Tên đăng nhập</p>
                                    </div>
                                    <div>
                                        <input placeholder='lequynhaivan01'/>
                                    </div>
                                </div>
                                <div className={style.password}>
                                    <div className={style.password_title}>
                                        <p>Mật khẩu</p>
                                    </div>
                                    <div>
                                        <input placeholder='311940211'/>
                                    </div>
                                </div>
                                <div className={style.role}>
                                    <div className={style.role_title}>
                                        <p>Vai trò</p>
                                    </div>
                                    <div>
                                        <input placeholder='Kế toán'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }