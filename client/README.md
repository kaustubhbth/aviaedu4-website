# AVIAEDU4 website

## Build

Run `npm run build` to create the Vite production output in `dist/`. The build
generates route-specific HTML metadata, a `404.html` document, and an
allow-all `robots.txt`.

Set `VITE_PUBLIC_SITE_URL` to the production HTTPS origin (for example,
`https://www.example.com`) in the deployment environment to enable canonical
URLs, absolute Open Graph image/URL metadata, and an absolute `sitemap.xml`.
The production domain is not currently configured, so the build omits the
sitemap rather than generating URLs for an invented domain.

Deployments should serve the generated route directories and use `404.html` as
the host's not-found document. If the host requires an SPA fallback, configure
it to serve `index.html` for application routes while preserving the
not-found document and static route HTML.

The frontend has no analytics configuration. Course and contact submissions
continue to use the configured Google Forms endpoint.

## Form abuse controls

The independent course-interest and contact forms share development-level
client-side protections: hidden honeypots, a minimum completion time, an
in-flight submission lock, form-specific browser-local rate limits and
duplicate checks, input length and content validation, and input
normalization. Contact and course submissions retain separate Google Forms
endpoints, field mappings, and rate-limit keys.

These checks are not server-side security. A determined attacker can bypass
the website code and submit directly to either public Google Forms endpoint.
The browser-local limits can also be cleared or bypassed on another device.
No CAPTCHA or backend verification is configured. Stronger protection requires
a trusted server-side verification step before forwarding submissions to
Google Forms.
