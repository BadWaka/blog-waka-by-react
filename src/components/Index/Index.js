/**
 * 主页
 * Created by waka on 2017/5/9.
 */
import React, {Component} from 'react';
import PropsTypes from 'prop-types';

import style from './style.scss';

import {
    Header, // 头部
} from '../index';

import Slider from 'react-slick';   // 轮播图

export default class Index extends Component {

    static propTypes = {};

    static defaultProps = {};

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const imgArr = [
            'http://img.hb.aicdn.com/ddc7a18f7a6951eb10e675b892bf069fdee63136133f58-IcaOih_fw658',
            'http://img.hb.aicdn.com/12a96b5c549bad2ed4e5544a36ab07fb8506c55d1cf2c-0NXOMB_fw658',
            'http://img.hb.aicdn.com/fd264e4afb1d40b544945d243e2e7b4453faccc224c10-xrOyy1_fw658'
        ];

        return (
            <section className={style.index}>
                <Header/>
                <Slider {...settings}>
                    {imgArr.map((imgUrl, index) => {
                        return <div
                            className={style.imgWrapper}
                            key={index}
                            style={{
                                backgroundImage: 'url(' + imgUrl + ')'
                            }}>
                        </div>
                    })}
                </Slider>

            </section>
        );
    }
}