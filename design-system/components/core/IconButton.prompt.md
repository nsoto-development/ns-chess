Icon-only square button for toolbars, card corner actions, and nav icons (theme toggle, social links, close buttons).

```jsx
<IconButton icon={<GithubIcon size={18} />} label="GitHub" />
<IconButton icon={<XIcon size={18} />} label="Close" variant="solid" />
```

Always pass `label` — it becomes the `aria-label` and hover title, since there's no visible text. Variants: `ghost` (default, blends into surface) and `solid` (bordered chip, for floating over imagery).
