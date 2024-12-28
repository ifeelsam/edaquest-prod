"use client"
import Header from "@/components/Header"
import { usePrivy } from "@privy-io/react-auth"

export default function Home() {
  const { login } = usePrivy()
  return (
    <div className="min-h-screen flex flex-col bg-teal-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 my-10">
        {/* Adjusted spacing */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-teal-800 mb-6">
            eduQuest
          </h1>
          <button onClick={() => login({ loginMethods: ['email', 'wallet'] })}>
            Login with email and wallet only
          </button>;
        </div>

      </main>
      {/* <Footer /> */}
    </div>
  )
}
