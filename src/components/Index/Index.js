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

        return (
            <section className={style.index}>
                <Header/>
                <Slider {...settings}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>6</h3></div>
                </Slider>
            </section>
        );
    }
}