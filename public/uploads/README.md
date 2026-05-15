# Uploads

Drop your own files here. The site picks them up automatically once you reference them in `src/data/trip.ts`.

## Documenten / tickets

Drop in: `public/uploads/{stop-id}/` (e.g. `public/uploads/hanoi/`)

Supported: PDF, JPG, PNG.

Reference in `src/data/trip.ts`:

```ts
documents: [
  { type: "flight", label: "Heenvlucht KLM", file: "/uploads/hanoi/klm-boarding.pdf" }
]
```

## Foto's

Drop in: `public/uploads/photos/{stop-id}/`

Reference per stop:

```ts
photos: [
  "/uploads/photos/danang/sunrise.jpg",
  "/uploads/photos/danang/surf.jpg"
]
```

## Notities

Notities zijn live-editable in de browser en worden opgeslagen in localStorage. Geen file nodig.
