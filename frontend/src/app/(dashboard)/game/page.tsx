"use client";

import { Quant } from "@/components/game/unityGame";
import { useEffect } from "react";
import { useContract } from "@/components/store/useContract";
import { usePrivy } from '@privy-io/react-auth';
// import { useUser } from "@/components/store/useUser";
// import { usePrivy } from "@privy-io/react-auth";
// import ProgressOverview from "../components/ProgressOverview";

export default function Game() {
  const { updateUsersStatus } = useContract();
  const { authenticated, user } = usePrivy();

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;

    if (authenticated && user?.wallet?.address) {
      const userAddress = user.wallet.address;
      console.log(`Setting timer to update status for ${userAddress} in 30 seconds.`);

      timerId = setTimeout(() => {
        console.log(`Timer finished, updating status for ${userAddress}...`);
        updateUsersStatus(userAddress)
          .then(() => console.log(`Status updated successfully for ${userAddress}.`))
          .catch(error => console.error(`Failed to update status for ${userAddress}:`, error));
      }, 30000);
    }

    return () => {
      if (timerId) {
        console.log(`Clearing timer for ${user?.wallet?.address || 'user'}.`);
        clearTimeout(timerId);
      }
    };
  }, [authenticated, user, updateUsersStatus]);

  // const { UserProgress } = useUser()
  // const {authenticated} = usePrivy()
  
  // if(!UserProgress?.hasSubscription) {
  //     <div className="flex justify-center md:flex-row p-52">
  //       <ProgressOverview />
  //     </div>
  // }

  // if(UserProgress?.hasSubscription && authenticated) {
  return (
    <main className="text-white overflow-hidden">
      <div className="container mx-auto items-center py-2 z-10">
        <header className="mb-2">
          <div className="backdrop-blur-sm rounded-xl p-2 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 font-pixel text-center">
            Quantum Entanglement
          </h1>
          <p className="text-lg mb-0 text-center">explore the world, and learn about electron spin</p>
          </div>
        </header>
        <Quant />
      </div>

      {/* <div className="mt-2 mx-36 flex justify-between items-center">
        <div className="text-sm font-pixel">EdaQuest v0.1.2</div>
        <div className="flex space-x-4">
          <button className="neon-button p-2 rounded-xl">
            Fullscreen
          </button>
          <button className="px-4 py-2 bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.5)] rounded-md font-pixel text-sm transition-colors">
            Controls
          </button>
        </div>
      </div> */}
    </main>
  );
  // } 
}

