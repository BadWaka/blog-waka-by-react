/**
 * 作品未申请版保
 *
 * Created by BadWaka on 04/05/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

import Modal from '../../Modal/Modal';

export default class NotApplyFor extends Component {

    static propTypes = {
        title: PropTypes.string,    // 标题
    };

    static defaultProps = {};

    render() {
        return (
            <Modal title="作品未申请版保">
                NotApplyFor
            </Modal>
        );
    }
}