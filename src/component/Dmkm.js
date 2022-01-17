import React from 'react';
import "./style_dmkm.css"

    const Dmkm = function(props){
        return(
            <div className="trangdangnhap">
                <div className="rectangle1">
                    <div className="hinhgroup">
                        <img src={require('./img/Frame.png')} />  
                    </div>
                    
                </div>
                    <div className="rectangle2">
                        <div className="hinhlogo">
                            <img src={require('./img/Logoalta.png')} />  
                        </div>
                            <div className="td_dlmkm">
                                 <h1> Đặt lại mật khẩu mới</h1>
                            </div>
                        
                            <div className="nhap_mk">
                                <p>Mật khẩu *</p>
                                <label htmlFor="pass"></label>
                                <input className="o1"  type="password"/>
                            </div>
                                <div className="nhaplai_mk">
                                    <p>Nhập lại mật khẩu *</p>
                                    <label htmlFor="pass"></label>
                                    <input className="o1"  type="password"/>  
                                </div>
                                    <div className="nut_xn">
                                       <button className="nutdn1" type="click">Xác nhận</button>
                                    </div>
                    </div>
            </div>
                
        )
    }

export default Dmkm;