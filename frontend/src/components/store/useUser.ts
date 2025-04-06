import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { User as UserDetails } from "@privy-io/react-auth";


interface UserState {
    UserDetails: UserDetails | null;
    setUserDetails: (user: UserDetails | null) => void;
    UserProgress: UserSchema | null;
    setUserProgress : (data: UserSchema | null) => void; 
}

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
}

export const useUser = create<UserState>()(
    devtools((set) => ({
        UserDetails: null,
        setUserDetails: (user: UserDetails) => set({ UserDetails: user }),
        UserProgress: null,
        setUserProgress: (data: UserSchema) => set({UserProgress: data })
    }))
)
