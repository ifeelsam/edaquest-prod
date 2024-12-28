'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId="cm58j5nmx00vr52bsakztgq2r"
      config={{
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          // logo: 'https://',
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
