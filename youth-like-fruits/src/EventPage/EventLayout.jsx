import React from 'react';

const items = [
  {
    imageUrl: 'https://www.socialtables.com/wp-content/uploads/2016/10/iStock-540095978.jpg', // Replace with your image URL
    title: 'Race For Life',
    description: 'This years event takes place on Friday 20 September following our addition to the UN Calendar of International Days! We aim to activate 5% of the worlds population that will catalyse lasting societal change in behaviour around mismanaged waste.We invite people from all sectors, from every nation, from all levels of society to join us. Lets do it – together!ancer Research UK fundraiser has raised double the amount of its nearest competitor and shows no signs of loosening its grip on its crown.',
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdcn4rN5qb8xkuMXvI5clJ7algxot7p6Rzv56PANaPXcPxbHw/viewform' // Replace with your actual form link
  },
  {
    imageUrl: 'https://bestfundraisingideas.com/wp-content/uploads/Best-Fundraising-Ideas_Dance-a-Thon_Feature-1.png', // Replace with your image URL
    title: 'Dance-a-Thon',
    description: 'Want to show off your dance moves and raise money at the same time? Hosting a dance-a-thon is a fun and easy way for schools and organizations to fundraise.',
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScwezwi0A6_QtKPS6PK6t0NC9vA-SgSSEMLycFKw1xjfMvp0g/viewform?usp=sf_link' // Replace with your actual form link
  },
  {
    imageUrl: 'https://assets.entrepreneur.com/content/3x2/2000/20180102161145-GettyImages-626891352.jpeg', // Replace with your image URL
    title: 'Boca Grande',
    description: 'The Boca Grande Hope for Haitians Committee and Food For The Poor need your support to help build homes to benefit families in Terre Cassée, Haiti.',
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfBbaH8MF2oUCSNLBlxiQX2Da0VzEIuay-y3wc2h0CCYEZjGw/viewform?usp=sf_link' // Replace with your actual form link
  }
];

const Box = ({ imageUrl, title, description, formLink }) => {
  return (
    <div className="box" style={{ margin: '20px', width: '300px' }}>
      <img src={imageUrl} alt={title} className="image" style={{ width: '100%', borderRadius: '5px' }} />
      <div className="content">
        <h3 className="title" style={{ marginTop: '10px', fontSize: '1.2em' }}>{title}</h3>
        <p className="description" style={{ marginTop: '10px' }}>{description}</p>
      </div>
      <a href={formLink} target="_blank" rel="noopener noreferrer" className="register-button" style={{ display: 'block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
        Register Here
      </a>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {items.map((item) => (
        <Box
          key={item.title}
          imageUrl={item.imageUrl}
          title={item.title}
          description={item.description}
          formLink={item.formLink} // Use the formLink from each item object
        />
      ))}
    </div>
  );
};

export default App;