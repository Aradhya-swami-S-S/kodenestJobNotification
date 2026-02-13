# KodNest Premium Build System

A calm, intentional design system for serious B2C product companies.

## Design Philosophy

- Calm, Intentional, Coherent, Confident
- Not flashy, not loud, not playful
- No gradients, no glassmorphism, no neon colors, no animation noise

## Color System

- Background: `#F7F6F3` (off-white)
- Primary text: `#111111`
- Accent: `#8B0000` (deep red)
- Success: `#2D5016` (muted green)
- Warning: `#8B6914` (muted amber)

Maximum 4 colors across entire system.

## Typography

- Headings: Crimson Pro (serif), large, confident, generous spacing
- Body: Inter (sans-serif), 16px, line-height 1.7, max 720px width
- No decorative fonts, no random sizes

## Spacing System

Consistent scale: `8px`, `16px`, `24px`, `40px`, `64px`

Never use random spacing. Whitespace is part of design.

## Global Layout Structure

Every page follows:
```
[Top Bar] → [Context Header] → [Primary Workspace + Secondary Panel] → [Proof Footer]
```

### Top Bar
- Left: Project name
- Center: Progress indicator (Step X / Y)
- Right: Status badge (Not Started / In Progress / Shipped)

### Context Header
- Large serif headline
- 1-line subtext
- Clear purpose, no hype language

### Primary Workspace (70% width)
- Main product interaction area
- Clean cards, predictable components, no crowding

### Secondary Panel (30% width)
- Step explanation (short)
- Copyable prompt box
- Action buttons: Copy, Build in Lovable, It Worked, Error, Add Screenshot

### Proof Footer
Checklist style: □ UI Built □ Logic Working □ Test Passed □ Deployed

Each checkbox requires user proof input.

## Component Rules

- Primary button = solid deep red
- Secondary button = outlined
- Same hover effect and border radius everywhere
- Inputs: clean borders, no heavy shadows, clear focus state
- Cards: subtle border, no drop shadows, balanced padding

## Interaction Rules

- Transitions: 150–200ms, ease-in-out
- No bounce, no parallax

## Error & Empty States

- Errors: explain what went wrong + how to fix, never blame user
- Empty states: provide next action, never feel dead

## Usage

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── TopBar.jsx
│   ├── ContextHeader.jsx
│   ├── Workspace.jsx
│   ├── PrimaryWorkspace.jsx
│   ├── SecondaryPanel.jsx
│   ├── ProofFooter.jsx
│   ├── Card.jsx
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Message.jsx
│   ├── PromptBox.jsx
│   └── EmptyState.jsx
├── design-system.css
├── App.jsx
└── main.jsx
```

All styles are in `src/design-system.css` and can be imported into any project.
