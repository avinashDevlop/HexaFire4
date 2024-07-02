import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaRobot, FaCloud, FaShieldAlt, FaChartBar } from 'react-icons/fa';

const ServicesContainer = styled.div`
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ServiceGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.card};
  border-radius: 8px;
  padding: 2rem;
  color: ${({ theme }) => theme.text};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`;

const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
    color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
`;

const LearnMoreButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.primary};
  }
`;

function Services() {
  const services = [
    { icon: FaCode, title: 'Web Development', description: 'Custom websites and web applications tailored to your needs.' },
    { icon: FaMobile, title: 'Mobile Apps', description: 'Native and cross-platform mobile applications for iOS and Android.' },
    { icon: FaRobot, title: 'AI Solutions', description: 'Intelligent systems and machine learning algorithms to optimize your business processes.' },
    { icon: FaCloud, title: 'Cloud Services', description: 'Scalable and secure cloud infrastructure and migration services.' },
    { icon: FaShieldAlt, title: 'Cybersecurity', description: 'Comprehensive security solutions to protect your digital assets.' },
    { icon: FaChartBar, title: 'Data Analytics', description: 'Advanced data analysis and visualization tools for informed decision-making.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <ServicesContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </Title>
      <ServiceGrid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}   
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ServiceIcon>
              <service.icon />
            </ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <LearnMoreButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Learn More
            </LearnMoreButton>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </ServicesContainer>
  );
}

export default Services;