import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import ResumeImg from '../Image/ResumeImg';
import PortfolioContext from '../../context/context';

const Resume = () => {
  const { resume } = useContext(PortfolioContext);
  const { img, img2 } = resume;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="resume" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <div className="hero-wrapper">
            <ResumeImg alt="Resume page 1" filename={img} />
            <ResumeImg alt="Resume page 1" filename={img2} />
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Resume;
