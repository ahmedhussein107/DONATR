import React from 'react';
import reactLogo from '.././assets/react.svg';
import homePic from '.././assets/HomePagePic.jpeg';
import ElevateAppBar from '.././Components/ElevateAppBar/ElevateAppBar.jsx';
import Footer from '.././Components/Footer/Footer.jsx';
import TextLayout from './Layout/Layout.jsx';
import DonationListt from './TriggersToolTips/DonationListt.jsx';

function Home() {
    const donationCardList = [
        { icon: reactLogo, title: "React", description: "This is React!" },
        { icon: reactLogo, title: "React", description: "This is React!" },
        { icon: reactLogo, title: "React", description: "This is Not React!" },
        { icon: reactLogo, title: "React", description: "This is React!" }
    ];

    const buttonsList = [
        { label: 'Login', directory: '/login', normalColor: '#1D8AC5', hoverColor: '#155E85' },
        { label: 'Register', directory: '/register', normalColor: '#3A69AE', hoverColor: '#2B4A7D' },
    ];

    return (
        <div className='container' style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <ElevateAppBar buttonsList={buttonsList} />
            <div className='imageAndText' style={{ flex: '1', display: 'flex' }}>
                <img className='homeImage' src={homePic} alt="home image" style={{ flex: '1', objectFit: 'cover' }}></img>
                <TextLayout style={{ flex: '1' }}></TextLayout>
            </div>
            <DonationListt />
            <Footer></Footer>
        </div>
    );
}

export default Home;