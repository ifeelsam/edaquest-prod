"use client";
import { usePrivy } from "@privy-io/react-auth";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
   const { ready, authenticated } = usePrivy();
  const router = useRouter();

  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/');
    }
  }, [ready, authenticated, router]);

  if (!ready || !authenticated) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

 
  return (
    <div className="flex flex-col md:flex-row p-5">
      <MainContent />
      <Sidebar />
    </div>
  );
}
