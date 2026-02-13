import React from 'react'
import Button from './Button'
import PromptBox from './PromptBox'
import EmptyState from './EmptyState'

function SecondaryPanel() {
  return (
    <aside className="workspace__secondary">
      <div className="panel">
        <div className="panel__title">Step Guidance</div>
        
        <div className="panel__section">
          <p style={{ fontSize: '14px', color: '#5A5A5A', lineHeight: 1.6 }}>
            Review the design system foundation. This establishes the visual language for the entire product.
          </p>
        </div>

        <div className="panel__section">
          <PromptBox>
            Design system created with calm, intentional principles.
          </PromptBox>
        </div>

        <div className="panel__actions">
          <Button variant="primary">Build in Lovable</Button>
          <Button variant="success">It Worked</Button>
          <Button variant="secondary">Report Error</Button>
          <Button variant="secondary">Add Screenshot</Button>
        </div>
      </div>

      <div className="panel mt-md">
        <div className="panel__title">Empty State Example</div>
        <EmptyState 
          title="No builds yet"
          description="Start your first build to see results here."
          actionLabel="Create Build"
        />
      </div>
    </aside>
  )
}

export default SecondaryPanel
