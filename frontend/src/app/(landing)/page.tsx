"use client";

import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Hero from '@/components/hero'
import FeaturedPaths from '@/components/featuredPaths'
import WhyEdaQuest from '@/components/why'

export default function Home() {
  const { ready, authenticated } = usePrivy();
  const router = useRouter();

  useEffect(() => {
    if (ready && authenticated) {
      router.push('/dashboard');
    }
  }, [ready, authenticated, router]);

  if (!ready || authenticated) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <>
      <Hero />
      <FeaturedPaths />
      <WhyEdaQuest />
    </>
  )
}
