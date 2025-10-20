# IlluminateX — Frontend Prototype README ✨

**Client Project:** This README documents a frontend prototype built for a client 🧑‍💼.

## Project Overview 🌐
IlluminateX is a Web3-inspired, faith-based digital ecosystem to showcase gospel creatives. This repository contains the frontend prototype focusing on UI/UX, discovery, and user interactions 🎨🎵.

## Vision 🙏
Create an intuitive frontend where Christian creatives can present work, audiences can engage, and token concepts are demonstrated through UI flows 💡.

## Frontend Scope 🧩
- Creator profiles and media galleries (audio, video, images) 🧑‍🎤📷🎧
- Feed with trending and recommended content 🔥📣
- Interaction UI: like, share, comment, tip (UI-only demo) ❤️🔁💬💎
- Wallet UI integration and demo flows (MetaMask, WalletConnect) without on-chain logic 🔗🔐
- Upload flows with mocked storage/API calls 📤🗂️
- Admin/moderation UI prototypes (client-controlled) 🛠️

## Tech Stack (frontend-focused) ⚙️
- Next.js (app router), React, TypeScript
- Tailwind CSS or CSS modules
- UI components library (optional: Headless UI / Radix)
- Local mocks / API stubs for backend and token flows
- Optional: IPFS UI hooks (no direct on-chain integration) 🛰️

## Prototype Goals 🎯
- Validate UX for onboarding, content upload, feed interactions, and wallet connection UI ✅
- Provide reusable React components and page flows for handoff to backend or smart contract teams 🔁
- Keep all crypto/token behaviour mocked or simulated for frontend testing 🧪

## Getting Started 🚀
1. Clone the client repo.
2. Install dependencies: `npm install` or `pnpm install`.
3. Run local dev server: `npm run dev`.
4. Open `http://localhost:3000` and edit `app/page.tsx` to start 🖥️.
5. Configure environment variables (frontend-only):
    - `NEXT_PUBLIC_API_URL` \- for mocked API endpoints
    - `NEXT_PUBLIC_RPC_URL` \- optional for wallet UI demos 🔧

## Notes ⚠️
- This repo is frontend-only. Any on-chain, backend, KYC, or production payment work is out of scope and should be handled by the client or a dedicated backend/smart contract team.
- Token and staking features are represented as UI mocks for demo purposes 🧾.

## Contributing 🤝
Follow client guidelines. For frontend fixes or UI improvements, open an issue or submit a PR to the client repository.

## License 📜
License to be determined by client.
