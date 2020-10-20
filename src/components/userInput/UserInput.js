import React, { useState } from 'react';
import CurrentTaskList from './CurrentTaskList';
import PropTypes from 'prop-types';

const UserInput = ({ curTaskList, updateCurTaskListState, sessList, updateSessListState, startBtn }) => {
  // initializing component state
  const [input, setInput] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [ampm, setAmpm] = useState(' am');

  // change input state when typing in task box
  const onChange = (event) => {
    setInput(event.target.value);
  };
  // change hour state when hour selected from dropdown
  const onHourChange = (event) => {
    setHour(event.target.value);
  };
  // change minute state when minute selected from dropdown
  const onMinuteChange = (event) => {
    setMinute(event.target.value);
  };
  // change am/pm state when selected from dropdown
  const onAmPmChange = (event) => {
    setAmpm(event.target.value);
  };

  // runs when add-task button clicked
  const onTaskSubmit = (event) => {
    event.preventDefault();
    // check to make sure text-box not empty
    if (input) {
      // add task to the current task list, then update the app-level state, and reset the the input state and text-box
      curTaskList.push(input);
      updateCurTaskListState(curTaskList);
      setInput('');
      document.getElementById('add-task').blur();
      event.target.reset();
    } else {
      // alert user if text-box empty
      alert('No Task Entered!');
    }
  };

  // runs when add-endtime button clicked
  const onTimeSubmit = (event) => {
    event.preventDefault();
    // alert user if no hour or minute selected
    if (hour.length === 0 || minute.length === 0) {
      alert('No time entered!');
    } else if (curTaskList.length === 0) {
      alert('Enter all session tasks before end time')
    } else {
      // add entry to sessList prop, where the end-time is the key and an array of the current task list is the value
      sessList[hour + minute + ampm] = curTaskList;
      // change app-level sessList state to match new sessList prop, then reset app-level curTask state to empty array and am/pm to am
      updateSessListState(sessList);
      updateCurTaskListState([]);
      document.getElementById('add-end-time').blur();
      event.target.reset();
      setAmpm(' am');
    }
  };

    return (
      <div
        className='user-input-comp-container'
        // when start button is clicked, hide div
        style={{ display: startBtn ? 'none' : '' }}
      >
        <div className='form-container'>
          <form
            className='task-form'
            autoComplete='off'
            onSubmit={onTaskSubmit}
          >
            <input
              type='text'
              name='task'
              placeholder='Enter New Task...'
              onChange={onChange}
            />
            <br></br>
            <input
              id='add-task'
              type='submit'
              className='add-task-btn'
              value='Add Task'
            />
          </form>
          <form
            className='time-form'
            autoComplete='off'
            onSubmit={onTimeSubmit}
          >
            <select name='hours' id='hours' onChange={onHourChange}>
              <option value=''>hr</option>
              <option value='01'>1</option>
              <option value='02'>2</option>
              <option value='03'>3</option>
              <option value='04'>4</option>
              <option value='05'>5</option>
              <option value='06'>6</option>
              <option value='07'>7</option>
              <option value='08'>8</option>
              <option value='09'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
            </select>
            <select name='minutes' id='minutes' onChange={onMinuteChange}>
              <option value=''>min</option>
              <option value=':00'>:00</option>
              <option value=':15'>:15</option>
              <option value=':30'>:30</option>
              <option value=':45'>:45</option>
            </select>
            <select name='am-pm' id='am-pm' 
            onChange={onAmPmChange}
            >
              <option value=' am' defaultValue>
                am
              </option>
              <option value=' pm'>pm</option>
            </select>
            <br></br>
            <input
              id='add-end-time'
              type='submit'
              className='end-time-btn'
              value='Add End Time'
            />
          </form>
        </div>
        <div className='current-tasks-container'>
          {/* pass the current task list array to child component */}
          <CurrentTaskList curTaskList={curTaskList} />
        </div>
      </div>
    );
}

UserInput.propTypes = {
  curTaskList: PropTypes.array.isRequired,
  updateCurTaskListState: PropTypes.func.isRequired, 
  sessList: PropTypes.object.isRequired,
  updateSessListState: PropTypes.func.isRequired,
  startBtn: PropTypes.bool.isRequired,
}

export default UserInput;