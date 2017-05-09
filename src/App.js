/**
 * Created by BadWaka on 04/05/2017.
 */
import React, {Component} from 'react';
import style from './App.scss';

// Ant Design
import {Carousel} from 'antd';

// 业务组件
import {AlreadyAppleFor, ChangeRelatedCertificate, CopyrightProtectionCertificate, NotApplyFor} from './businessComponents/CopyrightProtectionModals/';

// 个人组件
import {
    Slider, // 轮播图
} from './components';

export default class App extends Component {

    onChange(a, b, c) {
        console.log(a, b, c);
    }

    render() {
        return (
            <div>
                <Carousel afterChange={this.onChange}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </div>
        );
    }
}