import './global.css'
import '@radix-ui/themes/styles.css';

import {ClerkProvider} from '@clerk/clerk-react';
import { Theme } from '@radix-ui/themes';
import React from 'react'
import ReactDOM from 'react-dom/client'

import {App} from './app'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY as string}>
        <App />
      </ClerkProvider>
    </Theme>
  </React.StrictMode>,
)
