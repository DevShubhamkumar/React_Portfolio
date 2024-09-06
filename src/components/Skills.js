import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiBootstrap, SiTailwindcss } from 'react-icons/si';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const SkillsSection = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;
  margin-left: 0;

  @media (min-width: 768px) {
    padding: 6rem 0;
    margin-left: 250px; // Adjust based on your side navbar width
  }

  @media (min-width: 1200px) {
    padding: 8rem 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%);
    transform: rotate(30deg);
    z-index: 0;
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

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
  position: relative;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 1200px) {
    font-size: 4rem;
    margin-bottom: 4rem;
  }

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
    margin: 1rem auto 0;
    border-radius: 2px;

    @media (min-width: 768px) {
      width: 100px;
      height: 5px;
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  @media (min-width: 1200px) {
    gap: 3rem;
  }
`;

const SkillItem = styled(animated.div)`
  background: linear-gradient(135deg, ${({ theme }) => theme.cardBackground}, ${({ theme }) => theme.cardBackgroundLight});
  padding: 2rem 1.5rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.4s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }

  @media (min-width: 1200px) {
    padding: 3rem 2.5rem;
  }

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
    transform: rotate(30deg);
    transition: all 0.6s ease;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
  animation: ${float} 3s ease-in-out infinite;

  @media (min-width: 768px) {
    font-size: 4rem;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 1200px) {
    font-size: 5rem;
    margin-bottom: 1.5rem;
  }
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`;

const SkillDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textLight};
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const skills = [
  { name: 'React', icon: FaReact, description: 'Modern frontend library for building user interfaces' },
  { name: 'Node.js', icon: FaNodeJs, description: 'JavaScript runtime for server-side development' },
  { name: 'Express', icon: SiExpress, description: 'Fast, unopinionated web application framework' },
  { name: 'MongoDB', icon: SiMongodb, description: 'Flexible NoSQL database for modern applications' },
  { name: 'JavaScript', icon: FaJs, description: 'Versatile programming language for web development' },
  { name: 'HTML5', icon: FaHtml5, description: 'Latest version of the markup language for the web' },
  { name: 'CSS3', icon: FaCss3Alt, description: 'Powerful styling language for web design' },
  { name: 'Bootstrap', icon: SiBootstrap, description: 'Popular CSS framework for responsive design' },
  { name: 'Tailwind', icon: SiTailwindcss, description: 'Utility-first CSS framework for rapid UI development' },
];

const Skills = () => {
  const skillProps = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.gentle,
  });

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>My Expertise</SectionTitle>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillItem key={index} style={{...skillProps, delay: index * 100}}>
              <SkillIcon as={skill.icon} />
              <SkillName>{skill.name}</SkillName>
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillItem>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;