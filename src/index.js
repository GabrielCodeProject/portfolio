import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'
import App from './container/App'
import reportWebVitals from './buildInFile/reportWebVitals'
import MainContainer from './container/main-container'

ReactDOM.render(
  <React.StrictMode>
    <MainContainer />
  </React.StrictMode>,
  document.getElementById('app')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
