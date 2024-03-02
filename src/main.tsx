import './global.css'
import '@radix-ui/themes/styles.css';

import {ClerkProvider} from '@clerk/clerk-react';
import { Theme } from '@radix-ui/themes';
import { QueryClientProvider } from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import React from 'react'
import ReactDOM from 'react-dom/client'

import {App} from './app'
import { AuthProvider } from './contexts/AuthContext';
import { queryClient } from './lib/react-query';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
          <ClerkProvider 
            publishableKey={PUBLISHABLE_KEY as string}
            afterSignInUrl={'/me'}
            >
              <AuthProvider>
                <App />
              </AuthProvider>
          </ClerkProvider>
      </QueryClientProvider>
    </Theme>
  </React.StrictMode>,
)
