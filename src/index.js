import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { applyGlobalGraphConfiguration } from './config/graph'

import RouterProvider from './providers/RouterProvider/RouterProvider'

applyGlobalGraphConfiguration()

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>,
  document.getElementById('root')
)