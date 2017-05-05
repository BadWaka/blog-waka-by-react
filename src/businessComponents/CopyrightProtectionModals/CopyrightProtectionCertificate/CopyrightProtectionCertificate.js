/**
 * 版权保护证书
 *
 * Created by BadWaka on 04/05/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';
import copyrightProtectionCertificateDemoImg from './copyrightProtectionCertificateDemo.svg';

import Modal from '../../Modal/Modal';

export default class CopyrightProtectionCertificate extends Component {

    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <Modal title="版权保护证书">
                <section className={style.wrapper}>
                    <div className={style.text}>更换关联的证书 ></div>
                    <img className={style.img} src={copyrightProtectionCertificateDemoImg} alt="版权保护证书" width={620}
                         height={440}/>
                </section>
            </Modal>
        );
    }
}