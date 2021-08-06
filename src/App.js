import React, { useState } from 'react';
import Sessions from './components/sessions/Sessions';
import UserInput from './components/userInput/UserInput';
import StartButton from './components/startButton/StartButton';
import Timer from './components/timer/Timer';
import './styles/media.css';
import './App.css';

const App = () => {
  // initializing state
  const [curTaskList, setCurTaskList] = useState([]);
  const [sessList, setSessList] = useState({});
  const [startBtn, setStartBtn] = useState(false);

  // change current task-list in state to a new task-list
  const updateCurTaskListState = (newTaskList) => {
    setCurTaskList(newTaskList);
  };

  // add an object to session list in state
  const updateSessListState = (newSessObj) => {
    setSessList(newSessObj);
  };

  // change start button in state to true
  const updateStartButtonState = () => {
    setStartBtn(true);
  };

  return (
    <div className='App'>
      <div className='user-input-container'>
        {/* current task list array, session list object, start button boolean, update task list action, and update session list action passed to child */}
        <UserInput
          curTaskList={curTaskList}
          sessList={sessList}
          startBtn={startBtn}
          updateCurTaskListState={updateCurTaskListState}
          updateSessListState={updateSessListState}
        />
      </div>
      <div className='sessions-container'>
        {/* session list object and start button boolean passed to child*/}
        <Sessions sessList={sessList} startBtn={startBtn} />
      </div>
      <div className='start-day-button-container'>
        {/* session list object, start button boolean, and update task list action passed to child */}
        <StartButton
          sessList={sessList}
          startBtn={startBtn}
          updateStartButtonState={updateStartButtonState}
        />
      </div>
      {/* if start button pressed, render Timer component */}
      {startBtn && (
        <div className='timer-container'>
          {/* session list object passed to child */}
          <Timer sessList={sessList} />
        </div>
      )}
    </div>
  );
};

export default App;
