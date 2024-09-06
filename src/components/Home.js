import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { useSpring, animated, config } from 'react-spring';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;
  margin-left: 250px;

  @media (max-width: 1200px) {
    margin-left: 200px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    flex-direction: column;
  }
`;

const LeftPanel = styled(animated.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5%;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);

  @media (max-width: 768px) {
    clip-path: none;
    padding: 2rem;
  }
`;

const RightPanel = styled(animated.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5%;

  @media (max-width: 768px) {
    padding: 2rem;
    align-items: center;
    text-align: center;
  }
`;

const Name = styled(animated.h1)`
  font-size: 5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.background};
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: 2px;

  @media (max-width: 1200px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Title = styled(animated.h2)`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.background};
  margin-bottom: 1.5rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 3px;

  @media (max-width: 1200px) {
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const SubtitleContainer = styled(animated.p)`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2.5rem;
  max-width: 600px;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const HighlightedText = styled.span`
  background: linear-gradient(120deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
`;

const CTAButton = styled(Link)`
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  color: ${({ theme }) => theme.background};
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border: none;
  outline: none;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled(animated.div)`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin-top: 2rem;
  }
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-5px) scale(1.1);
  }
`;

const ScrollDownIcon = styled(animated.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.text};
  font-size: 2.5rem;
  animation: ${float} 2s ease-in-out infinite;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
const Home = () => {
  const [subtitle, setSubtitle] = useState('');
  const fullSubtitle = "Crafting innovative web solutions with the MERN stack. Turning ideas into seamless, scalable applications.";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullSubtitle.length) {
        setSubtitle(prev => prev + fullSubtitle[i]);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  const leftPanelProps = useSpring({
    from: { opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    config: config.molasses,
  });

  const rightPanelProps = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    config: config.molasses,
  });

  const nameProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 300,
    config: config.wobbly,
  });

  const titleProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 600,
    config: config.wobbly,
  });

  const subtitleProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 900,
    config: config.gentle,
  });

  const buttonProps = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 1200,
    config: config.wobbly,
  });

  const socialProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1500,
    config: config.gentle,
  });

  const scrollDownProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2000,
    config: config.gentle,
  });

  return (
    <HomeSection id="home">
      <LeftPanel style={leftPanelProps}>
        <Name style={nameProps}>Shubham Kumar</Name>
        <Title style={titleProps}>MERN Stack Developer</Title>
      </LeftPanel>
      <RightPanel style={rightPanelProps}>
        <SubtitleContainer style={subtitleProps}>
          {subtitle.split(' ').map((word, index) => {
            if (['MERN'].includes(word)) {
              return <HighlightedText key={index}>{word} </HighlightedText>;
            }
            return word + ' ';
          })}
        </SubtitleContainer>
        <animated.div style={buttonProps}>
          <CTAButton to="projects" smooth={true} duration={500}>
            View My Work
          </CTAButton>
        </animated.div>
        <SocialLinks style={socialProps}>
          <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="mailto:your.email@example.com">
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
      </RightPanel>
      <ScrollDownIcon style={scrollDownProps}>
        <FaArrowDown />
      </ScrollDownIcon>
    </HomeSection>
  );
};

export default Home;