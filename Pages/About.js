import React from 'react';
import './About.css';

const About = () => {
  const externalImages = [
    { title: 'Soul', imageUrl: './images/images (1).jpeg' },
    { title: 'Memory', imageUrl: './images/img3.jpg' },
    { title: 'Pencil', imageUrl: './images/1003w-cSu1pdo96zA.webp' },
  ];

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-header">
          <h1> Storybook Corner</h1>
          <p>Welcome to Storybook Corner, your ultimate destination for discovering new worlds through books.</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h4>About Us</h4>
            <p>
              At Storybook Corner, we are dedicated to bringing you a diverse and engaging collection of stories
              that cater to readers of all ages and interests. Whether you are exploring timeless classics, diving
              into contemporary bestsellers, or discovering hidden gems, our curated selection ensures there's
              something for everyone.
            </p>
            
              <h4>Our Mission</h4>
              <p>
              Our mission is to foster a love for reading and learning by providing an immersive literary experience
              that sparks imagination, encourages creativity, and promotes lifelong learning.
            </p>
          </div>
          <div className="about-images">
            {externalImages.map((item, index) => (
              <div key={index} className="book-cover">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
