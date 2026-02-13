import React from 'react'
import Button from './ui/Button'
import Input from './ui/Input'
import Card from './ui/Card'
import './PrimaryWorkspace.css'

function PrimaryWorkspace() {
  return (
    <div className="primary-workspace">
      <Card title="Component Library">
        <div className="component-section">
          <h3 className="section-heading">Buttons</h3>
          <div className="component-grid">
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </div>

        <div className="component-section">
          <h3 className="section-heading">Input Fields</h3>
          <div className="component-stack">
            <Input label="Project Name" placeholder="Enter project name" />
            <Input label="Description" placeholder="Brief description" />
            <Input label="Disabled Field" placeholder="Cannot edit" disabled />
          </div>
        </div>

        <div className="component-section">
          <h3 className="section-heading">Typography</h3>
          <div className="typography-showcase">
            <h1>Heading 1 - Serif, Confident</h1>
            <h2>Heading 2 - Clear Hierarchy</h2>
            <h3>Heading 3 - Consistent Scale</h3>
            <p>Body text uses clean sans-serif at 16px with 1.6 line-height. Maximum width of 720px ensures comfortable reading. No decorative fonts, no random sizes.</p>
          </div>
        </div>

        <div className="component-section">
          <h3 className="section-heading">Color System</h3>
          <div className="color-grid">
            <div className="color-swatch">
              <div className="swatch" style={{ backgroundColor: '#F7F6F3' }}></div>
              <span className="color-label">Background</span>
              <span className="color-value">#F7F6F3</span>
            </div>
            <div className="color-swatch">
              <div className="swatch" style={{ backgroundColor: '#111111' }}></div>
              <span className="color-label">Primary Text</span>
              <span className="color-value">#111111</span>
            </div>
            <div className="color-swatch">
              <div className="swatch" style={{ backgroundColor: '#8B0000' }}></div>
              <span className="color-label">Accent</span>
              <span className="color-value">#8B0000</span>
            </div>
            <div className="color-swatch">
              <div className="swatch" style={{ backgroundColor: '#2D5016' }}></div>
              <span className="color-label">Success</span>
              <span className="color-value">#2D5016</span>
            </div>
          </div>
        </div>

        <div className="component-section">
          <h3 className="section-heading">Spacing System</h3>
          <div className="spacing-showcase">
            <div className="spacing-item">
              <div className="spacing-bar" style={{ width: '8px' }}></div>
              <span>8px (xs)</span>
            </div>
            <div className="spacing-item">
              <div className="spacing-bar" style={{ width: '16px' }}></div>
              <span>16px (sm)</span>
            </div>
            <div className="spacing-item">
              <div className="spacing-bar" style={{ width: '24px' }}></div>
              <span>24px (md)</span>
            </div>
            <div className="spacing-item">
              <div className="spacing-bar" style={{ width: '40px' }}></div>
              <span>40px (lg)</span>
            </div>
            <div className="spacing-item">
              <div className="spacing-bar" style={{ width: '64px' }}></div>
              <span>64px (xl)</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default PrimaryWorkspace
