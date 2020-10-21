import React from 'react';
// import SessionItem from './SessionItem';
import PropTypes from 'prop-types';

const Sessions = ({ startBtn, sessList }) => {  
    return (
      // hide div when start button pressed
      !startBtn && (
        <div className='all-sessions-container'>
          {/* map over session list prop keys, returning a session item div for each */}
          {Object.keys(sessList).map((time) => (
            <div className='session-container' key={Math.floor(Math.random() * 1000 + 1)}>
              <h3>
                Session {Object.keys(sessList).indexOf(time) + 1} End - {time}
              </h3>
              <br></br>
              <ul className='session-ul'>
                {/* map over task list array, return a list item for each task */}
                {sessList[time].map((task) => (
                  <li
                    className='session-task'
                    key={Math.floor(Math.random() * 1000 + 1)}
                  >
                    {task}
                  </li>
                ))}
              </ul>
            </div>
            // SessionItem component kept disappearing on deployment, temp fix above
            // <SessionItem
            //   id={Object.keys(sessList).indexOf(time) + 1}
            //   key={Math.floor(Math.random() * 1000 + 1)}
            //   time={time}
            //   sessTasks={sessList[time]}
            // />
          ))}
        </div>
      )
    );
}

Sessions.propTypes = {
  startBtn: PropTypes.bool.isRequired,
  sessList: PropTypes.object.isRequired,
}

export default Sessions;