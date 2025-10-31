
# XF402 — Time-Based Access for Digital Assets

[<img src="images/Xlogo.svg" alt="X logo" width="20" height="20" style="vertical-align:text-bottom;"/> - XF402 Protocol X/Twitter](https://x.com/XF402)

**Temporary rights. On-chain proof. Powered by x402 + Solana.**

`XF402` extends Coinbase's **x402** standard to support **renting / temporary access rights** to NFTs, content, APIs, and collectibles using crypto payments.

**Think:**

- ✅ Rent an NFT for 1 day
- ✅ Pay for 1-week access to a dataset
- ✅ Buy a 30-day pass to premium content
- ✅ Let memes & media earn micro-licensing fees
- ✅ Agent-to-agent paid access (AI economy)

---

## 🧠 What is XF402?

XF402 adds a new profile to x402: **R402 (Rent-402)**

When a client requests a protected resource:

1. The server returns `402 Payment Required`
2. With JSON defining:
    - Access tiers: `1d`, `7d`, `30d`, etc
    - Prices in USDC / SOL
    - Rights: `view`, `remix`, `commercial-lite`
3. User pays (initially honor-system, later verified)
4. Server unlocks + returns a **signed receipt**
5. Client can re-access until the receipt expires

> **Own forever, or rent the right to use — your choice.**

---

## 🎯 Why?

Blockchain solved ownership.  
XF402 solves **usage**.

| Problem                          | XF402 Fix                          |
|-----------------------------------|-------------------------------------|
| NFTs have unclear utility         | Time-based rights = clear value     |
| Creators can't monetize memes     | Rentable memes                     |
| Subscriptions = centralized billing | On-chain time-boxed access        |
| AI agents need pay-for-access flows | 402 + micro USDC payments         |

We bring **Web2-style paywalls** to **Web3 wallets + agents**.

---

## 🚀 Try the Demo

> _Coming Soon_ — Solana devnet version.

A tiny Next.js PoC shows:

- Click to access protected content
- See x402 rental pricing
- Pay micro-USDC (devnet)
- Unlock content with expiration timer

---

## 📦 Packages Coming Soon

| Package         | Description                     |
|-----------------|---------------------------------|
| `@xf402/js`     | Client SDK for browser & agents |
| `xf402-fastapi` | Python server decorators        |
| `xf402-node`    | Node server utils               |
| `xf402-verify`  | Receipt/JWT validation          |
| `xf402-rust`    | Solana program + verifier       |

---

## 🧰 Developer Preview (Concept)

```ts
import { r402Fetch, attachWallet } from "@xf402/js";

attachWallet(mySolanaWallet);

const res = await r402Fetch("https://site.com/poster-highres.png");

const img = await res.blob(); // unlocked
```

Server returns:

```json
{
  "standard": "x402",
  "profile": "r402/v1",
  "usage": {
    "tiers": [
      { "id": "1d", "price": "0.05 USDC" },
      { "id": "7d", "price": "0.25 USDC" }
    ],
    "modes": ["view"]
  },
  "pay_to": "SOL_WALLET",
  "chain": "solana"
}
```

---

## 🏗️ Architecture

- ✅ Phase 1: Honor-system (client sends tx hash)
- ✅ Phase 2: Facilitator verifies payment + signs JWT receipt
- 🚧 Phase 3: On-chain receipt registry + rent escrow
- 🔥 Phase 4: Solana program (xf402-rust) for trust-minimized flow

---

## 🛣️ Roadmap

| Stage                    | Goal                                    | Tech                  |
|--------------------------|-----------------------------------------|-----------------------|
| ✅ Prototype docs & flow | Show concept works                      | HTTP + Next.js        |
| ✅ JS + Python stubs     | Basic 402 → pay → unlock                | JS / FastAPI          |
| 🔜 Devnet demo           | Real Solana USDC + Phantom              | Solana + Vercel       |
| 🔜 Rust SVM program      | On-chain receipt + expirable access     | Anchor                |
| 🔜 NFT metadata extension| Native rental info in metadata          | Metaplex JSON         |
| 🔜 Marketplace integration | Rent button on NFT pages              | Solana wallets        |
| 🌐 Multi-chain bridges   | Base / ETH support                      | Cross-chain receipts  |

**Future:**

- Optional escrow (true NFT rental)
- Auto-splits for remixes
- Agent-to-agent auto-payments
- Distributed facilitator network

---

## 🧪 Status

| Component      | Status             |
|----------------|--------------------|
| Docs           | ✅ Live            |
| Protocol       | ✅ Spec complete   |
| JS SDK         | 🚧 In development  |
| Python SDK     | 🚧 In development  |
| Rust program   | 🧠 Design phase    |
| Demo           | 🎨 Building        |

---

## 🤝 Contributing

Want to help build the rental layer for digital assets?  
PRs and feedback welcome.

---

## 📬 Contact / Community

- Website: coming soon
- Discord: coming soon

---

## ✨ Vision

The internet has ownership primitives.  
XF402 introduces usage primitives.

Digital assets become more than JPEGs —  
they become economic objects with time and rights.
# XF402
