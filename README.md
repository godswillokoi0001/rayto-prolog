# rayto-prolog

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-rrhaxxje)

## Contact email setup

The contact form sends email through the server-side Resend endpoint in `api/contact.ts`.
Configure these environment variables in the deployment platform:

```text
RESEND_API_KEY=your-resend-api-key
RESEND_EMAIL_DOMAIN=your-verified-domain.com
```

`RESEND_EMAIL_DOMAIN` must be verified in Resend. The endpoint sends from `Rayto Prolog <noreply@RESEND_EMAIL_DOMAIN>`. The API key must remain server-side and should never be added to frontend code or committed to the repository.
