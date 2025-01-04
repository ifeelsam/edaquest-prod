'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId="cm58j5nmx00vr52bsakztgq2r"
      config={{
        appearance: {
          logo: '/diamond.png',
          landingHeader: "EdaQuest",
          loginMessage: "Log in or Sign up to EdaQuest"
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
