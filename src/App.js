/**
 * Created by BadWaka on 04/05/2017.
 */
import React, {Component} from 'react';
import style from './App.scss';

// 版保模态框
import {
    AlreadyAppleFor,
    ChangeRelatedCertificate,
    CopyrightProtectionCertificate,
    NotApplyFor
} from './businessComponents/CopyrightProtectionModals/';

export default class App extends Component {
    render() {
        return (
            <div>
                <ChangeRelatedCertificate/>
            </div>
        );
    }
}