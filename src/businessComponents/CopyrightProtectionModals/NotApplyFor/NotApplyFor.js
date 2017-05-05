/**
 * 作品未申请版保
 *
 * Created by BadWaka on 04/05/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';
import freeDCIImg from './freeDCI.svg';
import freeLawImg from './freeLaw.svg';

import Modal from '../../Modal/Modal';

export default class NotApplyFor extends Component {

    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <Modal title="作品未申请版保">
                <section className={style.row1}>申请后可获得以下权益：</section>
                <section className={style.row2}>
                    <div className={style.free1}>
                        <img src={freeDCIImg} alt=""/>
                        <span className={style.text}>免费DCI证书</span>
                    </div>
                    <div className={style.free2}>
                        <img src={freeLawImg} alt=""/>
                        <span className={style.text}>免费法务咨询</span>
                    </div>
                </section>
                <section className={style.row3}>
                    <span className={style.left}>作品已申请版保 ></span>
                    <span className={style.right}>马上去申请</span>
                </section>
            </Modal>
        );
    }
}