import './global.css'
import '@radix-ui/themes/styles.css';

import { Theme } from '@radix-ui/themes';
import React from 'react'
import ReactDOM from 'react-dom/client'

import {App} from './app'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
)
