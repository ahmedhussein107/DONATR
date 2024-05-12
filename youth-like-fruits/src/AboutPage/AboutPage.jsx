import React from 'react';
import './AboutPage.css'; // Import your CSS file

const About = () => {
    
    return (
    <div className="about-page">
      <section className="hero">
        <h1>About DONATR</h1>
        <p>
          DONATR is a non-profit organization dedicated to helping those in need. 
          We work tirelessly to provide essential resources and support to communities worldwide.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          DONATR's mission is to empower individuals and communities through sustainable initiatives. 
          We believe in fostering positive change and creating a better future for all.
        </p>
      </section>

      <section className="impact">
        <h2>Our Impact</h2>
        <p>
          Since our founding in 20XX, DONATR has made a significant impact. 
          Here are some of our achievements:
        </p>
        <ul className="impact-list">
          <li>Implemented clean water projects in rural areas</li>
          <li>Provided educational scholarships to underprivileged students</li>
          <li>Established healthcare clinics in underserved communities</li>
        </ul>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <p>
          DONATR is powered by a passionate team of dedicated individuals. 
          Meet some of our key members:
        </p>
        <div className="team-members">
          {/* Add team member profiles here (optional) */}
        </div>
      </section>

      <section className="get-involved">
        <h2>Get Involved</h2>
        <p>
          There are many ways you can support DONATR and make a difference. 
          Here are some ideas:
        </p>
        <ul className="get-involved-list">
          <li>Donate</li>
          <li>Volunteer your time</li>
          <li>Spread awareness</li>
          <li>Fundraise on our behalf</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
