import {
  eclipsemainnet,
  eclipsemainnetAddresses,
  solanamainnet,
  solanamainnetAddresses,
} from '@hyperlane-xyz/registry';
import { ChainMap, ChainMetadata } from '@hyperlane-xyz/sdk';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  solanamainnet: {
    ...solanamainnet,
    // SVM chains require mailbox addresses for the token adapters
    mailbox: solanamainnetAddresses.mailbox,
    // Including a convenient rpc override because the Solana public RPC does not allow browser requests from localhost
    rpcUrls: process.env.NEXT_PUBLIC_SOLANA_RPC_URL
      ? [{ http: process.env.NEXT_PUBLIC_SOLANA_RPC_URL }, ...solanamainnet.rpcUrls]
      : solanamainnet.rpcUrls,
  },
  eclipsemainnet: {
    ...eclipsemainnet,
    mailbox: eclipsemainnetAddresses.mailbox,
  },
  sepolia: {
    protocol: ProtocolType.Ethereum,
    chainId: 11155111,
    domainId: 123123,
    name: 'sepolia',
    displayName: 'Sepolia',
    nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: [{ http: 'https://api.zan.top/eth-sepolia' }],
    blockExplorers: [
      {
        name: 'MyCustomScan',
        url: 'https://mycustomchain-scan.com',
        apiUrl: 'https://api.mycustomchain-scan.com/api',
        family: ExplorerFamily.Etherscan,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 1,
      estimateBlockTime: 10,
    },
    logoURI: '/logo.svg',
  },
  minato: {
    protocol: ProtocolType.Ethereum,
    chainId: 1946,
    domainId: 1946,
    name: 'Minato',
    displayName: 'Minato',
    nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: [{ http: 'https://soneium-minato.drpc.org' }],
    blockExplorers: [
      {
        name: 'MyCustomScan',
        url: 'https://mycustomchain-scan.com',
        apiUrl: 'https://api.mycustomchain-scan.com/api',
        family: ExplorerFamily.Etherscan,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 1,
      estimateBlockTime: 10,
    },
    logoURI: '/logo.svg',
  },
};
