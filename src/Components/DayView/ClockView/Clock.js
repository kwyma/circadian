import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  render() {
    return (
      <div className="Clock__shape--wrapper">
        <span class="Clock__shape"></span>
      </div>
    );
  }
}

export default Clock;
