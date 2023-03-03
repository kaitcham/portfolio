import React from 'react';
import Wrapper from './styles';
import image from '../../assets/images/kaitcham.jpg';

const About = () => (
  <Wrapper id="about" className="container">
    <h2>About me</h2>
    <div className="about-content">
      <div className="about-image">
        <img src={image} alt="me" />
      </div>
      <div className="about-info">
        <h2>Hi, my name is Christian</h2>
        <p>
          My biggest goal in life is to build software solutions for businesses
          and make people&apos;s experience with technolgy more memorable.
          Recently I was being trained on how to work remotely at Microverse, an
          online training school where I coded 8 hours a day with different
          developers around the world through pair programming using various
          technologies like React, Node, Ruby on Rails, MongoDB, and many more.
          During this time I&apos;ve learned how to work in a team, how to
          communicate with people from different cultures and how to solve
          problems in a fast and efficient way due to weekly capstone projects I
          used to submit.
        </p>
        <p>
          My latest work experience was at Besoft where I worked as a junior
          developer intern and my responsibilities included testing application
          features using Jest framework and translating the design team&apos;s
          UX wireframes and mockups into responsive and interactive features.
        </p>
        <p>
          I&apos;ve spent my entire career chasing one challenge after another
          and if you are looking for a developer I&apos;d be able to help you
          out.
        </p>
      </div>
    </div>
  </Wrapper>
);

export default About;
