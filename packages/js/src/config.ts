import type { XF402Config } from "./types";

// -----------------------------------------------------------------------------
// ⚙️ Global Configuration State
// -----------------------------------------------------------------------------

let _config: XF402Config = {
  baseUrl: "",
  network: "solana-devnet",
  defaultToken: "USDC",
  facilitatorUrl: "",
  signerPublicKey: "",
  fetcher: typeof fetch !== "undefined" ? fetch.bind(globalThis) : undefined,
};
/**
 * Sets global SDK configuration.
 * Used to initialize or override defaults.
 *
 * @example
 * setConfig({
 *   baseUrl: "https://api.xf402.dev",
 *   network: "solana-mainnet",
 *   signerPublicKey: "Fj8k...abc",
 * });
 */
export function setConfig(config: XF402Config) {
  _config = { ..._config, ...config };
}

/**
 * Returns the current configuration.
 */
export function getConfig(): XF402Config {
  return _config;
}

/**
 * Returns the active fetcher (default or custom).
 */
export function getFetcher(): typeof fetch {
  if (!_config.fetcher) {
    throw new Error("No fetch implementation found. Set via setConfig().");
  }
  return _config.fetcher;
}

/**
 * Resets configuration to defaults.
 * Useful for testing environments.
 */
export function resetConfig() {
  _config = {
    baseUrl: "",
    network: "solana-devnet",
    defaultToken: "USDC",
    facilitatorUrl: "",
    signerPublicKey: "",
    fetcher: typeof fetch !== "undefined" ? fetch.bind(globalThis) : undefined,
  };
}
