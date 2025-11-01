"use client";

import { useState } from "react";
import { Button } from "@xf402/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@xf402/ui/components/dialog";
import { Input } from "@xf402/ui/components/input";
import { Label } from "@xf402/ui/components/label";

export function PayloadDialog({
  onSubmit,
  trigger,
}: {
  onSubmit: (tx: string) => void;
  trigger: React.ReactNode;
}) {
  const [tx, setTx] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Provide Transaction</DialogTitle>
          <DialogDescription>
            Paste your Solana transaction signature to unlock content.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="tx">Transaction Signature</Label>
            <Input
              id="tx"
              value={tx}
              onChange={(e) => setTx(e.target.value)}
              placeholder="Enter Solana tx signature"
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                onSubmit(tx);
              }}
              disabled={!tx}
            >
              Submit
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
