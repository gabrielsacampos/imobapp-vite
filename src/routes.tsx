import {createBrowserRouter} from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { CustomerLayout } from './pages/_layouts/customer'
import { Closeout } from './pages/app/closeout'
import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'
import { Customer } from './pages/customer/customer'

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <AppLayout />, 
        children: [
            {path: '/', element: <Dashboard />},
            {path: '/closeout', element: <Closeout />}
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