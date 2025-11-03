# @xf402/js

**XF402 JavaScript SDK** — Client library for integrating [XF402](https://github.com/promisennn/xf402),  
an open protocol for **time-based access and rental of digital assets**, built on top of [x402](https://github.com/coinbase/x402).

---

## ✨ Overview

`@xf402/js` implements the XF402 client flow:

1. **GET** a protected resource → receive an HTTP `402 Payment Required` challenge  
2. **PAY** using crypto → receive a verifiable **receipt**  
3. **VERIFY** your receipt → unlock access until expiry  

The library is compatible with Solana and any x402-compatible facilitator.

---

## 📦 Installation

```bash
pnpm add @xf402/js
# or
npm install @xf402/js