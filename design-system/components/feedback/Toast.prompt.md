Transient notification, e.g. "Message sent" after a contact form submit. Render in a fixed bottom-right container; consumer owns the auto-dismiss timer.

```jsx
<Toast tone="success" title="Message sent" message="I'll get back to you within 24h." onDismiss={() => {}} />
```
