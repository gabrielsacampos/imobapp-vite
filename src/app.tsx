import { SignUpButton } from '@clerk/clerk-react'
import { useContext } from 'react'
import { RouterProvider } from 'react-router-dom'

import { AuthContext } from './contexts/AuthContext'
import { router } from './routes'
import { Spin } from 'antd'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}



export function App() {
  const { user, isAuthorized, isAuthorizing } = useContext(AuthContext)

  if(isAuthorizing){
      return (
        <div className='flex items-center justify-center w-full h-screen'>
            <Spin size='large'/>
        </div>
      )
  }

  if(!isAuthorized){
      return (
          <>
              <SignUpButton>
                  sair
              </SignUpButton>
              <h1>nao autorizado</h1>
          </>
          )
  }
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}




