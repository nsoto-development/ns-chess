Primary interactive control for CTAs, forms, and toolbar actions — use when the user needs to trigger an action.

```jsx
<Button variant="primary" size="md">Deploy</Button>
<Button variant="secondary" icon={<ArrowIcon />}>View source</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="danger">Delete project</Button>
```

Variants: `primary` (solid cyan, glow shadow — one per view), `secondary` (outlined surface), `ghost` (text-only, for low-emphasis actions), `danger` (destructive). Sizes: `sm` / `md` / `lg`. Supports `icon` + `iconPosition`, and `disabled`.
