import React from 'react';
import "./style_saimk.css"

    const Saimk = function(props){
        return(
            <div className="trangdangnhap">
                <div className="rectangle1">
                    <h6 className="tieudeqlxh">Quản Lý Xếp Hàng</h6>
                    <h1 className="tieudeht">Hệ Thống</h1>
                    <div className="hinhgroup">
                    <img src={require('./img/Group341.png')} /> 
                    </div>
                    
                </div>
                    <div className="rectangle2">
                        <div className="hinhlogo">
                        <img src={require('./img/Logoalta.png')} /> 
                        </div>
                        
                            <div className="tendn">
                                <p>Tên đăng nhập *</p>
                                <label htmlFor="username"></label>
                                <input className="nhapten" type="text"/>
                            </div>
                                <div className="mk">
                                    <p>Mật khẩu *</p>
                                    <label htmlFor="pass"></label>
                                    <input className="nhapten" type="password"/>
                                </div>
                                <div className="canhbao">
                                    <p>Sai mật khẩu hoặc họ tên đăng nhập</p>
                                </div>
                                    <div className="nutdn">
                                       <button className="nutdn1" type="click">Đăng nhập</button>
                                    </div>
                                        <div className="tieude_mk">
                                            <p>Quên mật khẩu</p>
                                        </div>
                    </div>

            </div>
                
        )
    }

export default Saimk;