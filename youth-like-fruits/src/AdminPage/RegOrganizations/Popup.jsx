import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';

function Popup(props) {
  const onClose = props.onClose;
  const info = props.info;
  const save = props.save;
  const accept = props.accept;
  const reject = props.reject;
  const download = props.download;
  const onClickAccept = props.onClickAccept;
  const onClickReject = props.onClickReject;
  const onClickDownload = props.onClickDownload;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div style={{marginTop: '7vh' , marginBottom: '-3vh'}}>
          <Info  
            header='Request Information' 
            name={info.name}
            age={info.age}
            email={info.email}
            address={info.address}
            state={info.state}
            country={info.country}      
            occupation={info.occupation}
            organization={info.organization}
            phoneNumber={info.phoneNumber}
            date={info.date}
            image={info.image}
            saveButton={save? {
              normalColor: "#1D8AC5",
              hoverColor: "#135E86"
            }: null}
            acceptButton={accept ? {
              normalColor: "#20C585",
              hoverColor: "#20FF88",
              onClick: onClickAccept,
            }: null}
            rejectButton={reject ? {
              normalColor: "#E73C35",
              hoverColor: "#FF4500",
              onClick: onClickReject,
            }: null}
            downloadButton={download ? {
              normalColor: "#1D8AC5",
              hoverColor: "#135E86",
              onClick: onClickDownload,
            }: null}
          />
        </div>
      </div>
    </div>
  );
}

Popup.propTypes = {
  onClose: PropTypes.func,
  info: PropTypes.array,
  save: PropTypes.bool,
  accept: PropTypes.bool,
  reject: PropTypes.bool,
  download: PropTypes.bool,
  onClickAccept: PropTypes.func,
  onClickReject: PropTypes.func,
  onClickDownload: PropTypes.func,
};

Popup.defaultProps = {
  onClose: () => {},
  info: [],
  save: true,
  accept: true,
  reject: true,
  download: true,
  onClickAccept: () => {},
  onClickReject: () => {},
  onClickDownload: () => {},
};

export default Popup;
