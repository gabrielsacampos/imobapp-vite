import {createBrowserRouter} from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { CustomerLayout } from './pages/_layouts/customer'
import { HomeLayout } from './pages/_layouts/home'
import { Closeout } from './pages/app/Closeout'
import { Dashboard } from './pages/app/Dashboard'
import { DevTools } from './pages/app/DevTools'
import { Users } from './pages/app/Users/Users'
import { SignIn } from './pages/auth/sign-in'
import { Customer } from './pages/customer'
import { Home } from './pages/home/Home'

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <AppLayout />, 
        children: [
            {path: '/', element: <Dashboard />},
            {path: '/closeout', element: <Closeout />},
            {path: '/users', element: <Users />},
            {path: '/devtools', element: <DevTools />}
        ]
    },
    {
        path: '/', 
        element: <AuthLayout />,
        children: [
            {path: '/sign-in', element: <SignIn />}
        ]
    },
    {
        path: '/', 
        element: <CustomerLayout />,
        children: [
            {path: '/me', element: <Customer />}
        ]
    }
    
])