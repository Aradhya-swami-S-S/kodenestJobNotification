import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Saved from './pages/Saved'
import Digest from './pages/Digest'
import Proof from './pages/Proof'
import TestChecklist from './pages/TestChecklist'
import Ship from './pages/Ship'

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/digest" element={<Digest />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/proof" element={<Proof />} />
          <Route path="/test" element={<TestChecklist />} />
          <Route path="/jt/07-test" element={<TestChecklist />} />
          <Route path="/ship" element={<Ship />} />
          <Route path="/jt/08-ship" element={<Ship />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
