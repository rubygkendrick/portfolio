# dev.rubykendrick.com

This is my resume! 
Full-stack developer, working songwriter, and former real estate broker based in Nashville, TN.

Live at [dev.rubykendrick.com](https://dev.rubykendrick.com)

## Tech Stack

- React + Vite
- CSS (custom, no framework)
- React Three Fiber + Three.js (3D dragonfly)
- AWS S3 (static hosting)
- AWS CloudFront (CDN + HTTPS)
- AWS ACM (SSL certificate)
- GitHub Actions (CI/CD — auto-deploys on push to main)
- GoDaddy (DNS)

## Running Locally

```bash
npm install
npm run dev
```

## Deployment

Every push to `main` triggers a GitHub Actions workflow that:
1. Installs dependencies
2. Runs `npm run build`
3. Syncs the `dist/` folder to S3
4. Invalidates the CloudFront cache

## Design Reference

Aesthetic inspired by vintage Japanese VHS and cassette tape packaging. Bold flat color, paper texture, and rainbow stripe details.

![Cassette reference](https://i.pinimg.com/1200x/17/fd/29/17fd29534a3cc60b9854b2eb9d7f0b64.jpg)
![Cassette reference 2](https://i.pinimg.com/736x/93/93/75/939375bcacd6c3fb1dc76dc781f7541d.jpg)

## Credits

3D dragonfly model: ["Giant spiketail (Anotogaster sieboldii)"](https://skfb.ly/pvBMG) by butterflybliss, licensed under [Creative Commons Attribution 4.0](http://creativecommons.org/licenses/by/4.0/).
