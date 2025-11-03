# 🌀 XF402 — Time-Based Access for Digital Assets

[<img src="https://raw.githubusercontent.com/promisennn/XF402/main/images/XLogo.png" alt="X logo" width="20"/> XF402 on X/Twitter](https://x.com/XF402)

**Temporary rights. On-chain proof. Powered by [x402](https://github.com/coinbase/x402) + Solana.**

---

## 🌐 What is XF402?

**XF402** is an open protocol for **renting, licensing, and gating access** to digital assets.  
It extends Coinbase’s **x402 payment primitive** to define time-based access rights — turning _ownership_ into _temporary, programmable access._

**Think:**

- ⏱ Rent an NFT for 1 day
- 💾 Pay for a 1-week API access token
- 🎫 Buy a 30-day digital pass for an event or dataset
- 🧠 License AI models or media for short-term use
- 🖼 Monetize memes and content through timed unlocks

---

## ⚙️ How It Works

1. **User requests a resource** → server responds with an `HTTP 402 Payment Required` and tier info (`1d`, `7d`, `30d`).
2. **User pays via wallet / tx** → server verifies payment or mock tx.
3. **Server issues a verifiable receipt (JWT)** — stored locally or on-chain.
4. **Access granted** until expiry → after that, content is locked again.


<img src="https://raw.githubusercontent.com/promisennn/XF402/main/images/diagram-how-it-works.png" alt="How XF402 Works Diagram" width="1500" height="500" />


> FX402 can wrap around **IPFS, Arweave, or any storage layer**, acting as a **time-gated Web3 gateway**.

---

## 🧱 Core Components

| Component       | Description                                          |
| --------------- | ---------------------------------------------------- |
| `@xf402/js`     | JavaScript SDK for integrating XF402 flows in dApps  |
| `fx402-fastapi` | Python server library for issuing/verifying receipts |
| `xf402-web`     | Example Next.js frontend (live demo + docs)          |
| `xf402-rust`    | Solana-native module (coming soon)                   |

---

## 🧩 Example Flow

```http
GET /nft/rare-001.png
→ 402 Payment Required
{
  "profile": "r402",
  "tiers": [
    { "id": "1d", "price": "0.05", "currency": "SOL" },
    { "id": "7d", "price": "0.2", "currency": "SOL" }
  ]
}

POST /nft/rare-001.png (with tx or mock proof)
→ 200 OK
{
  "receipt": { "valid_until": 1730524800, "tier_id": "1d" },
  "unlocked_url": "ipfs://bafy.../image.png"
}
```

---

## 🧭 Roadmap

| Phase | Goal                                            | Status         |
| ----- | ----------------------------------------------- | -------------- |
| 1     | Protocol Docs + PoC — Write spec, schemas, demo | ✅ Done        |
| 2     | Web Demo + SDKs — fx402.vercel.app + @xf402/js  | 🚧 In progress |
| 3     | FastAPI Integration — backend + receipt signing | 🕓 Planned     |
| 4     | Solana Integration — on-chain & metadata        | 🧱 Planned     |
| 5     | IPFS Gateway Wrapper — timed delivery           | 🧠 Concept     |
| 6     | Full Dev Portal + Docs                          | 🚀 Soon        |

---

## 🧠 Philosophy

> “Digital ownership shouldn’t always be forever.”

FX402 reimagines digital access as fluid, programmable, and verifiable,  
bridging Web2 economics and Web3 composability.

---

## 📦 Repositories

- **xf402** — main monorepo
- **xf402-rust** — Solana module
- **xf402-docs** — protocol + docs
- **xf402-examples** — showcase + templates

---

## 🧰 Stack

- **Frontend:** Next.js + Tailwind
- **Backend:** Next API routes + FastAPI
- **Blockchain:** Solana Devnet (Anchor, Token2022)
- **Payments:** Coinbase x402 primitives
- **Storage:** IPFS / Arweave (time-gated wrapper)

---

## ⚡️ Quick Start (Demo)

```bash
git clone https://github.com/your-org/xf402
cd xf402
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) → click “Test XF402”.

---

## 🪙 License

MIT © 2025 FX402 Contributors
