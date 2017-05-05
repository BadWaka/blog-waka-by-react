/**
 * 更换关联的证书
 *
 * Created by BadWaka on 04/05/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

import Modal from '../../Modal/Modal';

export default class ChangeRelatedCertificate extends Component {

    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <Modal title="更换关联的证书">
                <section className={style.wrapper}>
                    <div className={style.text}>如果此作品和证书的关联不匹配，请通过版本关联号进行更新</div>
                    <input className={style.input} type="text" placeholder="版保关联号"/>
                    <span className={style.row3}>
                        <span className={style.confirm}>确定</span>
                        <span className={style.cancel}>取消</span>
                    </span>
                </section>
            </Modal>
        );
    }
}