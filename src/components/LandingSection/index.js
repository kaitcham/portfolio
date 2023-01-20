import { useState } from 'react';
import Wrapper from './LandingSectionStyles';
import main from '../../assets/images/main.svg';
import ResumeModal from '../../utils/Resume/ResumeModal';

const HeroPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Wrapper className="full-page">
      <div className="container page">
        <div className="info">
          <h1>
            Hi, I&apos;m
            <span>Christian</span>
          </h1>
          <p>
            Creative full-stack developer with 2+ years of experience designing,
            developing, and managing complex websites. I specialize in React,
            Node, Ruby on Rails and Responsive design.
          </p>
          <button
            type="button"
            className="btn-hero"
            onClick={() => setShowModal(true)}
          >
            Resume
          </button>
        </div>
        <img src={main} alt="ImageHero" className="main-img" />
      </div>
      {showModal && <ResumeModal setShowModal={setShowModal} />}
    </Wrapper>
  );
};

export default HeroPage;
