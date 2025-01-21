import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux' // anello di collegamento x React
import store from './redux/store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

// REDUX: ISTRUZIONI PER L'USO :)
// 1) creare il primo reducer
// 2) utilizzarlo per configurare lo store in /redux/store/index.js
// 3) utilizzare lo store creato ed esportato come prop "store" per Provider
