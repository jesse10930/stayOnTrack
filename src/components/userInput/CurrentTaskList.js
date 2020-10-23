import React from 'react';
import PropTypes from 'prop-types';

const CurrentTaskList = ({ curTaskList }) => {    
    return (
      <div className='curr-task-ul-container'>
        <ul className='curr-task-ul'>
          {/* maps through current task list array, making each element a list item with a random key from 1 to 1000 */}
          {curTaskList.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
}

CurrentTaskList.propTypes = {
  curTaskList: PropTypes.array.isRequired
}

export default CurrentTaskList;