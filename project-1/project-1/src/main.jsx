import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
import App from './App'
import './index.css'
function MainContent(){
  
  return <h1>react is great!</h1>
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
  </StrictMode>
)