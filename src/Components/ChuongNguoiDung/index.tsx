import React from 'react'
import './ChuongNguoiDung.css';

import bell from '../../style/img/bell.svg';
import avtarsmall from '../../style/img/avtarsmall.svg'





export default function ChuongNguoiDung() {
    return (
        <div className="ChuongNguoiDung">
            <div className="ChuongNguoiDungbell">
                    <img src={bell} alt="" />
            </div>

            <div className="ChuongNguoiDunguser">
                        <div className="ChuongNguoiDunguseravatar">
                            <img src={avtarsmall} alt="" />
                        </div>
                        <div className="ChuongNguoiDunguserhiandinfor">
                                <span className="ChuongNguoiDunguserhiandinfor_hi">Xin Chào</span>
                                <span className="ChuongNguoiDunguserhiandinfor_name">Lê Quỳnh Ái Vân</span>
                        </div>
            </div>

        </div>
    )
}
