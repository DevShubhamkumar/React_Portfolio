import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaMoon, FaSun, FaHome, FaUser, FaCog, FaProjectDiagram, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.cardBackground};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease-in-out;

  @media (min-width: 769px) {
    height: 100vh;
    width: 70px;
    right: auto;
  }
`;

const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 1rem 0;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
  }
`;

const NavItems = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.cardBackground};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
  }
`;

const NavItem = styled(motion.div)`
  margin: 1rem 0;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: ${({ theme, active }) => (active ? theme.primary : theme.text)};
  background-color: ${({ theme, active }) => (active ? theme.border : 'transparent')};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.border};
  }

  @media (max-width: 768px) {
    width: auto;
    height: auto;
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    margin-top: 0;
    margin-left: 1rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.4rem;
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 30px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuLine = styled(motion.span)`
  display: block;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.text};
  position: absolute;
  left: 0;
`;const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { to: 'home', icon: <FaHome /> },
    { to: 'about', icon: <FaUser /> },
    { to: 'skills', icon: <FaCog /> },
    { to: 'projects', icon: <FaProjectDiagram /> },
    { to: 'contact', icon: <FaEnvelope /> },
    { 
      to: 'https://drive.google.com/file/d/1Wje2I1x83KyFqcq18pd6IpcunkwyWBtm/view?usp=sharing', 
      icon: <FaFileDownload />, 
      external: true 
    },
  ];

  return (
    <NavbarContainer>
      <NavContent>
        <MenuButton onClick={toggleMenu}>
          <MenuLine
            initial={false}
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
          />
          <MenuLine
            initial={false}
            animate={{ opacity: isOpen ? 0 : 1 }}
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          />
          <MenuLine
            initial={false}
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            style={{ bottom: 0 }}
          />
        </MenuButton>
        <NavItems isOpen={isOpen}>
          <AnimatePresence>
            {navItems.map((item, index) => (
              <NavItem
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.external ? (
                  <NavLink as="a" href={item.to} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                  </NavLink>
                ) : (
                  <NavLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    active={activeSection === item.to}
                    onClick={toggleMenu}
                  >
                    {item.icon}
                  </NavLink>
                )}
              </NavItem>
            ))}
          </AnimatePresence>
        </NavItems>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar;