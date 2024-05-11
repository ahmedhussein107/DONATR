import React from 'react';
import PropTypes from 'prop-types';
import ProfilePage from '../DonorPage/profile';

function Popup(props) {
  const onClose = props.onClose;
  const info = props.info;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div style={{marginTop: '7vh' , marginBottom: '-3vh'}}>
          <ProfilePage 
            header='Request Information' 
            name={info.name}
            age={info.age}
            email={info.email}
            address={info.address}
            state={info.state}
            country={info.country}
            occupation={info.occupation}
            phoneNumber={info.phoneNumber}
            date={info.date}
            image={info.image}
          />
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
