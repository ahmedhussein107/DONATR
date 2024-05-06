import React from 'react';

function Popup({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div style={{fontSize: '3.6vh' , marginTop: '14%'}}>
            <p style={{color: '#111111' , fontFamily: 'Roboto'}}>Nothing New</p>
            <p style={{color: '#111111' , fontFamily: 'Roboto'}}>Everything is up to date!</p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
