import {
  bsc,
  bscAddresses,
  ethereum,
  ethereumAddresses,
  soneium,
  soneiumAddresses,
} from '@hyperlane-xyz/registry';
import { ChainMap, ChainMetadata } from '@hyperlane-xyz/sdk';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  bsc: {
    ...bsc,
    rpcUrls: [{ http: 'https://bnb-mainnet.g.alchemy.com/v2/zd_R_1HU96Wq3zVPDsYG_BHfObwhGYm_' }],
    mailbox: bscAddresses.mailbox,
  },
  ethereum: {
    ...ethereum,
    rpcUrls: [{ http: 'https://eth-mainnet.g.alchemy.com/v2/zd_R_1HU96Wq3zVPDsYG_BHfObwhGYm_' }],
    mailbox: ethereumAddresses.mailbox,
  },
  soneium: {
    ...soneium,
    rpcUrls: [
      { http: 'https://soneium-mainnet.g.alchemy.com/v2/zd_R_1HU96Wq3zVPDsYG_BHfObwhGYm_' },
    ],
    mailbox: soneiumAddresses.mailbox,
  },
};
