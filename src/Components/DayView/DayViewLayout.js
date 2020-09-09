import React, { Component } from 'react';
import Clock from './ClockView/Clock.js';

class DayViewLayout extends Component {
  render() {
    return (
      <div className="DayViewLayout__Clock--wrapper">
        <Clock />
      </div>
    );
  }
}
export default DayViewLayout;
