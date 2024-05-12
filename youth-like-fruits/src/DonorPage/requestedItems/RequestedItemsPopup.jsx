import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';  
import CloseIcon from '@mui/icons-material/Close';
import ClothesInfo from './ClothesInfo';
import MyButton from '../../Components/MyButton/MyButton';
import SchoolInfo from './SchoolInfo';
import bookIcon from '../../assets/serwayIcon.jpg';
import img from '../../assets/icons/avatar_12.jpg';


function RequestedItemsPopup(props) {
  const onClose = props.onClose;
  const info = props.info;
  const fulfil = props.fulfil;
  const onClickFulfil = props.onClickFulfil;
  const type = props.type;


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <IconButton onClick={onClose}>
                <CloseIcon style={{ color: 'red', height: '5vh', width: '5vh'}}/>
             </IconButton> 
        </div>

        {type === 'Clothes' && <ClothesInfo
            age={info.age}
            gender={info.gender}
            season={info.season}
            material={info.material}
            quantity={info.quantity}
            itemName={info.itemName}
            image={info.image}
            fulfilButton={<MyButton/>}
        />}
         {type === 'School Supplies' && <SchoolInfo
            type={info.type}
            subtype={info.subtype}
            bookName={info.bookName}
            author={info.author}
            language={info.language}
            edition={info.edition}
            shortSummary={info.shortSummary}
            image={info.type === 'Book' ? bookIcon : img}
            quantity={info.quantity}
            date={info.date}
            handleButtonClick={info.handleButtonClick}
            fulfilButton={<MyButton/>}
        />}
        
      </div>
    </div>
  );
}

export default RequestedItemsPopup;
