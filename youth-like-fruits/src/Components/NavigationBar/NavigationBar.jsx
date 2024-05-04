
import React from 'react'
import './NavigationBar.css'

function NavigationBar(props) {
    const title = props.title;
    const list = props.list;
    const buttons = props.buttons;
    const icons = props.icons;
    const itemsList = <ul>{list.map(item => <li>{item}</li>)}</ul>
    const buttonsList = buttons.size == 0 ? null : <ul>{buttons.map(button => <button>{button}</button>)}</ul>
    const imagesList = icons.size == 0 ? null : <ul>{icons.map(image => <img src = {image} alt = ""/>)}</ul>
  
    return (
        <div className='navbar'>
            <h6 className='title'>{title}</h6>
            <div className='itemsList'>
                {itemsList}    
            </div>
            <div className='buttonsList'>
                {buttonsList}
            </div>
            <div className='imagesList'>
                {imagesList}
            </div>
        </div>
    )
}

NavigationBar.defaultProps = {
    title: "DONATR",
    list: [],
    buttons: [],
    icons: []
}

export default NavigationBar