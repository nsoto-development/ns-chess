Centered modal for project detail views or confirmations. Blurred backdrop, slide-up entrance.

```jsx
<Dialog open={open} onClose={() => setOpen(false)} title="Confirm" footer={<Button onClick={close}>OK</Button>}>
  Are you sure?
</Dialog>
```
