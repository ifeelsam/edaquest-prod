import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { User as UserDetails } from "@privy-io/react-auth";


interface UserState {
    UserDetails: UserDetails | null;
    setUserDetails: (user: UserDetails | null) => void;
}


export const useUser = create<UserState>()(
    devtools((set) => ({
        UserDetails: null,
        setUserDetails: (user: UserDetails) => set({ UserDetails: user }),
    }))
)
