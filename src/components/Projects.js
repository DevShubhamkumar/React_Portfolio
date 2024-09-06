import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { FaGithub, FaExternalLinkAlt, FaLinkedin } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ProjectsSection = styled.section`
  padding: 8rem 0;
  background: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.text};
  position: relative;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  letter-spacing: 2px;
  text-transform: uppercase;

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 5px;
    background: linear-gradient(to right, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
    margin: 1rem auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProjectCard = styled(animated.div)`
  background: linear-gradient(135deg, ${({ theme }) => theme.cardBackground}, ${({ theme }) => theme.cardBackgroundLight});
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const ProjectInfo = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textLight};
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ProjectFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const ProjectFeature = styled.li`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  &:before {
    content: '•';
    color: ${({ theme }) => theme.primary};
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  color: ${({ theme }) => theme.background};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-left: 0.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const project = {
  title: 'Public E-Marketplace',
  description: 'A comprehensive e-commerce platform that connects buyers, sellers, and administrators in a dynamic online marketplace.',
  image: '/path/to/pem-image.jpg', // Replace with actual image path
  liveLink: 'https://pem-frontend.vercel.app/',
  githubLink: 'https://github.com/DevShubhamkumar',
  linkedinLink: 'https://www.linkedin.com/in/shubham-kumar-64064828b/',
  features: [
    'User-friendly interface for buyers to browse and purchase products',
    'Secure seller platform for listing and managing products',
    'Admin dashboard for overseeing marketplace operations',
    'Comment system with moderation capabilities',
    'Product and user management features',
    'Responsive design for seamless mobile experience'
  ]
};

const Projects = () => {
  const fadeInProps = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.gentle,
  });

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Featured Project</SectionTitle>
        <ProjectCard style={fadeInProps}>
          <ProjectImage src={project.image} alt={project.title} />
          <ProjectInfo>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectFeatures>
              {project.features.map((feature, index) => (
                <ProjectFeature key={index}>{feature}</ProjectFeature>
              ))}
            </ProjectFeatures>
            <ProjectLinks>
              <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer">
                Live Demo <FaExternalLinkAlt />
              </ProjectLink>
              <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub <FaGithub />
              </ProjectLink>
              <ProjectLink href={project.linkedinLink} target="_blank" rel="noopener noreferrer">
                LinkedIn <FaLinkedin />
              </ProjectLink>
            </ProjectLinks>
          </ProjectInfo>
        </ProjectCard>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;