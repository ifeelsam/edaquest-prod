"use client";

import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import QuickActions from "@/components/quickActions";
import ProgressTracker from "@/components/progressTracker";

export default function Dashboard() {
  const { ready, authenticated } = usePrivy();
  const router = useRouter();

  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/login');
    }
  }, [ready, authenticated, router]);

  if (!ready || !authenticated) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl lg:text-3xl font-bold mb-6 neon-glow">Welcome, CryptoWarrior!</h1>
      <ProgressTracker />
      <QuickActions />
    </div>
  );
}

