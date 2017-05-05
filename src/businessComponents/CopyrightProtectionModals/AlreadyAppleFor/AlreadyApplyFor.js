/**
 * 作品已申请版保
 *
 * Created by BadWaka on 04/05/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

import Modal from '../../Modal/Modal';

export default class AlreadyApplyFor extends Component {

    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <Modal title="作品已申请版保">
                <section className={style.row1}>
                    <input type="radio" name="relateWay"/>
                    <span className={style.text}>系统已列出您在版权保护中心的版保记录，请选择对应记录与作品进行关联</span>
                    <div className={style.copyrightRecord}>
                        <input type="radio" name="copyrightRecord"/>
                        <span className={style.text}>查理一世</span>
                        <span className={style.textRight}>宋晓明</span>
                    </div>
                    <div className={style.copyrightRecord}>
                        <input type="radio" name="copyrightRecord"/>
                        <span className={style.text}>查理二世</span>
                        <span className={style.textRight}>宋晓明2</span>
                    </div>
                </section>
                <section className={style.row2}>
                    <input type="radio" name="relateWay"/>
                    <span className={style.text}>通过版保关联号进行关联</span>
                </section>
                <section className={style.row3}>
                    <span className={style.left}>作品未申请版保 ></span>
                    <span className={style.right}>
                        <span className={style.confirm}>确定</span>
                        <span className={style.cancel}>取消</span>
                    </span>
                </section>
            </Modal>
        );
    }
}