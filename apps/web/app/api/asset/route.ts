import { NextRequest, NextResponse } from "next/server";

const receipts: Record<string, number> = {};

function b64(obj: { success: boolean; txHash: string; networkId: string }) {
  return Buffer.from(JSON.stringify(obj)).toString("base64");
}

export async function GET(req: NextRequest) {
  const header = req.headers.get("X-PAYMENT");
  const now = Date.now();

  // ✅ If client already paid and proof exists
  if (header) {
    const decoded = JSON.parse(Buffer.from(header, "base64").toString());
    const tx = decoded?.payload?.tx;
    
    if (tx && receipts[tx] && receipts[tx] > now) {
      const res = NextResponse.json({
        unlocked: true,
        url: "/nft-sample.png",
        valid_until: receipts[tx],
      });

      res.headers.set(
        "X-PAYMENT-RESPONSE",
        b64({ success: true, txHash: tx, networkId: "solana" })
      );

      return res;
    }

    // ✅ first-time payment → mock verify & issue receipt
    if (tx) {
      const validUntil = now + 86400 * 1000; // 24h
      receipts[tx] = validUntil;

      const res = NextResponse.json({
        unlocked: true,
        url: "/nft-sample.png",
        receipt: tx,
        valid_until: validUntil,
      });

      res.headers.set(
        "X-PAYMENT-RESPONSE",
        b64({ success: true, txHash: tx, networkId: "solana" })
      );

      return res;
    }
  }

  return NextResponse.json(
    {
      x402Version: 1,
      accepts: [
        {
          scheme: "exact",
          network: "solana",
          maxAmountRequired: "50000",
          resource: "/api/asset",
          description: "24h access to protected NFT",
          mimeType: "image/png",
          payTo: "FakeWallet1111111111",
          maxTimeoutSeconds: 30,
          asset: "USDC_SOL_MINT",
          extra: {
            r402: true,
            tier: "24h",
            durationSeconds: 86400,
          },
        },
      ],
    },
    { status: 402 }
  );
}
