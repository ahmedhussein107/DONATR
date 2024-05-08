import React from 'react';
import MyButton from '../../Components/MyButton/MyButton.jsx'

function RegLeftSide() {
    const gradientStyle = {
        background: `linear-gradient(to bottom, #3C4F59, #426D84)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        padding: '10%',
        minHeight: '80vh',
    };

    const contentStyle = {
        color: 'white', // Set text color to white
        fontSize: '1.2rem', // Adjust font size as needed
    };

    const titleStyle = {
        fontWeight: 'Lato', // Make the title bold
        marginBottom: '150%', // Add margin bottom for spacing between title and other items
        lineHeight: '1.4', // Set line height for the title (consider a global setting)
        fontSize: '200%', // Set font size for titles
        color: 'WHITE', // Example color (check contrast against background)
    };

    const listItemStyle = {
        fontWeight: 'Lato', // Make the title bold
        marginBottom: '100%', // Add some bottom margin to each list item for spacing
        fontSize: '120%', // Set font size for list items
        color: 'WHITE', // Example color (check contrast against background)
    };
    const buttonStyle = {
        height: 80, // Adjust height as desired (in pixels)
        // OR (if MyButton component supports height prop)
        // ...MyButton.defaultProps,
        // height: 50, // Set height in MyButton props
    };
    return (
        <div style={gradientStyle}>
            <h2
                style={{
                    fontSize: '44px',
                    fontFamily: 'Josefin Sans',
                    fontWeight: '400',
                    color: '#FFFFFF',
                    textAlign: 'center',
                }}
            >
                Welcome to <b style={{
                    fontSize: '44px',
                    fontFamily: 'Josefin Sans',
                    fontWeight: '400',
                    color: '#FFFFFF',
                    textAlign: 'center',
                }}>DONATR</b>
            </h2>
            <p style={{ fontSize: '20px', fontFamily: 'Josefin Sans', fontWeight: '400', color: '#FFFFFF', marginBottom: '10px' }}>
                Let's unlock the power of giving
            </p>
            <svg width="100%" height="2">
                <line x1="40%" y1="1" x2="60%" y2="1" stroke="#FFF" strokeWidth="2" />
            </svg>

            <div style={{ marginTop: '20px', marginBottom: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '100%', textAlign: 'center' }}>
                <p style={{ fontSize: '20px', fontFamily: 'Josefin Sans', fontWeight: '500', color: '#FFFFFF', marginBottom: '15px' }}>Step 2</p>
                <p style={{ fontSize: '20px', fontFamily: 'Josefin Sans', fontWeight: '300', color: '#FFFFFF' }}>Basic Information</p>
            </div>


            <MyButton
                label={'Talk To Our Support Team'}
                normalColor='#1D8AC5'
                hoverColor={'#155E85'}
                minimumWidth={300}
                minimumHeight={85}
            />

        </div>
    );
}

export default RegLeftSide;