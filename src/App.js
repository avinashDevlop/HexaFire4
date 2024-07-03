import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import HomeBodyBlog from './Blog/schoolAssistantBlog/Home/HomeBodyBlog';
import ERPBlog from './Blog/ERPblog/ERPblog'
function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} theme={theme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/schoolAssistant" element={<schoolAssistant/>}/>
            <Route path="/HomeBodyBlog" element={<HomeBodyBlog />} /> 
            <Route path="/ERPBlog" element={<ERPBlog />} /> 
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
