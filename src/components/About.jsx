import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 6rem 2rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #e94560;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Content = styled(motion.div)`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Section = styled(motion.section)`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  // color: #16213e;
  margin-bottom: 1rem;
`;

const TeamSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TeamMember = styled.div`
  flex: 1;
  // background-color: #f4f4f4;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  color: #e94560;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.h4`
  font-size: 1.2rem;
  // color: #16213e;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AboutContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Hexafire4
      </Title>
      <Content
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Section variants={childVariants}>
          <SectionTitle>Our Mission</SectionTitle>
          <p>
            At Hexafire4, we are committed to pushing the boundaries of technology and innovation. Our mission is to provide cutting-edge solutions that empower businesses and individuals to thrive in the digital age. We believe in harnessing the power of technology to solve complex problems and create a positive impact on the world.
          </p>
        </Section>
        <Section variants={childVariants}>
          <SectionTitle>Our Expertise</SectionTitle>
          <p>
            With years of experience in the tech industry, our team of experts specializes in a wide range of areas including web development, mobile applications, artificial intelligence, and cloud computing. We pride ourselves on staying at the forefront of technological advancements and applying our knowledge to deliver innovative solutions for our clients.
          </p>
        </Section>
        <Section variants={childVariants}>
          <SectionTitle>Our Values</SectionTitle>
          <p>
            Innovation, integrity, and client satisfaction are at the core of everything we do. We believe in fostering long-term partnerships with our clients, delivering exceptional results, and continuously evolving to meet the challenges of tomorrow. Our commitment to ethical practices and sustainable technology ensures that we not only meet our clients' needs but also contribute positively to society.
          </p>
        </Section>
        <Section variants={childVariants}>
          <SectionTitle>Our Leadership</SectionTitle>
          <TeamSection>
            <TeamMember>
              <MemberName>Boochetati Manohar</MemberName>
              <MemberRole>Founder & CEO</MemberRole>
              <MemberBio>
              Boochetati Manohar is a visionary tech entrepreneur with over 10 years of experience in the software industry. Manohar worked at several top tech companies before founding Hexafire4 in 2024. His passion for innovation and commitment to excellence drive the company's mission and vision.
              </MemberBio>
            </TeamMember>
            <TeamMember>
              <MemberName>Ramba Avinash</MemberName>
              <MemberRole>Co-founder & CTO</MemberRole>
              <MemberBio>
              Ramba Avinash  where he gained a strong foundation in technology. Even before starting his formal education, he completed four impressive projects, showcasing his early dedication and talent in the field of computer science.
              </MemberBio>
            </TeamMember>
          </TeamSection>
        </Section>
      </Content>
    </AboutContainer>
  );
}

export default About;