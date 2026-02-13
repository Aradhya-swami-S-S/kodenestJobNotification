import React from 'react'
import Button from './Button'

function PromptBox({ children }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(children)
  }

  return (
    <div className="prompt-box">
      <Button 
        variant="secondary" 
        size="small" 
        className="prompt-box__copy-btn"
        onClick={handleCopy}
      >
        Copy
      </Button>
      <code>{children}</code>
    </div>
  )
}

export default PromptBox
