"use client";
import { usePrivy } from "@privy-io/react-auth";
import { Button } from "./ui/button";
const LoginButton = () => {
  const { login }  = usePrivy()

  return (
    <Button onClick={() => login({ loginMethods: ['email', 'wallet'] })}>
      login with email and wallet only
    </Button>
  )
};

export default LoginButton;
