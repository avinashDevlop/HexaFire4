import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1a1a2e;
  color: white;
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  color: #e94560;
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #e94560;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #e94560;
  }
`;

const Copyright = styled.p`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

function Footer() {
  const socialVariants = {
    hover: { scale: 1.2 },
  };

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebookF, url: 'https://facebook.com' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: FaLinkedinIn, url: 'https://linkedin.com' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com' },
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com' },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Hexafire4</FooterTitle>
          <p>Igniting Innovation in Technology</p>
          <SocialLinks>
            {socialLinks.map((platform) => (
              <SocialLink
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform.name}
                variants={socialVariants}
                whileHover="hover"
              >
                <platform.icon />
              </SocialLink>
            ))}
          </SocialLinks>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Services</FooterTitle>
          <FooterLink to="/services#web-development">Web Development</FooterLink>
          <FooterLink to="/services#mobile-apps">Mobile Apps</FooterLink>
          <FooterLink to="/services#ai-solutions">AI Solutions</FooterLink>
          <FooterLink to="/services#cloud-services">Cloud Services</FooterLink>
          <FooterLink to="/services#cybersecurity">Cybersecurity</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Company</FooterTitle>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/careers">Careers</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/press">Press</FooterLink>
          <FooterLink to="/partners">Partners</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Support</FooterTitle>
          <FooterLink to="/contact">Contact Us</FooterLink>
          <FooterLink to="/faq">FAQ</FooterLink>
          <FooterLink to="/documentation">Documentation</FooterLink>
          <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
        </FooterSection>
      </FooterContent>
      <Copyright>
        &copy; {new Date().getFullYear()} Hexafire4. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;