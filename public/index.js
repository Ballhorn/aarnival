/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import inkaApp from './reducers'
import App from './components/App'

let store = createStore(inkaApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)