import React from 'react'
import Card from './Card'
import Button from './Button'
import Input from './Input'
import Message from './Message'

function PrimaryWorkspace() {
  return (
    <div className="workspace__primary">
      
      <Card title="Color System">
        <p>Four core colors define the entire system. No gradients, no noise.</p>
        <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
          <ColorSwatch color="#F7F6F3" name="Background" border />
          <ColorSwatch color="#111111" name="Primary Text" />
          <ColorSwatch color="#8B0000" name="Accent" />
          <ColorSwatch color="#2D5016" name="Success" />
        </div>
      </Card>

      <Card title="Typography">
        <p>Serif headings convey confidence. Sans-serif body text ensures clarity.</p>
        <h1 style={{ marginTop: '24px' }}>Heading Level 1</h1>
        <h2>Heading Level 2</h2>
        <h3>Heading Level 3</h3>
        <p style={{ marginTop: '24px' }}>
          Body text is set at 16px with generous line-height of 1.7. Maximum width is 
          constrained to 720px for optimal readability. No decorative fonts, no random sizes.
        </p>
      </Card>

      <Card title="Spacing System">
        <p>Consistent spacing creates rhythm. Five values cover all use cases.</p>
        <div style={{ marginTop: '24px' }}>
          <SpacingItem size={8} label="Extra Small" />
          <SpacingItem size={16} label="Small" />
          <SpacingItem size={24} label="Medium" />
          <SpacingItem size={40} label="Large" />
          <SpacingItem size={64} label="Extra Large" />
        </div>
      </Card>

      <Card title="Components">
        <p>Every component follows the same principles. Predictable, calm, coherent.</p>
        
        <div style={{ marginTop: '24px' }}>
          <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '16px' }}>Buttons</h4>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="success">Success Action</Button>
            <Button variant="secondary" size="small">Small Button</Button>
          </div>
        </div>

        <div style={{ marginTop: '24px' }}>
          <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '16px' }}>Inputs</h4>
          <Input placeholder="Enter text here" style={{ marginBottom: '8px' }} />
          <Input type="textarea" placeholder="Enter longer text here" />
        </div>

        <div style={{ marginTop: '24px' }}>
          <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '16px' }}>Messages</h4>
          <Message 
            type="success" 
            title="Build completed successfully"
            description="Your changes have been deployed to production."
          />
          <Message 
            type="warning" 
            title="Review required"
            description="Please verify the output before proceeding."
          />
          <Message 
            type="error" 
            title="Build failed"
            description="The deployment encountered an error during compilation."
            action="Check your configuration file and try again."
          />
        </div>
      </Card>

    </div>
  )
}

function ColorSwatch({ color, name, border }) {
  return (
    <div style={{ flex: 1 }}>
      <div style={{ 
        height: '80px', 
        background: color, 
        border: border ? '1px solid #D4D2CC' : 'none',
        borderRadius: '4px', 
        marginBottom: '8px' 
      }} />
      <div style={{ fontSize: '13px', fontWeight: 600 }}>{color}</div>
      <div style={{ fontSize: '12px', color: '#5A5A5A' }}>{name}</div>
    </div>
  )
}

function SpacingItem({ size, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
      <div style={{ width: `${size}px`, height: `${size}px`, background: '#8B0000' }} />
      <span style={{ fontSize: '14px', fontWeight: 600 }}>{size}px</span>
      <span style={{ fontSize: '13px', color: '#5A5A5A' }}>{label}</span>
    </div>
  )
}

export default PrimaryWorkspace
