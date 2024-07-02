import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaLightbulb, FaUsers, FaChartLine, FaQuoteLeft } from 'react-icons/fa';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  box-sizing: border-box;
`;

const HeroSection = styled(Section)`
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('path/to/hero-background.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.2;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(motion(Link))`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #e94560;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  z-index: 1;

  &:hover {
    background-color: #c73e54;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(233, 69, 96, 0.5);
  }
`;

const FeaturesSection = styled(Section)`
  background-color: #f4f4f4;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

const FeatureCard = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #e94560;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #16213e;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #333;
`;

const TestimonialsSection = styled(Section)`
  background-color: #16213e;
  color: white;
  text-align: center;
`;

const TestimonialCard = styled(motion.div)`
  max-width: 800px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 3rem;
  border-radius: 12px;
  position: relative;
`;

const QuoteIcon = styled(FaQuoteLeft)`
  font-size: 3rem;
  color: #e94560;
  position: absolute;
  top: -1.5rem;
  left: 2rem;
`;

const TestimonialText = styled.p`
  font-size: 1.3rem;
  font-style: italic;
  margin-bottom: 1.5rem;
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
`;

const CTASection = styled(Section)`
  background-color: #e94560;
  color: white;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  max-width: 700px;
`;

const SecondaryButton = styled(motion(Link))`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: white;
  color: #e94560;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f4f4f4;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.3);
  }
`;

function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroBackground />
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Hexafire4
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Igniting Innovation in Technology - We transform ideas into powerful digital solutions that revolutionize industries and drive success.
        </Subtitle>
        <CTAButton
          to="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Journey
        </CTAButton>
      </HeroSection>

      <FeaturesSection>
        <FeatureGrid>
        {[
  { 
    icon: FaRocket, 
    title: 'Rapid Development', 
    description: 'We employ cutting-edge agile methodologies to deliver high-quality projects quickly and efficiently, ensuring your ideas come to life at lightning speed.'
  },
  { 
    icon: FaLightbulb, 
    title: 'Innovative Solutions', 
    description: 'Our team of experts crafts cutting-edge solutions tailored to your unique challenges, pushing the boundaries of what\'s possible in technology.'
  },
  { 
    icon: FaUsers, 
    title: 'Collaborative Approach', 
    description: 'We work closely with you at every step, ensuring your vision is realized through open communication, regular updates, and iterative development.'
  },
  { 
    icon: FaChartLine, 
    title: 'Scalable Technology', 
    description: 'Our solutions are built to grow with your business, leveraging cloud technologies and microservices architecture for unparalleled scalability and performance.'
  },
].map((feature, index) => (
  <FeatureCard
    key={index}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
  >
    <FeatureIcon>
      <feature.icon />
    </FeatureIcon>
    <FeatureTitle>{feature.title}</FeatureTitle>
    <FeatureDescription>{feature.description}</FeatureDescription>
  </FeatureCard>
))}
        </FeatureGrid>
      </FeaturesSection>

      <TestimonialsSection>
        <TestimonialCard
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <QuoteIcon />
          <TestimonialText>
            "Hexafire4 transformed our business with their innovative AI solution. Their team's expertise, dedication, and collaborative approach not only met but exceeded our expectations. The scalable technology they implemented has positioned us for long-term success in our industry."
          </TestimonialText>
          <TestimonialAuthor>- Boochetati Manohar, CEO of TechInnovate</TestimonialAuthor>
        </TestimonialCard>
      </TestimonialsSection>

      <CTASection>
        <CTATitle>Ready to Ignite Your Digital Transformation?</CTATitle>
        <CTAText>
          Let's collaborate to bring your ideas to life and propel your business into the future of technology. Our team of experts is ready to turn your vision into reality.
        </CTAText>
        <SecondaryButton
          to="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Project Today
        </SecondaryButton>
      </CTASection>
    </HomeContainer>
  );
}

export default Home;