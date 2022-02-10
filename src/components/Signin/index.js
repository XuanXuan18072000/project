import React, { Component } from 'react';
import Forgot_PW from './Forgot_PW';
import Signin from "./Signin";
import Info from "./Info";
import Reset_PW from "./Reset_PW";
import DashBoard from "../Dashboard/DashBoard";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
// import routes from "../routes";

class index extends Component {
    render() {
        return (    
            <div className='App'>
                <div className='container'>
                    <Router>
                        <Switch>
                            <Route path="/signin">
                                <Signin />
                            </Route>
                            <Route path="/info">
                                <Info />
                            </Route>
                            <Route path="/forgot_pw">
                                <Forgot_PW />
                            </Route>
                            <Route path="/reset_pw">
                                <Reset_PW />
                            </Route>
                            <Route path="/dashboard">
                                <DashBoard />
                            </Route>
                        </Switch>
                    </Router>
                            {/* <Route path="/signin" component={Signin}>Trang Đăng Nhập</Route> */}
                    
                </div>
            </div>
        );
    }
}

export default index;