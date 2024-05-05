
import React from 'react'

function DonationCard(props) {
    const icon = props.icon;
    const title = props.title;
    const description = props.description;
  return (
    <div style= {{
                    display: 'flex',
                    background: '#3c4f59',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '10px',
                    minWidth: '250px',
                    maxWidth: '350px',
                    minHeight: '140px',
                    maxHeight: '180px',
                    marginLeft: '30px'
                }}>
        <img src = {icon} alt = "this is the icon"></img>
        <div style={{fontFamily: "Roboto" , marginLeft: '20px'}}>
            <h6 style={{fontSize: "24px" , fontWeight: "bold" , marginTop: '10px'}}>{title}</h6>
            <p style={{fontSize: "14px" , fontWeight: "400", marginBottom: '10px'}}>{description}</p>
        </div>
    </div>
  )
}

DonationCard.defaultProps = {
    icon: "",
    title: "",
    description: ""
}

export default DonationCard