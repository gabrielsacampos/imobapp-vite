import { SignInButton } from '@clerk/clerk-react'
import { Callout } from '@radix-ui/themes'
import { Spin } from 'antd'
import { StopCircle } from 'lucide-react'
import { useContext } from 'react'
import { RouterProvider } from 'react-router-dom'

import { AuthContext } from './contexts/AuthContext'
import { router } from './routes'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}



export function App() {
  const {user, isAuthorized, isAuthorizing } = useContext(AuthContext)

  if(isAuthorizing){
      return (
        <div className='flex items-center justify-center w-full h-screen'>
            <Spin size='large'/>
        </div>
      )
  }

  if(!isAuthorized){
      return (
        <div className='flex items-center justify-center w-full h-screen'>
          <Callout.Root color='red'>
            <Callout.Icon>
              <StopCircle size={24} />
            </Callout.Icon>
            <Callout.Text>
              <p>Ops! O email selecionado não tem o acesso autorizado. Entre em contato com o desenvolvedor.</p>
              <p>Você tambem pode {" "}
                <span className='underline font-bold'>
                  <SignInButton>
                  tentar com outro email
                  </SignInButton>
                </span>
                </p>

            </Callout.Text>
          </Callout.Root>
          </div>
          )
  }
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}




