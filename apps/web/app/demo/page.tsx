"use client";

import { useState } from "react";
import { Button } from "@xf402/ui/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@xf402/ui/components/card";
import Image from "next/image";
import { PayloadDialog } from "@/components/demo/PayloadDialog";

export default function DemoPage() {
  const [img, setImg] = useState<string | null>(null);
  const [expires, setExpires] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [requireTx, setRequireTx] = useState(false);
  const [responseData, setResponseData] = useState(null);

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
    setResponseData(data);
    setLoading(false);
  }

  async function pay(tx: string) {
    const payload = Buffer.from(
      JSON.stringify({
        x402Version: 1,
        scheme: "exact",
        network: "solana",
        payload: { tx: tx },
      })
    ).toString("base64");

    const res = await fetch("/api/asset", {
      headers: { "X-PAYMENT": payload },
    });

    const data = await res.json();
    setImg(data.url);
    setExpires(data.valid_until);
    setRequireTx(false);
    setResponseData(data);
  }

  return (
    <div className="min-h-screen w-full flex flex-col  items-center justify-center px-6 gap-4 pt-12">
      <Card className="w-full container lg:max-w-lg">
        <CardHeader className="w-full">
          <CardTitle>
            {" "}
            Rent NFT Access <span className="text-primary">(XF402)</span>{" "}
          </CardTitle>
          <CardAction>
            {requireTx ? (
              <PayloadDialog
                onSubmit={(tx) => pay(tx)}
                trigger={
                  <Button
                    size="lg"
                    className="w-full bg-linear-to-r from-[#00FFA3] to-[#DC1FFF] text-black font-medium"
                  >
                    Pay & Unlock
                  </Button>
                }
              />
            ) : (
              <Button
                size="lg"
                className={
                  img
                    ? "w-full bg-linear-to-r from-[#00FFA3] to-[#DC1FFF] text-black font-medium"
                    : "w-full"
                }
                onClick={
                  loading ? undefined : img ? requestAsset : requestAsset
                }
                disabled={loading}
              >
                {loading
                  ? "Checking access…"
                  : img
                    ? "Refresh Access"
                    : "Unlock NFT Content"}
              </Button>
            )}
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="backdrop-blur-lg">
            {img ? (
              <div className="text-center gap-3 flex flex-col items-center aspect-square w-full lg:w-md justify-center">
                <Image
                  src={img}
                  alt="NFT"
                  width={1000}
                  height={1000}
                  className="aspect-square w-full lg:w-md rounded-xl shadow-2xl border border-white/10 hover:scale-[1.02] transition-transform"
                />
              </div>
            ) : (
              <div className="aspect-square w-full lg:w-md rounded-xl border bg-white/1 flex flex-col items-center justify-center gap-3 backdrop-blur-xl">
                <div className="w-16 h-16 rounded-full border bg-white/10 flex items-center justify-center text-2xl animate-pulse">
                  🔒
                </div>
                <p className="text-sm opacity-80 tracking-wide">NFT Locked</p>
                <p className="text-xs opacity-60">Request access to reveal</p>
              </div>
            )}
          </div>
        </CardContent>
        {expires && (
          <CardFooter>
            <p className="text-xs text-muted-foreground">
              ⏳ Expires: {new Date(expires).toLocaleString()}
            </p>
          </CardFooter>
        )}
      </Card>
      <Card className="w-full container lg:max-w-lg">
        <CardHeader className="w-full">
          <CardTitle> Response</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          <div className="backdrop-blur-lg">
            <pre className="text-xs">
              {JSON.stringify(responseData, null, 2)}
            </pre>
          </div>
        </CardContent>
        {expires && (
          <CardFooter>
            <p className="text-xs text-muted-foreground">
              ⏳ Expires: {new Date(expires).toLocaleString()}
            </p>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
