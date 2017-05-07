/**
 * Created by waka on 2017/5/7.
 */
import React, {Component} from 'react';
import PropsTypes from 'prop-types';

import style from './style.scss';

export default class Slider extends Component {


    render() {

        const imgArr = [{
            src: 'http://img.hb.aicdn.com/f8d24d2f9ec47e0bb9a9c94c26f3079ffb9c7482212d4-YCFY4d_sq320',
            alt: ''
        }, {
            src: 'http://img.hb.aicdn.com/34427dc0a7f4ecc448bd350b0c21774aa00c2ae17ef6-FxeAyJ_sq320',
            alt: ''
        }, {
            src: 'http://img.hb.aicdn.com/e9d45d6be8d761743407a037d3c3482da3835fe81721c-nvniE2_sq320',
            alt: ''
        }, {
            src: 'http://img.hb.aicdn.com/1d5e2fb0a8972dc4dbb795f6debe22febcad19b81a86a-33Gx3o_sq320',
            alt: ''
        }];

        return (
            <section className={style.wrapper}>
                {imgArr.map((item, index) => {
                    return <img
                        className={style.imgItem}
                        key={index}
                        src={item.src}
                        alt={item.alt}/>;
                })}
            </section>
        );
    }
}