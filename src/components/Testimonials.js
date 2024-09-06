import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { FaQuoteLeft } from 'react-icons/fa';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const TestimonialsSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  margin-left: 250px; // Adjust this value based on your side navbar width
`;

const TestimonialsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #ffffff;
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
    background: #ffffff;
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
`;

const TestimonialCard = styled(animated.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 48px 0 rgba(31, 38, 135, 0.5);
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
    z-index: 0;
  }
`;

const QuoteIcon = styled(FaQuoteLeft)`
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  line-height: 1.6;
  position: relative;
  z-index: 1;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const TestimonialImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 1rem;
  border: 3px solid #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TestimonialName = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
`;

const testimonials = [
  {
    text: "Shubham is an exceptional developer. His attention to detail and problem-solving skills are impressive.",
    name: "John Doe",
    image: "/path/to/john-doe.jpg",
  },
  {
    text: "Working with Shubham was a great experience. He delivers high-quality work and is always eager to learn.",
    name: "Jane Smith",
    image: "/path/to/jane-smith.jpg",
  },
  {
    text: "Shubham's expertise in the MERN stack is outstanding. He consistently exceeds expectations.",
    name: "Mike Johnson",
    image: "/path/to/mike-johnson.jpg",
  },
];

const Testimonials = () => {
  const fadeInProps = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.gentle,
  });

  return (
    <TestimonialsSection id="testimonials">
      <TestimonialsContainer>
        <SectionTitle>Testimonials</SectionTitle>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} style={fadeInProps}>
              <QuoteIcon />
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <TestimonialAuthor>
                <TestimonialImage src={testimonial.image} alt={testimonial.name} />
                <TestimonialName>{testimonial.name}</TestimonialName>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;