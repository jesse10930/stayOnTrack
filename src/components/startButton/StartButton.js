import React from 'react';
import PropTypes from 'prop-types';

const StartButton = ({ startBtn, sessList, updateStartButtonState }) => {
  // when clicked, update app-level start button state
  const onClick = (event) => {
    event.preventDefault();
    updateStartButtonState();
    document.getElementById('start').blur();
  };

    return (
      <div
        className='start-btn-comp-container'
        // hide div when start button clicked
        style={{ display: startBtn ? 'none' : '' }}
      >
        <div className='start-btn-activate'>
          {/* when first session added to session list object, return the div */}
          {Object.keys(sessList).length > 0 ? (
            <div className='start-btn-comp-container'>
              <input
                id='start'
                type='submit'
                className='start-btn'
                value='Start Day!'
                onClick={onClick}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
}

StartButton.propTypes = {
  startBtn: PropTypes.bool.isRequired,
  sessList: PropTypes.object.isRequired,
  updateStartButtonState: PropTypes.func.isRequired,
}

export default StartButton;