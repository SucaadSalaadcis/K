import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router-dom"
import router from '../src/routers/Router.jsx'

import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux'
import store from './redux/store/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </>
)
