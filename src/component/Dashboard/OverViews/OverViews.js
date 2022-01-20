
import React from 'react';
import { useHistory } from 'react-router-dom';
import style from "./overviews_style.module.css"
import Calendar from "../Calendar/Calendar";
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
                            
                            </div>
                            <div className={style.middle_left_option_1}>
                                <a className={style.device_number}>4.221</a>
                                <a className={style.device_title}>Thiết bị</a>
                            </div>
                            <div className={style.middle_right_option_1}>
                                <a className={style.active_1_title}>Đang hoạt động</a>
                                <a className={style.unactive_1_title}>Ngưng hoạt động</a>
                            </div>
                            <div className={style.right_option_1}>

                            </div>
                        </div>
                        <div className={style.ov_option2}>
                            <div className={style.left_option_2}>

                            </div>
                            <div className={style.middle_left_option_2}>
                                <a className={style.service_number}>276</a>
                                <a className={style.service_title}>Dịch vụ</a>
                            </div>
                            <div className={style.middle_right_option_2}>
                                <a className={style.active_2_title}>Đang hoạt động</a>
                                <a className={style.unactive_2_title}>Ngưng hoạt động</a>
                            </div>
                            <div className={style.right_option_2}>

                            </div>
                        </div>
                        <div className={style.ov_option3}>
                            <div className={style.left_option_3}>

                            </div>
                            <div className={style.middle_left_option_3}>
                                <a className={style.level_number}>4.221</a>
                                <a className={style.level_title}>Cấp số</a>
                            </div>
                            <div className={style.middle_right_option_3}>
                                <a className={style.used_3_title}>Đã sử dụng</a> 
                                <a className={style.waitting_3_title}>Đang chờ</a>
                                <a className={style.skip_3_title}>Bỏ qua</a>
                            </div>
                            <div className={style.right_option_3}>

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