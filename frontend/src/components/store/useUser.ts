import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { User as UserDetails } from "@privy-io/react-auth";
import type { PersistStorage, StorageValue } from 'zustand/middleware';

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

// Custom storage object with BigInt handling, implementing PersistStorage<UserState>
const storageWithBigInt: PersistStorage<UserState> = {
  getItem: (name) => {
    const str = localStorage.getItem(name);
    if (!str) return null;
    // Parse the entire StorageValue object, reviving BigInts within the state property
    return JSON.parse(str, (key, value) => {
      // Check if we are inside the 'state' object and the value is a BigInt string
      if (key !== '' && typeof value === 'string' && /^-?\d+n$/.test(value)) {
         // Check the context or parent object if necessary, assuming BigInts are only directly in UserProgress for now
         // This reviver applies to all properties, adjust if BigInts are nested differently.
        return BigInt(value.slice(0, -1));
      }
      return value;
    });
  },
  setItem: (name, value: StorageValue<UserState>) => {
    // Stringify the entire StorageValue object, replacing BigInts in the state property
    const str = JSON.stringify(value, (key, value) => {
      if (typeof value === 'bigint') {
        return value.toString() + 'n'; // Add 'n' suffix
      }
      return value;
    });
    localStorage.setItem(name, str);
  },
  removeItem: (name) => localStorage.removeItem(name),
};

export const useUser = create<UserState>()(
    persist(
        devtools((set) => ({
            UserDetails: null,
            setUserDetails: (user: UserDetails | null) => set({ UserDetails: user }),
            UserProgress: null,
            setUserProgress: (data: UserSchema | null) => set({UserProgress: data })
        }),
        {
            name: "User Store",
            enabled: true
        }),
        {
            name: "user-storage", 
            storage: storageWithBigInt, // Use the corrected custom storage
        }
    )
)
