
// packages/js/src/utils.ts
import type { PaymentChallenge, PaymentPayload, Base64String } from "./types";

/**
 * Checks if a Response object represents an HTTP 402 Payment Required.
 */
export function isPaymentRequired(res: Response): boolean {
  return res.status === 402;
}

/**
 * Extracts a PaymentChallenge object from a 402 JSON response.
 */
export async function parsePaymentChallenge(res: Response): Promise<PaymentChallenge> {
  try {
    const data = await res.json();
    return data as PaymentChallenge;
  } catch (err) {
    throw new Error("Invalid 402 PaymentRequired response: " + (err as Error).message);
  }
}

/**
 * Encodes a payment payload (PaymentPayload) into a Base64 string for use
 * as the X-PAYMENT header.
 */
export function encodePaymentHeader(payload: PaymentPayload): Base64String {
  return Buffer.from(JSON.stringify(payload), "utf8").toString("base64");
}

/**
 * Decodes an X-PAYMENT header back into a PaymentPayload object.
 */
export function decodePaymentHeader(b64: Base64String): PaymentPayload {
  const json = Buffer.from(b64, "base64").toString("utf8");
  return JSON.parse(json);
}

/**
 * Returns a URL combined with the SDK’s configured baseUrl if provided.
 */
export function resolveUrl(url: string, baseUrl?: string): string {
  if (!baseUrl) return url;
  if (url.startsWith("http")) return url;
  return `${baseUrl.replace(/\/$/, "")}/${url.replace(/^\//, "")}`;
}

/**
 * Simple delay helper (for re-tries or polling receipts)
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
