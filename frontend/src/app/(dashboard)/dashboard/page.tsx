"use client";

import { usePrivy, useWallets } from "@privy-io/react-auth";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@/components/store/useUser";
import { useContract } from "@/components/store/useContract";
import ProgressOverview from "../components/ProgressOverview";


export default function Dashboard() {
  const { authenticated, ready, user } = usePrivy()
  const { wallets } = useWallets()
  const router = useRouter();
  const { UserDetails, setUserDetails, UserProgress, setUserProgress} = useUser();
  const { updateUsersStatus, getUserData} = useContract();
  
  console.log(`UserDetails ${UserDetails?.google}`)

  useEffect(() => {
    if (ready && authenticated && user?.id) {
      const addrr = wallets[0]?.address;
      
      if (addrr) {
        setUserDetails(user);
        console.log(`wallets for privy: ${addrr}`)

        getUserData(addrr)
          .then(data => {
            console.log("Contract data for user:", data)
            setUserProgress(data)
          })
          .catch(error => console.error("error fetching user data:", error));
        console.log(`user progress set`,UserProgress)
        console.log(`update user status for:`, addrr);
      } else {
        console.warn("pub addr not available yet");
      }

    } else if (ready && !authenticated) {
      router.push('/');
    }
  }, [ready, authenticated, user, router, setUserDetails, getUserData, updateUsersStatus, wallets, UserProgress, setUserProgress]);

  if (!ready) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (!UserProgress?.hasSubscription && authenticated) {
    return (
      <div className="flex justify-center md:flex-row p-52">
        <ProgressOverview />
      </div>
    );
  }

  if (UserProgress?.hasSubscription && ready && authenticated) {
    return (
      <div className="flex flex-col md:flex-row p-5">
        <MainContent />
        <Sidebar />
      </div>
    );
  }
}
