/**
 * Created by BadWaka on 04/05/2017.
 */
import React, {Component} from 'react';
import style from './App.scss';

// 业务组件
import {
    AlreadyAppleFor,
    ChangeRelatedCertificate,
    CopyrightProtectionCertificate,
    NotApplyFor
} from './businessComponents/CopyrightProtectionModals/';

// 个人组件
import {
    Header, // 头部
    Slider, // 轮播图
} from './components';

export default class App extends Component {

    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}