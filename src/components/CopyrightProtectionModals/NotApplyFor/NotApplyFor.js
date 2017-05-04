/**
 * Created by BadWaka on 04/05/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

// import Modal from '../../Modal/Modal';

export default class NotApplyFor extends Component {

    static propTypes = {
        title: PropTypes.string,    // 标题
    };

    static defaultProps = {};

    render() {
        return (
            <div>
                NotApplyFor
            </div>
        );
    }
}