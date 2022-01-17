import React from 'react';
import "./style_dlmk.css"

    const Mklai = function(props){
        return(
            <div className="trangdlmk">
                <div className="rectangle1">
                    <div className="hinhgroup">
                        <img src={require('./img/Frame.png')} />  
                    </div>    
                </div>
                    <div className="rectangle2">
                            <div className="hinhlogo">
                                <img src={require('./img/Logoalta.png')} />  
                            </div>
                                <div className="td_dlmk">
                                    <h1> Đặt lại mật khẩu</h1>
                                </div>
                                    <div className="nhom_td_ip">
                                        <p className="nhom_td_td">Vui lòng nhập mail để đặt lại mật khẩu của bạn</p>
                                        <label htmlFor="username"></label>
                                        <input className="nhom_ip"  type="text"/>
                                    </div>
                                        <div className="nut_tt">
                                            <button  type="click">Tiếp tục</button> 
                                        </div>
                                            <div className="nut_huy">
                                                <button type="click">Hủy</button>
                                            </div>
                            
                    </div>
            </div>
                
        )
    }

export default Mklai;