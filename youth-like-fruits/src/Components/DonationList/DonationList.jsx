
import React from 'react'
import DonationCard from '../DonationCard/DonationCard';
import './DonationList.css'

function DonationList(props) {
    const list = <ul>
                    {props.list.map
                        (item => 
                        <DonationCard icon = {item.icon} 
                        title = {item.title} 
                        description = {item.description}/>)}
                </ul>
  return (
    <div>{list}</div>
  )
}

export default DonationList