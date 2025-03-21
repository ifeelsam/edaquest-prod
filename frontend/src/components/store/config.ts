import { http, createConfig } from '@wagmi/core'
import { eduChainTestnet } from '@wagmi/core/chains'

export const config = createConfig({
  chains: [eduChainTestnet],
  transports: {
    [eduChainTestnet.id]: http(),
  },
})