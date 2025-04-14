import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Maincompo from './Youtube/Components/Maincompo.jsx'
import { Provider } from 'react-redux'
import store from './Youtube/store/store.js'
import './Youtube/Style Sheet/Youtube.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Maincompo />
  </Provider>
)
