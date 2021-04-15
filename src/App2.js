import React from "react";
import Yoga from "./components2/Yoga";
import "../src/App2.css";

class App2 extends React.Component {
  state = {
    actualTime: 0,
    stopBtn: false,
    playBtn: false,

    times: [],
    isCounting: false,
    active: "",
    achivement: `&#9813;`,
    totalTime: 0,
    playPause: "gg-play-button-o",
    hours: 0,
    minutes: 0,
    secunds: 0,
    preSeconds: 0,
    preMinutes: 0,
    lastTime: "",
    milisecunds: 0,
    background: "ff006e"
  };



  time = () => {
    this.setState({
      actualTime: this.state.actualTime + 1,
      
    });

    this.setState({
        secunds: this.state.actualTime,
        minutes: parseInt(this.state.actualTime / 60),
        background: `ff${parseInt(Math.random()*99).toString(16)}6e`
    })
console.log(this.state.background);
    if (this.state.secunds < 10) {
      this.setState({
        preSeconds: `0`,
      });
    } else if (this.state.secunds >= 10) {
      this.setState({
        preSeconds: ``,
        
      });
    }

    if (this.state.actualTime > 60) {
      this.setState({
        minutes: parseInt(this.state.actualTime / 60),
        secunds: this.state.actualTime - this.state.minutes * 60,
      });
      if (this.state.secunds < 10) {
        this.setState({
          preSeconds: `0`,
        });
      } else if (this.state.secunds >= 10) {
        this.setState({
          preSeconds: ``,
        });
      }
    }
    if (this.state.minutes > 9) {
      this.setState({
        preMinutes: "",
      });
    }
  };

  calcTotal = () => {
    this.setState({
      totalTime: this.state.times.reduce((p, c) => {
        return p + c;
      }),
    });
  };

  handleStart = () => {
    this.setState({
      playPause: "gg-play-pause-o",
    });
    if (this.state.isCounting === true) {
      this.setState({
        stopBtn: true,
        isCounting: false,
        playPause: "gg-play-button-o",
      });
      return;
    } else {
      this.setState({
        stopBtn: false,
        active: "white",
      });
      const timer = setInterval(() => {
        if (this.state.stopBtn === true) {
          clearInterval(timer);
        } else if (this.state.stopBtn === false) {
          this.setState({
            isCounting: true,
          });
          this.time();
        }
      }, 1000);
    }
  };

  handlePause = () => {
    this.setState({});
  };

  handleStop = () => {
    const tempTimes = this.state.times;
    tempTimes.push(this.state.actualTime);
    this.setState({
      times: tempTimes,

      stopBtn: true,
      isCounting: false,
      active: "",
      playPause: "gg-play-button-o",
      lastTime: `${this.state.minutes} min ${this.state.secunds} sec`,
    });
    this.calcTotal();
  };

  handleReset = () => {
    this.setState({
      actualTime: 0,
      hours: 0,
      minutes: 0,
      secunds: 0,
      preSeconds: 0,
      preMinutes: 0,
      isCounting: false,
    });
  };

  render() {
    return (
      <div className="stripsWrapper">
        <div
          className="strip a"
          style={{
            transform: `rotateY(0deg) rotate(${-this.state.actualTime}deg)`,
          }}
        >
          <div className="resultsWrapper"></div>
        </div>
        <div
          className="strip b"
          style={{
            transform: `rotateY(0deg) rotate(${this.state.actualTime * 3}deg)`,
          }}
        ></div>
        <div className="strip c" 
        >
            
          {this.state.lastTime === "" ? (
            <div className="mainTitle">neon stopwatch</div>
          ) : (
            <div className="lastTime">Last time: {this.state.lastTime}</div>
          )}

          <br />
          <div className="clockWrapper">
            <div className="clock">
              {this.state.preMinutes}
              {this.state.minutes}:{this.state.preSeconds}
              {this.state.secunds}
            </div>
            <div className="controlsWrapper">
              <div
                className={`${this.state.playPause} controls`}
                onClick={this.handleStart}
                style={{ color: `${this.state.active}` }}
              ></div>

              <div
                className="gg-play-stop-o controls"
                onClick={this.handleStop}
              ></div>
            </div>
            <button onClick={this.handleReset} className="reset">
              reset
            </button>
          </div>
        </div>
        <div
          className="strip d"
          style={{
            transform: `rotateY(0deg) rotate(${this.state.actualTime}deg)`,
          }}
        >
          <br />

          <br />
        </div>
        <div
          className="strip e"
          style={{
            transform: `rotateY(0deg) rotate(${
              -this.state.actualTime * 1.5
            }deg)`,
          }}
        ></div>
        <div className="clockWrapper"></div>
      </div>
    );
  }
}

export default App2;
