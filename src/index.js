import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter } from "react-router-dom";
import App from './App'
import { Provider } from 'react-redux'
import { store } from './utils/store/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)