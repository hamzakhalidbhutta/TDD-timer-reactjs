// import React, { useState } from "react";
// import "./Timer.css";
// import TimerButton from "./../TimerButton/TimerButton";

// const Timer = () => {

//   const [timerObj, setTimerObj] = useState({
//     minutes: 25,
//     seconds: 0,
//     isOn: false,
//   });

// const [interval , setIntervals] = useState();  

 

//   return (
//     <div className="timer-container">
//       <div className="time-display">{timerObj.minutes}:{timerObj.seconds < 10 ? `0${timerObj.seconds}` : timerObj.seconds}</div>
//       <div className="timer-button-container">
//         <TimerButton
//           className="start-timer"
//           buttonAction={startTimer}
//           buttonValue={"Start"}
//         />
//         <TimerButton
//           className="stop-timer"
//           buttonAction={stopTimer}
//           buttonValue={"Stop"}
//         />
//         <TimerButton
//           className="reset-timer"
//           buttonAction={resetTimer}
//           buttonValue={"Reset"}
//         />
//       </div>
//     </div>
//   );
// };

// export default Timer;


//  export const startTimer = () => {
//     if (timerObj.isOn) {
//       return;
//     }

//     setTimerObj({ minutes: 25, seconds: 0, isOn: true });

//     setIntervals(setInterval(() => {
//       if (timerObj.seconds > 0) {
//         setTimerObj(timerObj.seconds = timerObj.seconds - 1);
//       }
//       if (timerObj.seconds === 0) {
//         if (timerObj.minutes === 0) {
//           clearInterval(interval);
//         } else {
//           setTimerObj({ minutes: timerObj.minutes - 1, seconds: 59 });
//         }
//       }
//     }, 1000));
    
//   };

//   export const stopTimer = () => {
//     setTimerObj({ minutes: 25, seconds: 0, isOn: false });
//     console.log("Stopping timer.", timerObj);
//   };

//   export const resetTimer = () => {
//     setTimerObj({ minutes: 25, seconds: 0, isOn: timerObj.isOn });
//     console.log("Resetting timer.", timerObj);
//   };
import React, { Component } from 'react';
import './Timer.css';
import TimerButton from '../TimerButton/TimerButton';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: 0,
      isOn: false,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    if (this.state.isOn === true) {
      return;
    }
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    this.setState({ isOn: true });
  }

  stopTimer() {
    clearInterval(this.myInterval);
    this.setState({ isOn: false });
  }

  resetTimer() {
    this.stopTimer();
    this.setState({
      minutes: 25,
      seconds: 0,
    });
  }

  render = () => {
    const { minutes, seconds } = this.state;

    return (
      <div className="timer-container">
        <div className="time-display">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <div className="timer-button-container">
          <TimerButton
            className="start-timer"
            buttonAction={this.startTimer}
            buttonValue={'Start'}
          />
          <TimerButton
            className="stop-timer"
            buttonAction={this.stopTimer}
            buttonValue={'Stop'}
          />
          <TimerButton
            className="reset-timer"
            buttonAction={this.resetTimer}
            buttonValue={'Reset'}
          />
        </div>
      </div>
    );
  };
}

export default Timer;
