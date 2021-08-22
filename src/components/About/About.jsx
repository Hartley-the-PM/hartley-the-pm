import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="about">
      <Container>
        <Title title="About Hartley" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'There is only one opinion that matters in business - the customer. Hartley Shapiro is unshakably devoted to driving innovation in the medical technology space. His why is to help clinicians better serve patients, families, and communities.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Hartley is obsessed with customer insights and data-driven decision-making. Hartley strives to understand the daily roadmaps of his customers to improve user experience and patient outcomes.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'Hartley is a highly analytical individual with diverse experience in data analytics, marketing strategy, and product management. Hartley is a self-starter with strong communication skills that have proven to be successful in collaborating with people across all levels of an organization. A passionate learner, Hartley continuously looks to challenge himself and develop new competencies in technical skills and product management frameworks. Hartley is excellent at analyzing complex information, identifying opportunities for improvement, and developing innovative strategies resulting in increased operational efficiency. And with a proven ability to identify key trends and develop effective business plans, Hartley has shown an ability to grow the users of the products he manages.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
