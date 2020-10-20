import React from 'react';
import PropTypes from 'prop-types';

const SessionItem = ({ id, time, sessTasks }) => {
    return (
      <div className='session-container'>
        <h3>
          Session {id} End - {time}
        </h3>
        <br></br>
        <ul className='session-ul'>
          {/* map over task list array, return a list item for each task */}
          {sessTasks.map((task) => (
            <li
              className='session-task'
              key={Math.floor(Math.random() * 1000 + 1)}
            >
              {task}
            </li>
          ))}
        </ul>
      </div>
    );
}

SessionItem.propTypes = {
  id: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  sessTasks: PropTypes.array.isRequired,
}

export default SessionItem;