"use client";

import { getEmbeddedConnectedWallet, usePrivy, useWallets } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Hero from '@/components/hero'
import FeaturedPaths from '@/components/featuredPaths'
import WhyEdaQuest from '@/components/why'

export default function Home() {
  const { ready, authenticated } = usePrivy();
  const { wallets } = useWallets();
  const embedded =getEmbeddedConnectedWallet(wallets);
  const router = useRouter();

  useEffect(() => {
    if (ready && authenticated && embedded) {
        router.push('/dashboard');
    }
  }, [ready, authenticated, router, embedded])

  // if (!ready) {
  //   return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  // }

  if (!authenticated || !ready){
    return (
    <>
      <Hero />
      <FeaturedPaths />
      <WhyEdaQuest />
    </>
  )
  }
}
