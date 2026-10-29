# motosiklet projesi

Motosiklet çanta ruhsata işletme hizmeti için Astro + Tailwind 4 sitesi.
Built on the **WuppyCMS With AI** starter: no custom component CSS, the pages are built
with Tailwind utilities and `@theme` tokens in `src/styles/global.css`.

Primary color is written to `--color-primary` / `--color-primary-dark` (`#7c3aed`).

```sh
pnpm install
pnpm dev
pnpm build
```

## Yapı

- `src/data/site.ts` — marka, iletişim, hizmetler, süreç adımları
- `src/pages/index.astro` — Hizmetler / Hakkımızda / Blog / İletişim bölümleri
- `src/pages/blog/` — yazı listesi ve detay sayfaları (`blog` koleksiyonu)
- `src/content/blog` — MDX yazılar, `src/content/authors` — yazar kayıtları
