import React, { useState } from 'react';
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

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 2.5rem;
`;

const MenuItems = styled(motion.ul)`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.background};
    padding: 1rem 0;
    display: none;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

    &.open {
      display: flex;
    }
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

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const menuItems = [
    { name: 'Home', icon: FaHome, path: '/' },
    { name: 'About', icon: FaInfoCircle, path: '/about' },
    { name: 'Services', icon: FaCogs, path: '/services' },
    { name: 'Contact', icon: FaEnvelope, path: '/contact' },
  ];

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <LogoIcon>🔥</LogoIcon>
          Hexafire4
        </Logo>
        <AnimatePresence>
          {(isMenuOpen || window.innerWidth > 768) && (
            <MenuItems
              className={isMenuOpen ? 'open' : ''}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {menuItems.map((item, index) => (
                <MenuItem
                  key={item.name}
                  variants={menuVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <MenuLink to={item.path} onClick={() => setIsMenuOpen(false)}>
                    <MenuIcon><item.icon /></MenuIcon>
                    {item.name}
                  </MenuLink>
                </MenuItem>
              ))}
            </MenuItems>
          )}
        </AnimatePresence>
        <div style={{overflow:'hidden'}}>
          <MenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </MenuToggle>
          <ThemeToggle onClick={toggleTheme}>
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
        </div>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;