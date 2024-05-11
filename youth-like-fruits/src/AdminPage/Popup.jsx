import React from 'react';
import PropTypes from 'prop-types';

function Popup(props) {
  const onClose = props.onClose;
  const info = props.info;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        
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
