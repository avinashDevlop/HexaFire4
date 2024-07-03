import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    transition: all 0.3s ease;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }
    
body {
  --sb-track-color: #e4cbd2;
  --sb-thumb-color: #a7aba9;
  --sb-size: 14px;
}

body::-webkit-scrollbar {
  width: var(--sb-size)
}

body::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 3px;
}

body::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 3px;
  
}

@supports not selector(::-webkit-scrollbar) {
  body {
    scrollbar-color: var(--sb-thumb-color)
                     var(--sb-track-color);
  }
}
`;

export const lightTheme = {
  background: '#f4f4f4',
  text: '#333',
  primary: '#e94560',
  secondary: '#16213e',
  accent: '#007bff',
  textPrimary: '#333333',
  textSecondary: '#555555',
  card:'#fcd9d9',
  blogHeader:'#333333'
};

export const darkTheme = {
  background: '#16213e',
  text: '#f4f4f4',
  primary: '#e94560',
  secondary: '#1a1a2e',
  accent: '#007bff',
  textPrimary: '#ffffff',
  textSecondary: '#f4f4f4',
  card:'#1a1a2e',
  blogHeader:'#1a1a1a'
};