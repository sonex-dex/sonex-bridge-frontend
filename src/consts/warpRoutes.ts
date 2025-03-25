import { TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      // The ChainName of the token
      chainName: 'opbnb',
      // See https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/token/TokenStandard.ts
      standard: TokenStandard.EvmHypCollateral,
      // The token metadata (decimals, symbol, name)
      decimals: 18,
      symbol: 'Cake',
      name: 'PancakeSwap Token',
      // The router address
      addressOrDenom: '0x7c0c429e092Cb28fDcc3e6e67ca06D3b9fAb0306',
      // The address of the underlying collateral token
      collateralAddressOrDenom: '0x2779106e4F4A8A28d77A24c18283651a2AE22D1C',
      // A path to a token logo image
      logoURI: 'https://img.sonex.so/bridge/cake.svg',
      // The list of tokens this one is connected to
      connections: [{ token: 'ethereum|soneium|0x7c0c429e092Cb28fDcc3e6e67ca06D3b9fAb0306' }],
    },
    {
      chainName: 'soneium',
      standard: TokenStandard.EvmHypSynthetic,
      decimals: 18,
      symbol: 'Cake',
      name: 'PancakeSwap Token',
      addressOrDenom: '0x7c0c429e092Cb28fDcc3e6e67ca06D3b9fAb0306',
      logoURI: 'https://img.sonex.so/bridge/cake.svg',
      connections: [{ token: 'ethereum|opbnb|0x7c0c429e092Cb28fDcc3e6e67ca06D3b9fAb0306' }],
    },
  ],
  options: {},
};
