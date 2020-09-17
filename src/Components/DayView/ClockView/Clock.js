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
        
        <div className="Clock__NumberContainer Clock__NumberContainer-1">
          <span className="Clock__Number Clock__Number-1">1</span>
        </div>
        <div className="Clock__NumberContainer Clock__NumberContainer-2">
          <span className="Clock__Number Clock__Number-2">2</span>
        </div>
        <div className="Clock__NumberContainer Clock__NumberContainer-3">
          <span className="Clock__Number Clock__Number-3">3</span>
        </div>
        <div className="Clock__NumberContainer Clock__NumberContainer-4">
          <span className="Clock__Number Clock__Number-4">4</span>
        </div>
        <div className="Clock__NumberContainer Clock__NumberContainer-5">
          <span className="Clock__Number Clock__Number-5">5</span>
        </div>
        <div className="Clock__NumberContainer Clock__NumberContainer-6">
          <span className="Clock__Number Clock__Number-6">6</span>
        </div>
        <div className="Clock__NumberContainer Clock__NumberContainer-7">
          <span className="Clock__Number Clock__Number-7">7</span>
        </div>
        <div className="Clock__NumberContainer Clock__NumberContainer-8">
          <span className="Clock__Number Clock__Number-8">8</span>
        </div>
        <div className="Clock__NumberContainer Clock__NumberContainer-9">
          <span className="Clock__Number Clock__Number-9">9</span>
        </div>
        <div className="Clock__NumberContainer Clock__NumberContainer-10">
          <span className="Clock__Number Clock__Number-10">10</span>
        </div>
        <div className="Clock__NumberContainer Clock__NumberContainer-11">
          <span className="Clock__Number Clock__Number-11">11</span>
        </div>
        <div className="Clock__NumberContainer Clock__NumberContainer-12">
          <span className="Clock__Number Clock__Number-12">12</span>
        </div>
      </div>
    );
  }
}

export default Clock;
