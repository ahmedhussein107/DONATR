import React from 'react';
import PropTypes from 'prop-types';

function Popup(props) {
  const onClose = props.onClose;
  const info = props.info;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div style={{marginLeft: '5%' , gap: '5%'}}>
        <div style={{display: 'flex' , flexDirection: 'row'}}>
          <div>
            
          </div>
          <div>

          </div>
        </div>
        <div>

        </div>
        </div>

      </div>
    </div>
  );
}

Popup.propTypes = {
  onClose: PropTypes.func,
  info: PropTypes.array
};

Popup.defaultProps = {
  onClose: () => {},
  info: []
};

export default Popup;
