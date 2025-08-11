import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return <div className="p-4">FlowMate MVP</div>
}
createRoot(document.getElementById('app')).render(<App />)
