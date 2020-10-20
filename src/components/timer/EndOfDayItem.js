import React from 'react';
import PropTypes from 'prop-types';

const EndOfDayItem = ({ id, time, sessTasks }) => {
    return (
      <div className='endofdayitem-container'>
        <h3>
          Session {id} - {time}
        </h3>
        <br></br>
        <div className='endofdayitem-lists'>
          <ul className='endofdayitem-ul'>
            {/* checked tasks from tasks array */}
            {sessTasks[0].map((task) => (
              <li
                className='completed-task'
                key={Math.floor(Math.random() * 1000 + 1)}
              >
                {task}
              </li>
            ))}
          </ul>
          <ul className='endofdayitem-ul'>
            {/* unchecked tasks from tasks array */}
            {sessTasks[1].map((task) => (
              <li
                className='not-completed-task'
                key={Math.floor(Math.random() * 1000 + 1)}
              >
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

EndOfDayItem.propTypes = {
  id: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  sessTasks: PropTypes.array.isRequired,
}

export default EndOfDayItem