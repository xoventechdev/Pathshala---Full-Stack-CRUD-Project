import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'jquery'; // Import jQuery
import 'bootstrap'; // Import Bootstrap (which depends on jQuery)


// import './assets/js/sb-admin-2.min.js'; 

// import '../public/sb-admin-2.js'; 

import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/sb-admin-2.min.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
