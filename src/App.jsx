import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Saved from './pages/Saved'
import Digest from './pages/Digest'
import Proof from './pages/Proof'

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/digest" element={<Digest />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/proof" element={<Proof />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
