import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store1 from './store/index'
ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store1}> 
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
