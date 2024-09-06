import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaCode, FaLaptopCode, FaGithub } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


const AboutSection = styled.section`
  background-color: ${({ theme }) => theme.background};
  padding: 4rem 0;
  margin-left: 0;

  @media (min-width: 768px) {
    padding: 6rem 0;
     margin-left: 100px;

  }

  @media (min-width: 1200px) {
    padding: 8rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 1200px) {
    padding: 0 4rem;
  }
`;

const AboutContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 4rem;
  }

  @media (min-width: 1200px) {
    gap: 8rem;
  }
`;

const AboutText = styled(motion.div)`
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 80px;
    height: 4px;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 120px;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1200px) {
    font-size: 3.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.7;
  }

  @media (min-width: 1200px) {
    font-size: 1.2rem;
    line-height: 1.9;
    margin-bottom: 2rem;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const AboutImageWrapper = styled(motion.div)`
  width: 280px;
  height: 280px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
  }

  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    right: 15px;
    bottom: 15px;
    border: 4px solid ${({ theme }) => theme.primary};
    border-radius: 50%;
    z-index: -1;
  }

  @media (min-width: 768px) {
    width: 350px;
    height: 350px;
  }

  @media (min-width: 1200px) {
    width: 450px;
    height: 450px;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const QualificationsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1200px) {
    gap: 2rem;
    margin-top: 3rem;
  }
`;

const QualificationItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 1rem 1.2rem;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    padding: 1.1rem 1.5rem;
  }

  @media (min-width: 1200px) {
    padding: 1.2rem 1.8rem;
    gap: 1rem;
  }
`;

const QualificationIcon = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};

  @media (min-width: 1200px) {
    font-size: 1.8rem;
  }
`;

const QualificationText = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.1rem;
  }
`;
const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.6, delay: 0.6, ease: "easeOut" } }
  };

  const qualificationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.9 + i * 0.1, ease: "easeOut" }
    })
  };

  const qualifications = [
    { icon: FaGraduationCap, text: "MCA from Jain University" },
    { icon: FaGraduationCap, text: "BSc" },
    { icon: FaCode, text: "Diploma in Full Stack Web Development (MERN)" },
    { icon: FaLaptopCode, text: "Internship Certificate" },
  ];

  return (
    <AboutSection id="about" ref={sectionRef}>
      <Container>
        <AboutContent
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={contentVariants}
        >
          <AboutText variants={textVariants}>
            <SectionTitle>About Me</SectionTitle>
            <Paragraph>
              Hello! I'm <Highlight>Shubham</Highlight>, a passionate Full Stack Web Developer with expertise in the <Highlight>MERN stack</Highlight>. 
              With a strong foundation in computer science and a drive for continuous learning, I've honed my skills to create impactful web solutions.
            </Paragraph>
            <Paragraph>
              My journey in tech has been exciting and diverse. From completing my <Highlight>MCA at Jain University</Highlight> to 
              gaining hands-on experience through internships and personal projects, I've cultivated a well-rounded skill set that 
              allows me to tackle complex challenges in web development.
            </Paragraph>
            <QualificationsWrapper>
              {qualifications.map((qual, index) => (
                <QualificationItem 
                  key={index} 
                  variants={qualificationVariants}
                  custom={index}
                >
                  <QualificationIcon>
                    <qual.icon />
                  </QualificationIcon>
                  <QualificationText>{qual.text}</QualificationText>
                </QualificationItem>
              ))}
            </QualificationsWrapper>
          </AboutText>
          <AboutImageWrapper variants={imageVariants}>
            <AboutImage src="/profile.jpg" alt="Shubham Kumar" />
          </AboutImageWrapper>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;