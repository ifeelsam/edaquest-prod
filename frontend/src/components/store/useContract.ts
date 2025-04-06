import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { privateKeyToAccount } from "viem/accounts";
import { writeContract, readContract } from "@wagmi/core";
import { config } from "./config";
import abi from "./abi.json";
import { parseEther } from "viem";

type UserSchema = {
  userAddress: string;
  subscriptionType: string;
  hasSubscription: boolean;
  totalXP: bigint;
  level: bigint;
  questsCompleted: bigint;
  currentStreak: bigint;
  subscriptionTakenAt: bigint;
  amountPaid: bigint;
};

interface ContractState {
  purchasedSubscription: (
    account: string,
    subscription_type: string
  ) => Promise<void>;
  updateUsersStatus: (account: string) => Promise<void>;
  getUserData: (account: string) => Promise<UserSchema>;
  userData: UserSchema | null;
  smartContractAddress: string;
  setSmartContractAddress: (address: string) => void;
}

export const useContract = create<ContractState>()(
  devtools(
    (set, get) => ({
      purchasedSubscription: async (
        account: string,
        subscription_type: string
      ) => {
        try {
          // Use environment variable safely
          const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
          if (!privateKey) throw new Error("Private key not found in environment variables");

          const ownerAccount = privateKeyToAccount(`0x${privateKey.startsWith('0x') ? privateKey.slice(2) : privateKey}`);
          const money = subscription_type === "monthly" ? "1" : "10";

          const contractAddress = get().smartContractAddress;
          if (!contractAddress) throw new Error("Smart contract address not set");

          const result = await writeContract(config, {
            abi,
            account: ownerAccount,
            address: contractAddress as `0x${string}`,
            functionName: "purchasedSubscription",
            args: [account, subscription_type],
            value: parseEther(money),
          });

          // Refresh user data after purchase
          await get().getUserData(account);

          return result;
        } catch (error) {
          console.error("Error purchasing subscription:", error);
          throw error;
        }
      },

      updateUsersStatus: async (account: string) => {
        try {
          const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
          if (!privateKey) throw new Error("Private key not found in environment variables");

          const ownerAccount = privateKeyToAccount(`0x${privateKey.startsWith('0x') ? privateKey.slice(2) : privateKey}`);

          const contractAddress = get().smartContractAddress;
          if (!contractAddress) throw new Error("Smart contract address not set");

          const result = await writeContract(config, {
            abi,
            account: ownerAccount,
            address: contractAddress as `0x${string}`,
            functionName: "updateUsersStatus",
            args: [account],
          });

          // Refresh user data after update
          await get().getUserData(account);

          return result;
        } catch (error) {
          console.error("Error updating user status:", error);
          throw error;
        }
      },

      getUserData: async (account: string) => {
        try {
          const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
          if (!privateKey) throw new Error("Private key not found in environment variables");

          // const ownerAccount = privateKeyToAccount(`0x${privateKey.startsWith('0x') ? privateKey.slice(2) : privateKey}`);

          const contractAddress = get().smartContractAddress;
          if (!contractAddress) throw new Error("Smart contract address not set");

          const result = await readContract(config, {
            abi,
            address: contractAddress as `0x${string}`,
            functionName: 'getUserData',
            args: [account],
          });

          const userData = result as unknown as UserSchema;
          set({ userData });

          return userData;
        } catch (error) {
          console.error("Error getting user data:", error);
          throw error;
        }
      },

      userData: null,
      smartContractAddress: "0x7EcBC32c5CB6b6064A50B3f0A827F3c1534820AF",
      setSmartContractAddress: (address: string) => set({ smartContractAddress: address }),
    }),
    {
      name: "Contract Store",
      enabled: true,
    }
  )
);

