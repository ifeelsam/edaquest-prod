"use client";
import { usePrivy } from "@privy-io/react-auth";
import { Button } from "./ui/button";

export default function LoginButton() {
  const { login } = usePrivy()
  return (
    <Button onClick={() => login({ loginMethods: ['email', 'wallet'] })}>
      login with email and wallet only
    </Button>
  )
};