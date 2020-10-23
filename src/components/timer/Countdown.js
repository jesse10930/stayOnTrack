import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Countdown = ({ totCountdownSecs, sessEndTime, curEndTimeSecs }) => {
  // initializing component state
  const [stateCountdownSecs, setStateCountdownSecs] = useState(totCountdownSecs);
  const [running, setRunning] = useState(false);

  // declaring variable
  let audio = document.getElementById('beep');

  // runs on stateCountdownSecs state change
  useEffect(() => {
    let myTimer;
    // check if state has an active countdown value
    if (stateCountdownSecs > 0) {
      // if state NOT running, change state to true
      if (!running) {
        setRunning(true);
      }
        // calculate number of seconds to end time every second and replace in state. ineffecient but works around the idle window issue causing js to slowdown or freeze.
        myTimer = setInterval(() => {
          let curTime = new Date();
          let curTimeSecs =
            (curTime.getHours() * 60 + curTime.getMinutes()) * 60 +
            curTime.getSeconds();
          setStateCountdownSecs(curEndTimeSecs - curTimeSecs);
        }, 1000);

        // subtract 1 from state countdown every 1 second, this would replace code above if idle window did not throw off countdown
        // setStateCountdownSecs(stateCountdownSecs => 
        //   stateCountdownSecs - 1), 987);
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
    // if countdown went passed 0, return 00:00:00
    if ((totSecs - 60 * wholeCountdownMins) < 0) {
      return `${hours}:${mins}:00`;
    } else {
      return `${hours}:${mins}:${secs}`;
    }
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
  curEndTimeSecs: PropTypes.number.isRequired
}

export default Countdown;