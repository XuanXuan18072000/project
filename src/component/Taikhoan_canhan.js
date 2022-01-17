import React from 'react';
import "./style_taikhoancn.css"
import logo_alta from "./img/Logoalta.png";
import logo_dashboard from "./img/logo_dashboard.png";
import logo_device from "./img/logo_device.png";
import logo_level from "./img/logo_level.png";
import logo_service from "./img/logo_service.png";
import logo_report from "./img/logo_report.png";
import logo_logout from "./img/logo_logout.png";
import logo_setting from "./img/logo_setting.png";
import hinh_canhan from "./img/hinh_canhan.png"


    const Taikhoan_canhan = function(props){
        return(
            <div className="trangdangnhap">
                <div className='container'>
                    <div className='left-container'>
                        <div className='logo-login'>
                            <img src={logo_alta} alt="logo_alta"/>
                        </div>
                        <div className='vertical-navbar'>
                            <ul>
                                <li><div><img src={logo_dashboard} alt='logo_dashboard'/><a>Dashboard</a></div></li>
                                <li><div><img src={logo_device} alt='logo_device'/><a >Thiết Bị</a></div></li>
                                <li><div><img src={logo_service} alt='logo_service'/><a >Dịch vụ</a></div></li>
                                <li><div><img src={logo_level} alt='logo_level'/><a >Cấp số</a></div></li>
                                <li><div><img src={logo_report} alt='logo_report'/><a>Báo cáo</a></div></li>
                                <li><div><img src={logo_setting} alt='logo_setting'/><a>Cài đặt hệ thống</a><span className='fas fa-ellipsis-v fa-xs'></span></div></li>
                                <li><div className='logout-button'><img src={logo_logout} alt='logo_logout'/><a>Đăng xuất</a>&nbsp;&nbsp;</div></li> 
                            </ul>
                        </div>
                    </div>
                    <div className='right-container'>
                        <div className='top-content'>
                            <div className='left-title'>
                                <p> Thông tin cá nhân</p>
                            </div>
                            <div className='right-title'>
                                <div className='alarm-button'>
                                    <div>
                                        <p className='fas fa-bell'></p>
                                    </div>
                                </div>
                                <div className='user-account'>
                                    <div>
                                        <img src={hinh_canhan} width={40} height={40}></img>
                                        <p>Xin chào <br/><b>Lê Quỳnh Ái Vân</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='middle-content'>
                            <div className='left-title'>
                                <div className='top-img'>
                                    <img src={hinh_canhan} width={248} height={248}></img><p className='logo-camera fas fa-camera'></p>
                                </div>
                                <div className='bottom-username'>
                                    <p>Lê Quỳnh Ái Vân</p>
                                </div>
                            </div>
                            <div className='middle-title'>
                                <div className='name'>
                                    <div className='name-title'>
                                        <p>Tên người dùng</p>
                                    </div>
                                    <div>
                                        <input placeholder='Lê Quỳnh Ái Vân'/>
                                    </div>
                                </div>
                                <div className='phone'>
                                    <div className='phone-title'>
                                        <p>Số Điện Thoại</p>
                                    </div>
                                    <div>
                                        <input placeholder='0767375921'/>
                                    </div>
                                </div>
                                <div className='email'>
                                    <div className='email-title'>
                                        <p>Email</p>
                                    </div>
                                    <div>
                                        <input placeholder='adminSSO1@domain.com'/>
                                    </div>
                                </div>
                            </div>
                            <div className='right-title'>
                                <div className='username'>
                                    <div className='username-title'>
                                        <p>Tên đăng nhập</p>
                                    </div>
                                    <div>
                                        <input placeholder='lequynhaivan01'/>
                                    </div>
                                </div>
                                <div className='password'>
                                    <div className='password-title'>
                                        <p>Mật khẩu</p>
                                    </div>
                                    <div>
                                        <input placeholder='311940211'/>
                                    </div>
                                </div>
                                <div className='role'>
                                    <div className='role-title'>
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
                
        )
    }

export default Taikhoan_canhan;