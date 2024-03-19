import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {Auth0Provider} from '@auth0/auth0-react'

const domain = import.meta.env.VITE_APP_DOMAIN
const clientId = import.meta.env.VITE_APP_CLIENT_ID

console.log(domain)
console.log(clientId)

ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
  domain = {domain}
  clientId = {clientId}
  authorizationParams={{
    redirect_uri: window.location.origin,
  }}>
    <App />
  </Auth0Provider>,

)
