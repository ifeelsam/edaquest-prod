"use client";

import { usePrivy } from "@privy-io/react-auth";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@/components/store/useUser";
import { useContract } from "@/components/store/useContract";

export default function Dashboard() {
  const { authenticated, ready, user } = usePrivy()
  const router = useRouter();
  const { UserDetails, setUserDetails } = useUser();
  const { updateUsersStatus } = useContract();

  console.log(`UserDetails ${UserDetails?.google}`)

  useEffect(() => {
      const addrr = String(user?.id);
    if (authenticated && ready) {
      setUserDetails(user)
      console.log(`user data: ${updateUsersStatus(addrr)}`)
    }

    if ((ready && !authenticated)) {
      router.push('/');
    }

      console.log(`user data: ${updateUsersStatus(addrr)}`)
  }, [ready, updateUsersStatus,  authenticated, router, setUserDetails, UserDetails, user]);

  if (!ready) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (ready && authenticated) {
    return (
      <div className="flex flex-col md:flex-row p-5">
        <MainContent />
        <Sidebar />
      </div>
    );
  }
}
