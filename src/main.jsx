import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import Authcontex from './contex/Authcontex'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authcontex>
    <RouterProvider router={router} />
    </Authcontex>
  </StrictMode>,
)
