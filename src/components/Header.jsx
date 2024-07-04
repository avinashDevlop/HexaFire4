import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaInfoCircle, FaCogs, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 2.5rem;
`;

const MenuItems = styled(motion.ul)`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: ${props => props.headerHeight}px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.background};
    padding: 1rem 0;
    overflow-y: auto;
    z-index: 1000;
  }
`;

const MenuItem = styled(motion.li)`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    text-align: center;
  }
`;

const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`;

const MenuIcon = styled.span`
  margin-right: 0.5rem;
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 1rem;
  transition: all 0.3s ease;
 
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: rotate(180deg);
  }
`;

function Header({ toggleTheme, theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      setIsMobile(newIsMobile);
      if (!newIsMobile) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuVariants = {
    hidden: { 
      x: '100%',
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const menuItems = [
    { name: 'Home', icon: FaHome, path: '/' },
    { name: 'About', icon: FaInfoCircle, path: '/about' },
    { name: 'Services', icon: FaCogs, path: '/services' },
    { name: 'Contact', icon: FaEnvelope, path: '/contact' },
  ];

  return (
    <HeaderContainer ref={headerRef}>
      <Nav>
        <Logo to="/">
          <LogoIcon>🔥</LogoIcon>
          Hexafire4
        </Logo>
        <AnimatePresence>
          {(isMenuOpen || !isMobile) && (
            <MenuItems
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={isMobile ? menuVariants : {}}
              headerHeight={headerHeight}
            >
              {menuItems.map((item, index) => (
                <MenuItem
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MenuLink to={item.path} onClick={() => isMobile && setIsMenuOpen(false)}>
                    <MenuIcon><item.icon /></MenuIcon>
                    {item.name}
                  </MenuLink>
                </MenuItem>
              ))}
            </MenuItems>
          )}
        </AnimatePresence>
        <div style={{overflow:'hidden'}}>
          {isMobile && (
            <MenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? '✕' : '☰'}
            </MenuToggle>
          )}
          <ThemeToggle onClick={toggleTheme}>
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
        </div>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;