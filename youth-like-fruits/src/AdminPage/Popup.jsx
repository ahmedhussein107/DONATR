import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import ProfilePage from '../DonorPage/profile';

function Popup(props) {
  const onClose = props.onClose;
  const info = props.info;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <ProfilePage header='Request Information'/>
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
