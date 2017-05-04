/**
 * Created by BadWaka on 04/05/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

export default class Modal extends Component {

    // 定义属性类型
    static propTypes = {
        title: PropTypes.string,    // 标题
    };

    // 设置默认属性
    static defaultProps = {};

    render() {

        const {
            title
        } = this.props;

        return (
            <section>
                {/* 标题 */}
                <div className={style.title}>
                    <span>{title}</span>
                    <img src="" alt="关闭"/>
                </div>
                {/* 内容 */}
                {this.props.children}
            </section>
        );
    }
}