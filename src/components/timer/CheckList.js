import React from 'react';
import PropTypes from 'prop-types';

const CheckList = ({ sessTasks, onCheck }) => {
    return (
      // return form when session list has been filled from parent
      sessTasks !== undefined && (
        <form className='checklist-comp-container'>
          {/* map through session tasks array, return a checkbox item for each element */}
          {sessTasks.map((task, index) => (
            <div
              key={Math.floor(Math.random() * 1000 + index)}
              className='check-item'
            >
              <input
                className='check'
                type='checkbox'
                id={Math.floor(Math.random() * 1000 + index)}
                name={task}
                onClick={onCheck}
              ></input>
              <label className='item' htmlFor={task}>
                {task}
              </label>
            </div>
          ))}
        </form>
      )
    );
}

CheckList.propTypes = {
  sessTasks: PropTypes.array,
  onCheck: PropTypes.func.isRequired,
}

export default CheckList;