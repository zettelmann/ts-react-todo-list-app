import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import ThemeContextProvider from './components/context/theme-context';



ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>, 
  document.getElementById('root')
);

