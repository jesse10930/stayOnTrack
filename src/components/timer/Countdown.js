import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Countdown = ({ totCountdownSecs, sessEndTime }) => {
  // initializing component state
  const [stateCountdownSecs, setStateCountdownSecs] = useState(totCountdownSecs);
  const [running, setRunning] = useState(false);

  // declaring variable
  let audio = document.getElementById('beep');



// // trying to fix bug that occurs when tab becomes idle
//   const onVisibilityChange = () => {
//     if (stateCountdownSecs > 0) {
//       let curTime = new Date();
//       let curTimeSecs =
//         (curTime.getHours() * 60 + curTime.getMinutes()) * 60 +
//         curTime.getSeconds();
//       let endTimeHour = sessEndTime.substring(0, 2);
//       let endTimeMin = sessEndTime.substring(3, 5);
//       let endTimeAmPm = sessEndTime.charAt(6);
//       let endTimeSecs =
//         (parseInt(endTimeHour) * 60 + parseInt(endTimeMin)) * 60 +
//         (endTimeAmPm === 'p' ? 43200 : 0);
      
//       // adjusting end time seconds for 12 o'clock am/pm bug
//       if (parseInt(endTimeHour) === 12) {
//         (endTimeAmPm === 'a' ? endTimeSecs = endTimeSecs + 43200 : endTimeSecs = endTimeSecs - 43200)
//       }

//       // set new state countdown when visibility changes if countdown still active
//       if (endTimeSecs > curTimeSecs) {
//         setStateCountdownSecs(endTimeSecs - curTimeSecs);
//       }
//     }
//   }
//   document.addEventListener('visibilitychange', onVisibilityChange, false);




  // runs on stateCountdownSecs state change
  useEffect(() => {
    let myTimer;
    // check if state has an active countdown value
    if (stateCountdownSecs !== 0) {
      // if state NOT running, change state to true
      if (!running) {
        setRunning(true);
      }
        // subtract 1 from state countdown every 1 second
        myTimer = setInterval(() => 
        setStateCountdownSecs(stateCountdownSecs => stateCountdownSecs - 1), 987);
        return () => clearInterval(myTimer);
    } else {
      // check if state is actively counting down
      if (running) {
        // play alarm, set running to false
        setTimeout(() => {audio.play()}, 1000);
        setRunning(false);
      }
    }
  }, [stateCountdownSecs])

  // runs when totCoundownSecs prop changes
  useEffect(() => setStateCountdownSecs(totCountdownSecs), [totCountdownSecs]);

  // changes total seconds from integer to time-formatted hh:mm:ss value
  const clockify = (totSecs) => {
    let wholeCountdownMins = (totSecs - (totSecs % 60)) / 60;
    let wholeCountdownHours =
      (wholeCountdownMins - (wholeCountdownMins % 60)) / 60;
    let hours =
      wholeCountdownHours < 10
        ? String('0' + wholeCountdownHours)
        : String(wholeCountdownHours);
    let mins =
      wholeCountdownMins - 60 * wholeCountdownHours < 10
        ? '0' + String(wholeCountdownMins - 60 * wholeCountdownHours)
        : String(wholeCountdownMins - 60 * wholeCountdownHours);
    let secs =
      totSecs - 60 * wholeCountdownMins < 10
        ? '0' + String(totSecs - 60 * wholeCountdownMins)
        : String(totSecs - 60 * wholeCountdownMins);
    return `${hours}:${mins}:${secs}`;
  };

    return (
      <div className='countdown-comp-container'>
        <div className='countdown-timer'>
          {/* return hh:mm:ss countdown value */}
          {clockify(stateCountdownSecs)}
        </div>
        <div className='countdown-endtime'>{sessEndTime}</div>
      </div>
    );
}

Countdown.propTypes = {
  sessList: PropTypes.array,
  totCountdownSecs: PropTypes.number.isRequired,
}

export default Countdown;