
import React from 'react';
import { useHistory } from 'react-router-dom';
import style from "./overviews_style.module.css"
import Calendar from "../Calendar/Calendar";
import logo_device from "../../../static/img/logo_device.svg";
import logo_service from "../../../static/img/logo_service.svg";
import logo_level from "../../../static/img/logo_level.svg";
import percent_circle_1 from "../../../static/img/percent_circle_1.png";
import percent_circle_2 from "../../../static/img/percent_circle_2.png";
import percent_circle_3 from "../../../static/img/percent_circle_3.png";
export default function Dashboard() {
        const history = useHistory();
        return (
            <div className={style.left_container}>
                <div className={style.top_container}>
                    <div className={style.top_title}>
                        <p>Tổng Quan</p>
                    </div>
                </div>
                <div className={style.middle_container}>
                    <div className={style.ov_total_option}>
                        <div className={style.ov_option1}>
                            <div className={style.left_option_1}>
                                <img src={percent_circle_1} alt='percent_circle_1'/>
                            </div>
                            <div className={style.middle_left_option_1}>
                                <div><a className={style.device_number}>4.221</a></div>
                                <div><a className={style.device_title}><span><img src={logo_device} alt='logo_device' width={14} height={14}/></span>Thiết bị</a></div>
                            </div>
                            <div className={style.middle_right_option_1}>
                                <div><a className={style.option_title}><span className={`${style.dot_1} fas fa-circle`}></span>Đang hoạt động</a></div>
                                <div><a className={style.option_title}><span className={`${style.dot_2} fas fa-circle`}></span>Ngưng hoạt động</a></div>
                            </div>
                            <div className={style.right_option_1}>
                                <div><a className={style.right_number_1}>3.799</a></div>
                                <div><a className={style.right_number_1}>422</a></div>
                            </div>
                        </div>
                        <div className={style.ov_option2}>
                            <div className={style.left_option_2}>
                                <img src={percent_circle_2} alt='percent_circle_2'/>
                            </div>
                            <div className={style.middle_left_option_2}>
                                <div><a className={style.service_number}>276</a></div>
                                <div><a className={style.service_title}><span><img src={logo_service} alt='logo_service' width={14} height={14}/></span>Dịch vụ</a></div>
                                
                            </div>
                            <div className={style.middle_right_option_2}>
                                <div><a className={style.option_title}><span className={`${style.dot_3} fas fa-circle`}></span>Đang hoạt động</a></div>
                                <div><a className={style.option_title}><span className={`${style.dot_2} fas fa-circle`}></span>Ngưng hoạt động</a></div>
                            </div>
                            <div className={style.right_option_2}>
                                <div><a className={style.right_number_2}>210</a></div>
                                <div><a className={style.right_number_2}>66</a></div>
                            </div>  
                        </div>
                        <div className={style.ov_option3}>
                            <div className={style.left_option_3}>
                                <img src={percent_circle_3} alt='percent_circle_3'/>
                            </div>
                            <div className={style.middle_left_option_3}>
                                <div><a className={style.level_number}>4.221</a></div>
                                <div><a className={style.level_title}><span><img className={style.level_title_img} src={logo_level} alt='logo_level' width={14} height={14}/></span>Cấp số</a></div>
                            </div>
                            <div className={style.middle_right_option_3}>
                                <div><a className={style.option_title}><span className={`${style.dot_4} fas fa-circle`}></span>Đã sử dụng</a> </div>
                                <div><a className={style.option_title}><span className={`${style.dot_2} fas fa-circle`}></span>Đang chờ</a></div>
                                <div><a className={style.option_title}><span className={`${style.dot_5} fas fa-circle`}></span>Bỏ qua</a></div>
                            </div>
                            <div className={style.right_option_3}>
                            <div><a className={style.right_number_3}>3.721</a></div>
                            <div><a className={style.right_number_3}>486</a></div>
                            <div><a className={style.right_number_3}>32</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.bottom_container}>
                    <div className={style.calendar}>
                        <Calendar/>
                    </div>
                </div>
            </div>
        );
    }