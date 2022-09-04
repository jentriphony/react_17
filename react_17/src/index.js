import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextProvider as FetchContextProvider } from './context/fetch'
import { ContextProvider as FullDomainUrlContextProvider } from './context/full-domain-url'
import { Provider } from 'react-redux'
import store from './redux/index'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(

  // <React.StrictMode>



    <FetchContextProvider>
      <FullDomainUrlContextProvider>
        <Provider store={ store }>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </FullDomainUrlContextProvider>
    </FetchContextProvider>



  // </React.StrictMode>

)
