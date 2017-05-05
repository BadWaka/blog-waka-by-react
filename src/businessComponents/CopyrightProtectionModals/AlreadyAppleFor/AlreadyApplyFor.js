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

        let isCopyrightRecords = false; // 是否有版保记录

        return (
            <Modal title="作品已申请版保">
                {/* 有版保记录显示这个 */}
                {isCopyrightRecords &&
                <section className={style.hasCopyrightRecords}>
                    {/* 版保记录 */}
                    <section className={style.row1}>
                        <input type="radio" name="relateWay"/>
                        <span className={style.text}>系统已列出您在版权保护中心的版保记录，请选择对应记录与作品进行关联</span>
                        {/* 版保记录项 */}
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
                    {/* 版保号关联 */}
                    <section className={style.row2}>
                        <input type="radio" name="relateWay"/>
                        <span className={style.text}>通过版保关联号进行关联</span>
                        {/* 通过版保号进行关联 */}
                        <div className={style.copyrightNumber}>
                            <div className={style.tips1}>如果系统没有找到您要的版保记录，您可以通过关联号进行手动关联</div>
                            <input className={style.input} type="text" placeholder="版保关联号"/>
                            {/* 正常提示 */}
                            <div className={style.normalTips}>作品《查理一世》</div>
                            {/* 错误提示 */}
                            <div className={style.errorTips}>版保关联号已经关联了其他的作品</div>
                        </div>
                    </section>
                </section>
                }
                {/* 没有版保记录显示这个 */}
                {!isCopyrightRecords &&
                <section className={style.noCopyrightRecords}>
                    <span className={style.text}>通过版保关联号进行关联</span>
                    {/* 通过版保号进行关联 */}
                    <div className={style.copyrightNumber}>
                        <div className={style.tips1}>如果系统没有找到您要的版保记录，您可以通过关联号进行手动关联</div>
                        <input className={style.input} type="text" placeholder="版保关联号"/>
                        {/* 正常提示 */}
                        <div className={style.normalTips}>作品《查理一世》</div>
                        {/* 错误提示 */}
                        <div className={style.errorTips}>版保关联号已经关联了其他的作品</div>
                    </div>
                </section>
                }
                {/* 按钮栏 */}
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