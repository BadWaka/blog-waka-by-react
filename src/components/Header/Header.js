/**
 * Created by waka on 2017/5/9.
 */
import React, {Component} from 'react';
import PropsTypes from 'prop-types';

import style from './style.scss';

export default class Header extends Component {

    static propTypes = {};

    static defaultProps = {};

    render() {

        return (
            <section className={style.header}>
                <h1 className={style.title}>Hello Waka</h1>
            </section>
        );
    }
}