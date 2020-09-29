import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/">Details</Link></li>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  )
}
