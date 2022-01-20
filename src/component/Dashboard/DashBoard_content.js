import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import style from "./dashboard_content_style.module.css";
import dashboard_icon_1 from "../../static/img/dashboard_icon_1.svg";
import dashboard_icon_2 from "../../static/img/dashboard_icon_2.svg";
import dashboard_icon_3 from "../../static/img/dashboard_icon_3.svg";
import dashboard_icon_4 from "../../static/img/dashboard_icon_4.svg";
import ChartByDay from "./Chart/ChartByDay";
import OverViews from "./OverViews/OverViews";
export default function Dashboard_content() {
        const history = useHistory();
        return (
            <div className={style.container}>
                <div className={style.statistics}>
                    <div className={style.number_given}>
                        <div className={style.top_info}>
                            <div>
                                <img src={dashboard_icon_1} alt='dashboard_icon_1' width={24} height={24}/>
                            </div>
                            <a>Số thứ tự đã cấp</a>
                        </div>
                        <div className={style.bottom_info}>
                            <h2>4.221</h2>
                            <a  className={`${style.arrow_up} fas fa-long-arrow-alt-up`}>32.41%</a>
                        </div>
                    </div>
                    <div className={style.number_used}>
                        <div className={style.top_info}>
                            <div>
                                <img src={dashboard_icon_2} alt='dashboard_icon_2' width={24} height={24}/>
                            </div>
                            <a>Số thứ tự đã sử dụng</a>
                        </div>
                        <div className={style.bottom_info}>
                            <h2>3.721</h2>
                            <a className={`${style.arrow_down} fas fa-long-arrow-alt-down`}>32.41%</a>
                        </div>
                    </div>
                    <div className={style.number_waitting}>
                        <div className={style.top_info}>
                            <div>
                                <img src={dashboard_icon_3} alt='dashboard_icon_3' width={24} height={24}/>
                            </div>
                                <a>Số thứ tự đang chờ</a>
                            </div>
                            <div className={style.bottom_info}>
                                <h2>468</h2>
                                <a className={`${style.arrow_up} fas fa-long-arrow-alt-up`}>56.41%</a>
                            </div>
                        </div>
                    <div className={style.number_skip}>
                        <div className={style.top_info}>
                            <div>
                                <img src={dashboard_icon_4} alt='dashboard_icon_4' width={24} height={24}/>
                            </div>
                            <a>Số thứ tự đã bỏ qua</a>
                        </div>
                        <div className={style.bottom_info}>
                            <h2>32</h2>
                            <a  className={`${style.arrow_down} fas fa-long-arrow-alt-down`}>22.41%</a>
                        </div>
                    </div>
                </div>
                <div className={style.charts}>
                    <ChartByDay/>
                </div>
                
            </div>
        );
    }