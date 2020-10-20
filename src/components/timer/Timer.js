import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';
import CheckList from './CheckList';
import EndOfDayList from './EndOfDayList';
import PropTypes from 'prop-types';

const Timer = ({ sessList }) => {
  // initializing component level state
  const [counter, setCounter] = useState(0);
  const [statusArray, setStatusArray] = useState([]);
  const [totCountdownSecs, setTotCountdownSecs] = useState(0);
  const [endTimes] = useState(Object.keys(sessList));

  // declaring variables
  let checked = [];
  let unchecked = sessList[endTimes[counter - 1]];

  // runs when component first mounted
  useEffect(() => {
    // declaring variables for current time seconds and end time seconds
    let curTime = new Date();
    let curTimeSecs =
      (curTime.getHours() * 60 + curTime.getMinutes()) * 60 +
      curTime.getSeconds();
    let endTimeHour = endTimes[counter].substring(0, 2);
    let endTimeMin = endTimes[counter].substring(3, 5);
    let endTimeAmPm = endTimes[counter].charAt(6);
    let endTimeSecs =
      (parseInt(endTimeHour) * 60 + parseInt(endTimeMin)) * 60 +
      (endTimeAmPm === 'p' ? 43200 : 0);
      
    // adjusting end time seconds for 12 o'clock am/pm bug
    if (parseInt(endTimeHour) === 12) {
      (endTimeAmPm === 'a' ? endTimeSecs = endTimeSecs + 43200 : endTimeSecs = endTimeSecs - 43200)
    }
    // change component level count down seconds state and increace component level counter state
    setTotCountdownSecs(endTimeSecs - curTimeSecs);
    setCounter(counter + 1)
    // eslint-disable-next-line
  }, []);

  // adds session item to checked/uncheck arrays when checked/unchecked
  const onCheck = (event) => {
    if (event.target.checked) {
      checked.push(event.target.name);
      unchecked.splice(unchecked.indexOf(event.target.name), 1);
    } else {
      unchecked.push(event.target.name);
      checked.splice(checked.indexOf(event.target.name), 1);
    }
  };

  // runs when next-session button clicked
  const onNextClick = (event) => {
    event.preventDefault();
    // checking if more sessions to go through
    if (counter < endTimes.length) {
      // declaring variables for current time seconds and end time seconds
      let curTime = new Date();
      let curTimeSecs =
        (curTime.getHours() * 60 + curTime.getMinutes()) * 60 +
        curTime.getSeconds();
      let endTimeHour = endTimes[counter].substring(0, 2);
      let endTimeMin = endTimes[counter].substring(3, 5);
      let endTimeAmPm = endTimes[counter].charAt(6);
      let endTimeSecs =
        (parseInt(endTimeHour) * 60 + parseInt(endTimeMin)) * 60 +
        (endTimeAmPm === 'p' ? 43200 : 0);
      
      // adjusting end time seconds for 12 o'clock am/pm bug
      if (parseInt(endTimeHour) === 12) {
        (endTimeAmPm === 'a' ? endTimeSecs = endTimeSecs + 43200 : endTimeSecs = endTimeSecs - 43200)
      }

      // add 1 to component level counter state, add checked/unchecked arrays to comp level statusArray state, set new count down seconds in comp level state
      setCounter(counter + 1);
      setStatusArray(statusArray => [...statusArray, [checked, unchecked]]);
      setTotCountdownSecs(endTimeSecs - curTimeSecs);
    } else {
      // add 1 to comp level counter state and add checked/unchecked arrays to com level status array state
      setCounter(counter + 1);
      setStatusArray(statusArray => [...statusArray, [checked, unchecked]]);
    }

    document.getElementById('next').blur();
  };

  return (
    <div className='timer-comp-container'>
      {/* shows div if endtimes array not empty, endtime greater than 0, and counter less than length of endtimes array */}
      {endTimes.length > 0 && totCountdownSecs > 0 && counter <= endTimes.length && (
        <div className='countDown-container'>
          {/* passing current endtime and countdown seconds to child */}
          <Countdown sessEndTime={endTimes[counter-1]} totCountdownSecs={totCountdownSecs}/>
        </div>
      )}
      <div className='checklist-container'>
        {/* passing session tasks array and oncheck action to child */}
        <CheckList
          sessTasks={sessList[endTimes[counter - 1]]}
          onCheck={onCheck}
        />
      </div>
      {/* shows div if counter less than length of endtimes array */}
      {counter <= endTimes.length && (
        <div className='next-btn-container'>
          <input
            id='next'
            type='submit'
            className='next-btn'
            value={
              counter === endTimes.length
                ? 'End Day!'
                : 'Next Session'
            }
            onClick={onNextClick}
          />
        </div>
      )}
      {/* shows div when counter passes quantity of endtimes */}
      {counter > endTimes.length && (
        <div className='endofdaylist-container'>
          {/* passing check/unchecked tasks array, and endtimes array to child */}
          <EndOfDayList tasks={statusArray} endTimes={endTimes}/>
        </div>
      )}
    </div>
  )
}

Timer.propTypes = {
  sessList: PropTypes.object.isRequired,
}

export default Timer;