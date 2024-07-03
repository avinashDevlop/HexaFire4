import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMobile, FaCogs, FaChartBar, FaShoppingCart, FaGraduationCap, FaHospital, FaUtensils } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const services = [
    { 
      icon: FaGraduationCap, 
      title: 'Learning Management System', 
      description: 'Comprehensive e-learning platforms for educational institutions and corporate training.',
      detailsPage: '/HomeBodyBlog'
    },
    { 
      icon: FaCogs, 
      title: 'ERP Solutions', 
      description: 'Comprehensive Enterprise Resource Planning systems to streamline your business operations.',
      detailsPage: '/ERPBlog'
    },
    { 
      icon: FaMobile, 
      title: 'Mobile Development', 
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      detailsPage: '/services/mobile'
    },
    { 
      icon: FaChartBar, 
      title: 'Data Analytics Platform', 
      description: 'Advanced data analysis and visualization tools for informed decision-making.',
      detailsPage: '/services/analytics'
    },
    { 
      icon: FaShoppingCart, 
      title: 'E-commerce Solution', 
      description: 'Full-featured online shopping platforms for businesses of all sizes.',
      detailsPage: '/services/ecommerce'
    },
    { 
      icon: FaHospital, 
      title: 'Healthcare Management System', 
      description: 'Integrated solutions for hospitals and healthcare providers.',
      detailsPage: '/services/healthcare'
    },
    { 
      icon: FaUtensils, 
      title: 'Restaurant Management System', 
      description: 'All-in-one solution for efficient restaurant operations.',
      detailsPage: '/services/restaurant'
    },
  ];

  return (
    <ServicesContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </Title>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceIcon>
              <service.icon />
            </ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <LearnMoreButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(service.detailsPage)}
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