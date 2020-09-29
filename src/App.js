import React from 'react'
import { Switch, Route, Link} from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import ChatPage from './pages/ChatPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/">Details</Link></li>
      </ul>
      <Switch>
        
        <Route path="/contact">
            <ContactPage />
        </Route>
        
        <Route path="/chat">
            <ChatPage />
        </Route>

        <Route path="/about">
            <AboutPage />
        </Route>

      </Switch>
    </div>
  )
}
