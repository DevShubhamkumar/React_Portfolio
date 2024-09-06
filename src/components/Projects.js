import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLinkedin } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 6rem 0;
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

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.text};
  position: relative;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  letter-spacing: 2px;
  text-transform: uppercase;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
    margin: 1rem auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: linear-gradient(135deg, ${({ theme }) => theme.cardBackground}, ${({ theme }) => theme.cardBackgroundLight});
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImageWrapper = styled.div`
  flex: 0 0 40%;
  max-height: 300px;
  overflow: hidden;

  @media (max-width: 767px) {
    max-height: 200px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectInfo = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textLight};
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProjectFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const ProjectFeature = styled.li`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  &:before {
    content: '•';
    color: ${({ theme }) => theme.primary};
    font-size: 1.3rem;
    margin-right: 0.5rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.7rem 1.2rem;
  border-radius: 50px;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  color: ${({ theme }) => theme.background};
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-left: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
`;

const project = {
  title: 'Public E-Marketplace',
  description: 'A comprehensive e-commerce platform that connects buyers, sellers, and administrators in a dynamic online marketplace.',
  image: './pem.jpg', // Replace with actual image path
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
  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Project
        </SectionTitle>
        <ProjectCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ProjectImageWrapper>
            <ProjectImage src={project.image} alt={project.title} />
          </ProjectImageWrapper>
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