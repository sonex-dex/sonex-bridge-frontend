import { WarpCoreConfig, TokenStandard } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      // The ChainName of the token
      chainName: "sepolia",
      // See https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/token/TokenStandard.ts
      standard: TokenStandard.EvmHypCollateral,
      // The token metadata (decimals, symbol, name)
      decimals: 18,
      symbol: "CT",
      name: "CustomToken",
      // The router address
      addressOrDenom: "0x3213248A0AcED36c91852FFB357B816cc0eCdbcC",
      // The address of the underlying collateral token
      collateralAddress: "0x76d115B95718Aad543d1687D12e131Bb0B386062",
      // A path to a token logo image
      logoURI: "/logos/usdc.png",
      // The list of tokens this one is connected to
      connections: [{ token: "ethereum|soneiumtestnet|0x793D5675DE713767f384cD1204e3A39d47a44b29" }],
    },
    {
      chainName: "soneiumtestnet",
      standard: TokenStandard.EvmHypSynthetic,
      decimals: 18,
      symbol: "CT",
      name: "CustomToken",
      addressOrDenom: "0x793D5675DE713767f384cD1204e3A39d47a44b29",
      logoURI: "/logos/usdc.png",
      connections: [{ token: "ethereum|sepolia|0x3213248A0AcED36c91852FFB357B816cc0eCdbcC" }],
    },
  ],
  options: {},
};
