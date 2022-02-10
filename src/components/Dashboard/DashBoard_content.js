import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import style from "./dashboard_content_style.module.css";
import dashboard_icon_1 from "../../static/img/dashboard_icon_1.svg";
import dashboard_icon_2 from "../../static/img/dashboard_icon_2.svg";
import dashboard_icon_3 from "../../static/img/dashboard_icon_3.svg";
import dashboard_icon_4 from "../../static/img/dashboard_icon_4.svg";
import ChartByDay from "./Chart/ChartByDay";
import OverViews from "./OverViews/OverViews";
import MoreDay from "./MoreDay/MoreDay";
export default function Dashboard_content() {
        const history = useHistory();
        return (
            <div className={style.container}>
                <div className={style.statistics}>
                    <div className={style.total_info}>
                        <div className={style.top_info}>
                            <div className={style.around_icon_1}>
                                <img src={dashboard_icon_1} alt='dashboard_icon_1' width={24} height={24}/>
                            </div>
                            <a className={style.right_icon_title}>Số thứ tự đã cấp</a>
                        </div>
                        <div className={style.bottom_info}>
                            <a className={style.number_info}>4.221</a>
                            <a  className={`${style.arrow_up} fas fa-long-arrow-alt-up`}>32.41%</a>
                        </div>
                    </div>
                    <div className={style.total_info}>
                        <div className={style.top_info}>
                            <div className={style.around_icon_2}>
                                <img src={dashboard_icon_2} alt='dashboard_icon_2' width={24} height={24}/>
                            </div>
                            <a className={style.right_icon_title}>Số thứ tự đã sử dụng</a>
                        </div>
                        <div className={style.bottom_info}>
                            <a className={style.number_info}>3.721</a>
                            <a className={`${style.arrow_down} fas fa-long-arrow-alt-down`}>32.41%</a>
                        </div>
                    </div>
                    <div className={style.total_info}>
                        <div className={style.top_info}>
                            <div className={style.around_icon_3}>
                                <img src={dashboard_icon_3} alt='dashboard_icon_3' width={24} height={24}/>
                            </div>
                                <a className={style.right_icon_title}>Số thứ tự đang chờ</a>
                            </div>
                            <div className={style.bottom_info}>
                                <a className={style.number_info}>468</a>
                                <a className={`${style.arrow_up} fas fa-long-arrow-alt-up`}>56.41%</a>
                            </div>
                        </div>
                    <div className={style.total_info}>
                        <div className={style.top_info}>
                            <div className={style.around_icon_4}>
                                <img src={dashboard_icon_4} alt='dashboard_icon_4' width={24} height={24}/>
                            </div>
                            <a className={style.right_icon_title}>Số thứ tự đã bỏ qua</a>
                        </div>
                        <div className={style.bottom_info}>
                            <a className={style.number_info}>32</a>
                            <a  className={`${style.arrow_down} fas fa-long-arrow-alt-down`}>22.41%</a>
                        </div>
                    </div>
                </div>
                <div className={style.charts}>
                    <div className={style.total_charts}>
                        <div className={style.charts_left_title}>
                            <p className={style.top_title}>Bảng thống kê theo ngày</p>
                            <p className={style.bottom_title}>Tháng 11/2021</p>
                        </div>
                        <div className={style.charts_right_title}>
                            <p className={style.left_title}>Xem theo</p>
                            <MoreDay/>
                        </div>
                    </div>
                    <ChartByDay/>
                </div>
                
            </div>
        );
    }
