/**
 * Created by BadWaka on 04/05/2017.
 */
import React, {Component} from 'react';
import style from './App.scss';
import NotApplyFor from './businessComponents/CopyrightProtectionModals/NotApplyFor/NotApplyFor';

export default class App extends Component {
    render() {
        return (
            <div>
                <NotApplyFor/>
            </div>
        );
    }
}