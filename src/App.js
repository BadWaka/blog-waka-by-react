/**
 * Created by BadWaka on 04/05/2017.
 */
import React, { Component } from 'react';
import style from './App.scss';

// 个人组件
import {
  Index, // 主页
} from './components';

export default class App extends Component {
  render() {
    return (
      <section className={style.app}>
        <Index />
      </section>
    );
  }
}