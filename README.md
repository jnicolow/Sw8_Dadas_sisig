# Sw8 dada's Sizzling Sisig — website draft

Website draft for **Sw8 dada's Sizzling Sisig** (Waipahu, HI).  
Not related to or made by the restaurant.

- **Address:** 94-226 Leoku St, Ste 9, Waipahu, HI 96797  
- **Phone:** 808-387-9554  
- **Hours:** Open every day — Mon–Sat 10am–7pm, Sunday 10am–6pm

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
npx --yes serve .
```

## Deploy on Netlify (free)

Source stays private on GitHub; visitors only get the static files.

1. Push this repo to a **private** GitHub repository.
2. Sign in at [netlify.com](https://www.netlify.com) with GitHub.
3. **Add new site → Import an existing project** → pick this repo.
4. Build settings (also in `netlify.toml`):
   - **Build command:** leave as configured (no real build)
   - **Publish directory:** `.` (site root)
5. Deploy — you’ll get a free URL like `something.netlify.app`.

### Drag-and-drop (no Git)

Zip the project (or the folder containing `index.html`, `css/`, `js/`, `media/`) and drop it on [app.netlify.com/drop](https://app.netlify.com/drop).

## Why Netlify fits

- Visitors only see HTML/CSS/JS in the browser; your repo can stay private.
- Free starter tier works with private GitHub repos.
- Free `*.netlify.app` subdomain — no custom domain needed for a draft.
