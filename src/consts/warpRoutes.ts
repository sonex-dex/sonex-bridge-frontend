import { TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      // The ChainName of the token
      chainName: 'bsc',
      // See https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/token/TokenStandard.ts
      standard: TokenStandard.EvmHypCollateral,
      // The token metadata (decimals, symbol, name)
      decimals: 18,
      symbol: 'Cake',
      name: 'PancakeSwap Token',
      // The router address
      addressOrDenom: '0xD1f5f1613853F5e12ac25cA4B9130d1A71c67807',
      // The address of the underlying collateral token
      collateralAddressOrDenom: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      // A path to a token logo image
      logoURI: 'https://img.sonex.so/bridge/cake.svg',
      // The list of tokens this one is connected to
      connections: [{ token: 'ethereum|soneium|0xcD5F8041bE4b68186e3D9004c9c50218B5EDAedE' }],
    },
    {
      chainName: 'soneium',
      standard: TokenStandard.EvmHypSynthetic,
      decimals: 18,
      symbol: 'Cake',
      name: 'PancakeSwap Token',
      addressOrDenom: '0xcD5F8041bE4b68186e3D9004c9c50218B5EDAedE',
      logoURI: 'https://img.sonex.so/bridge/cake.svg',
      connections: [{ token: 'ethereum|bsc|0xD1f5f1613853F5e12ac25cA4B9130d1A71c67807' }],
    },
    {
      // The ChainName of the token
      chainName: 'bsc',
      // See https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/token/TokenStandard.ts
      standard: TokenStandard.EvmHypCollateral,
      // The token metadata (decimals, symbol, name)
      decimals: 18,
      symbol: 'Broccoli',
      name: `CZ'S DOG`,
      // The router address
      addressOrDenom: '0xa9aeCd99FEf9bAd545Cc00fc7E53E0a7D3B04778',
      // The address of the underlying collateral token
      collateralAddressOrDenom: '0x6d5AD1592ed9D6D1dF9b93c793AB759573Ed6714',
      // A path to a token logo image
      logoURI: 'https://img.sonex.so/bridge/broccoli.jpg',
      // The list of tokens this one is connected to
      connections: [{ token: 'ethereum|soneium|0xDa5b555598eEe0917dD179F95fF356e300a7e35C' }],
    },
    {
      chainName: 'soneium',
      standard: TokenStandard.EvmHypSynthetic,
      decimals: 18,
      symbol: 'Broccoli',
      name: `CZ'S DOG`,
      addressOrDenom: '0xDa5b555598eEe0917dD179F95fF356e300a7e35C',
      logoURI: 'https://img.sonex.so/bridge/broccoli.jpg',
      connections: [{ token: 'ethereum|bsc|0xa9aeCd99FEf9bAd545Cc00fc7E53E0a7D3B04778' }],
    },
    {
      // The ChainName of the token
      chainName: 'bsc',
      // See https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/token/TokenStandard.ts
      standard: TokenStandard.EvmHypCollateral,
      // The token metadata (decimals, symbol, name)
      decimals: 9,
      symbol: 'BabyDoge',
      name: `Baby Doge Coin`,
      // The router address
      addressOrDenom: '0x034108bA89ddd348981089375FE7d15013196d69',
      // The address of the underlying collateral token
      collateralAddressOrDenom: '0xc748673057861a797275cd8a068abb95a902e8de',
      // A path to a token logo image
      logoURI: 'https://img.sonex.so/bridge/babydoge.jpg',
      // The list of tokens this one is connected to
      connections: [{ token: 'ethereum|soneium|0xa30211624f797Fb39803181a85A1b4453a9fC583' }],
    },
    {
      chainName: 'soneium',
      standard: TokenStandard.EvmHypSynthetic,
      decimals: 9,
      symbol: 'BabyDoge',
      name: `Baby Doge Coin`,
      addressOrDenom: '0xa30211624f797Fb39803181a85A1b4453a9fC583',
      logoURI: 'https://img.sonex.so/bridge/babydoge.jpg',
      connections: [{ token: 'ethereum|bsc|0x034108bA89ddd348981089375FE7d15013196d69' }],
    },
  ],
  options: {},
};
