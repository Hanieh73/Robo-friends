import React, { StrictMode } from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';
import 'tachyons';
import App from './Containers/App'


createRoot(document.getElementById('root')).render(
  <StrictMode >
    <App />
  </StrictMode>
       )




