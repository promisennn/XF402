"use client";

import { useState } from "react";
import { Button } from "@xf402/ui/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@xf402/ui/components/card";
import Image from "next/image";

export default function DemoPage() {
  const [img, setImg] = useState<string | null>(null);
  const [expires, setExpires] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [requireTx, setRequireTx] = useState(false);

  async function requestAsset() {
    setLoading(true);
    const res = await fetch("/api/asset");

    if (res.status === 402) {
      setRequireTx(true);
      setLoading(false);
      return;
    }

    const data = await res.json();
    setImg(data.url);
    setExpires(data.valid_until);
    setLoading(false);
  }

  async function pay() {
    const tx = prompt("Paste Solana tx signature (or fake):");
    if (!tx) return;

    const payload = Buffer.from(
      JSON.stringify({
        x402Version: 1,
        scheme: "exact",
        network: "solana",
        payload: { tx },
      })
    ).toString("base64");

    const res = await fetch("/api/asset", {
      headers: { "X-PAYMENT": payload },
    });

    const data = await res.json();
    setImg(data.url);
    setExpires(data.valid_until);
    setRequireTx(false);
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-6">
      <Card className="w-full max-w-md border border-primary/20">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">
            XF402 NFT Rental Demo
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 items-center text-center">
          {!img && !requireTx && !loading && (
            <Button size="lg" className="w-full" onClick={requestAsset}>
              Unlock NFT
            </Button>
          )}

          {loading && <p className="text-sm opacity-80">Loading...</p>}

          {requireTx && (
            <Button
              size="lg"
              className="w-full"
              variant="secondary"
              onClick={pay}
            >
              Pay & Unlock (Fake)
            </Button>
          )}

          {img && (
            <div className="flex flex-col items-center gap-3">
              <Image
                src={img}
                alt="NFT"
                width={256}
                height={256}
                className="w-64 rounded-xl border shadow-md transition-all duration-200 hover:scale-[1.02]"
              />

              {expires && (
                <p className="text-xs text-muted-foreground">
                  Access expires: {new Date(expires).toLocaleString()}
                </p>
              )}
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-center">
          {img && (
            <Button size="sm" variant="outline" onClick={requestAsset}>
              Reopen Protected Resource
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
