import React from 'react'
import PrimaryWorkspace from './PrimaryWorkspace'
import SecondaryPanel from './SecondaryPanel'

function Workspace() {
  return (
    <main className="workspace">
      <PrimaryWorkspace />
      <SecondaryPanel />
    </main>
  )
}

export default Workspace
