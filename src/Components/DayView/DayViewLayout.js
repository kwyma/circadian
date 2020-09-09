import React, { Component } from 'react';
import Clock from './ClockView/Clock.js';
import './DayViewLayout.css';

class DayViewLayout extends Component {
  render() {
    return (
      <div className="DayViewLayout__Layout">
        <div className="DayViewLayout__Clock--wrapper">
          <Clock />
        </div>
        <div className="DayViewLayout__Timeline--wrapper">
          <h2>Timeline</h2>
        </div>
      </div>
    );
  }
}
export default DayViewLayout;
