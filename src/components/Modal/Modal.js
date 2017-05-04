/**
 * Created by BadWaka on 04/05/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';
import closeImg from './close.svg';

export default class Modal extends Component {

    // 定义属性类型
    static propTypes = {
        title: PropTypes.string,    // 标题
        width: PropTypes.number,    // 宽度
    };

    // 设置默认属性
    static defaultProps = {
        width: 660,
    };

    render() {

        const {
            title,
            width
        } = this.props;

        return (
            <section
                className={style.modal}
                style={{
                    width: width + 'px'
                }}>
                {/* 标题 */}
                <div className={style.title}>
                    <span className={style.text}>
                        {title}
                    </span>
                    <img className={style.closeImg} src={closeImg} alt="关闭"/>
                </div>
                {/* 内容 */}
                {this.props.children}
            </section>
        );
    }
}