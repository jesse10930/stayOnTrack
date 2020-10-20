import React from 'react';
import SessionItem from './SessionItem';
import PropTypes from 'prop-types';

const Sessions = ({ startBtn, sessList }) => {  
    return (
      // hide div when start button pressed
      !startBtn && (
        <div className='all-sessions-container'>
          {/* map over session list prop keys, returning a session item component for each */}
          {Object.keys(sessList).map((time) => (
            // pass session end time and task list array to child
            <SessionItem
              id={Object.keys(sessList).indexOf(time) + 1}
              key={Math.floor(Math.random() * 1000 + 1)}
              time={time}
              sessTasks={sessList[time]}
            />
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