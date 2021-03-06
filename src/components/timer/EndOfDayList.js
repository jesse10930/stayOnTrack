import React from 'react';
import EndOfDayItem from './EndOfDayItem';
import PropTypes from 'prop-types';

const EndOfDayList = ({ endTimes, tasks }) => {
    return(
      <div className='endofdaylist-comp-container'>
        {/* map through end times array, return to endOfDayItem component the endtime and array of checked/unchecked tasks*/}
        {endTimes.map((time, index) => (
          <EndOfDayItem
            id={endTimes.indexOf(time) + 1}
            key={index}
            time={time}
            sessTasks={tasks[endTimes.indexOf(time)]}
          />
        ))}
      </div>
    );
}

EndOfDayList.propTypes = {
  endTimes: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
}

export default EndOfDayList;