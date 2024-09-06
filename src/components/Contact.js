import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { FaPaperPlane } from 'react-icons/fa';

const ContactSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
  padding: 2rem;
`;

const ContactContainer = styled(animated.div)`
  max-width: 1000px;
  width: 100%;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}22, ${({ theme }) => theme.secondary}22);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Title = styled(animated.h2)`
  font-size: 3rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
  text-align: center;
`;

const ContactForm = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const Input = styled(animated.input)`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}33;
  }
`;

const TextArea = styled(animated.textarea)`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}33;
  }
`;

const SubmitButton = styled(animated.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  color: ${({ theme }) => theme.background};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const containerProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.gentle,
  });

  const titleProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 300,
    config: config.wobbly,
  });

  const inputProps = useSpring({
    from: { opacity: 0, transform: 'translateX(-30px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 600,
    config: config.gentle,
  });

  const buttonProps = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 900,
    config: config.wobbly,
  });

  return (
    <ContactSection id="contact">
      <ContactContainer style={containerProps}>
        <Title style={titleProps}>Get In Touch</Title>
        <ContactForm onSubmit={handleSubmit}>
          <Input
            style={inputProps}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            style={inputProps}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea
            style={inputProps}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <SubmitButton type="submit" style={buttonProps}>
            Send Message <FaPaperPlane />
          </SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;