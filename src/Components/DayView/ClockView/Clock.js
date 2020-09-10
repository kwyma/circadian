import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date()
    };
  }

  componentDidMount() {
    setInterval(() => this.updateTime(), 500);
  }

  updateTime = () => {
    this.setState({
      currentDate: new Date()
    })
  }

  render() {
    const secondsRatio = this.state.currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + this.state.currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + this.state.currentDate.getHours())/ 12;

    const minuteHandStyle = {
      transform: "translateX(-50%) rotate(calc(" + minutesRatio * 360 + "deg))"
    };
    const hourHandStyle = {
      transform: "translateX(-50%) rotate(calc(" + hoursRatio * 360 + "deg))"
    };

    return (
      <div className="Clock__Shape">
        <div className="Clock__Hand Clock__Hand-minute" style={minuteHandStyle}></div>
        <div className="Clock__Hand Clock__Hand-hour" style={hourHandStyle}></div>
        <div className="Clock__Number Clock__Number-1">1</div>
        <div className="Clock__Number Clock__Number-2">2</div>
        <div className="Clock__Number Clock__Number-3">3</div>
        <div className="Clock__Number Clock__Number-4">4</div>
        <div className="Clock__Number Clock__Number-5">5</div>
        <div className="Clock__Number Clock__Number-6">6</div>
        <div className="Clock__Number Clock__Number-7">7</div>
        <div className="Clock__Number Clock__Number-8">8</div>
        <div className="Clock__Number Clock__Number-9">9</div>
        <div className="Clock__Number Clock__Number-10">10</div>
        <div className="Clock__Number Clock__Number-11">11</div>
        <div className="Clock__Number Clock__Number-12">12</div>
      </div>
    );
  }
}

export default Clock;
