"use client";
import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useContract } from "@/components/store/useContract";
import { useWallets } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";

export default function SubscriptionPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly"
  );
  const [loadingCycle, setLoadingCycle] = useState<"monthly" | "annual" | null>(
    null
  );
  const [isPurchaseReady, setIsPurchaseReady] = useState(false);
  const router = useRouter();
  const { authenticated, login } = usePrivy();
  const loginOptions: Array<
    | "wallet"
    | "email"
    | "sms"
    | "google"
    | "twitter"
    | "discord"
    | "github"
    | "linkedin"
    | "spotify"
    | "instagram"
    | "tiktok"
    | "apple"
    | "farcaster"
    | "telegram"
  > = ["email", "google"];
  const plans = {
    monthly: {
      price: 2,
      features: [
        "Access to all quests and learning paths",
        "Full skill tree progression",
        "Priority community support",
        "500 EDQ tokens monthly",
        "All achievements and badges",
        "Exclusive avatar items",
        "Early access to new features",
        "Weekly coding challenges",
      ],
    },
    annual: {
      price: 20,
      features: [
        "Access to all quests and learning paths",
        "Full skill tree progression",
        "Priority community support",
        "600 EDQ tokens monthly",
        "All achievements and badges",
        "Exclusive avatar items",
        "Early access to new features",
        "Weekly coding challenges",
        "Quarterly 1-on-1 mentoring session",
        "2 months free",
      ],
    },
  };
  const { wallets, ready } = useWallets();
  const { purchasedSubscription } = useContract();
  const savingsAmount =
    Math.round((plans.monthly.price * 12 - plans.annual.price) * 100) / 100;
  const savingsPercentage = Math.round(
    (savingsAmount / (plans.monthly.price * 12)) * 100
  );

  useEffect(() => {
    console.log("wallets available", wallets)
    if (ready && authenticated && wallets[0]?.address) {
      setIsPurchaseReady(true);
    } else {
      setIsPurchaseReady(false);
    }
  }, [ready, authenticated, wallets]);

  function handlePurchasing(subscription_type: "monthly" | "annual") {
    if (!authenticated) {
      login({ loginMethods: loginOptions });
      return;
    }
    const account = wallets[0]?.address;
    console.log("account", account);

    if (!account) {
      console.error("User address not found. Cannot proceed with purchase.");
      return;
    }
    try {
      purchasedSubscription(account, subscription_type)
      .then(result => console.log("purchasing went fine:", result));
      setTimeout(() => {
        setLoadingCycle(null);
        console.log("done with the purchase")
        router.push("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("error:", error);
    }
  }

  // const handleBillingCycleChange = (cycle: "monthly" | "annual") => {
  //   if (!authenticated) {
  //     login({ loginMethods: loginOptions });
  //     return;
  //   }

  //   if (loadingCycle) return;

  //   setLoadingCycle(cycle);
  //   setBillingCycle(cycle);
  // };

  return (
    <div className="max-w-4xl mx-auto py-32 px-4">
      <h1 className="text-3xl lg:text-4xl font-pixel font-bold mb-6 text-center neon-glow">
        Level Up Your Learning Journey
      </h1>

      <p className="text-center mb-8 max-w-2xl mx-auto">
        Unlock the full EdaQuest experience and accelerate your progress with
        our premium subscription.
      </p>

      {/* Billing Toggle */}
      <div className="flex justify-center items-center mb-12">
        <button
          className={`px-6 py-2 rounded-l-xl transition-colors duration-200 ${
            billingCycle === "monthly" ? "bg-red-500 neon-glow" : "bg-gray-700"
          } ${
            loadingCycle ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          {loadingCycle === "monthly" ? "Loading..." : "Monthly"}
        </button>
        <button
          className={`px-6 py-2 rounded-r-xl transition-colors duration-200 ${
            billingCycle === "annual" ? "bg-red-500 neon-glow" : "bg-gray-700"
          } ${
            loadingCycle ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"
          }`}
          onClick={() => setBillingCycle("annual")}
        >
              Annual{" "}
              <span className="text-accent">Save {savingsPercentage}%</span>
        </button>
      </div>

      {/* Subscription Card */}
      <div className="glass-morphic p-12 rounded-lg relative overflow-hidden neon-border max-w-3xl mx-auto">
        <h2 className="text-2xl font-pixel font-bold mb-2">EdaQuest Premium</h2>
        <div className="flex items-end mb-6">
          <span className="text-4xl font-pixel font-bold">
            {plans[billingCycle].price} EDU
          </span>
          <span className="text-gray-400 ml-2">
            /{billingCycle === "monthly" ? "month" : "year"}
          </span>
        </div>

        {billingCycle === "annual" && (
          <div className="mb-6 bg-primary/20 p-3 rounded-lg">
            <p className="text-accent font-bold">
              You save {savingsAmount} EDU with annual billing!
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {plans[billingCycle].features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="text-accent mr-2 h-5 w-5 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => handlePurchasing(billingCycle)}
          disabled={!isPurchaseReady && authenticated}
          className={`neon-button w-full py-3 rounded-xl text-lg ${(!isPurchaseReady && authenticated) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {!authenticated
            ? "Login to Subscribe"
            : !isPurchaseReady
            ? "Preparing Wallet..."
            : billingCycle === "monthly"
            ? "Start Your 7 Days Trial Now"
            : "Start Annual Subscription"}
        </button>

        <p className="text-center text-sm mt-4 text-gray-400">
          Cancel anytime. No hidden fees.
        </p>
      </div>

      {/* Testimonials */}
      {/* <div className="mt-16">
        <h2 className="text-2xl font-pixel font-bold mb-8 text-center neon-glow">What Our Questers Say</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "CryptoMaster",
              avatar: "/avatar-1.png",
              level: 30,
              quote:
                "EdaQuest transformed how I learn blockchain concepts. The gamification makes complex topics fun and engaging!",
            },
            {
              name: "TokenTrader",
              avatar: "/avatar-2.png",
              level: 26,
              quote:
                "The skill trees and achievement system keep me motivated. I've learned more in 3 months than I did in a year of traditional courses.",
            },
            {
              name: "Web3Ninja",
              avatar: "/avatar-3.png",
              level: 25,
              quote:
                "The community challenges and leaderboards create healthy competition. Plus, earning EDQ tokens while learning is genius!",
            },
          ].map((testimonial, index) => (
            <div key={index} className="glass-morphic p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="pixel-art rounded-full mr-3"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-accent">Level {testimonial.level} Quester</p>
                </div>
              </div>
              <p className="italic">{testimonial.quote}&</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* FAQ */}
      <div className="mt-16">
        <h2 className="text-2xl font-pixel font-bold mb-8 text-center neon-glow">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              question: "Can I switch between billing cycles?",
              answer:
                "Yes, you can switch between monthly and annual billing at any time. Changes will take effect at the start of your next billing cycle.",
            },
            {
              question: "How do EDQ tokens work?",
              answer:
                "EDQ tokens are earned through completing quests and can be used to unlock special content, avatar items, and other perks within the platform.",
            },
            {
              question: "Is there a free trial?",
              answer:
                "Yes! All new users get a 7-day free trial to explore the platform before committing to a subscription.",
            },
            {
              question: "Can I cancel anytime?",
              answer:
                "Absolutely. You can cancel your subscription at any time, and you'll continue to have access until the end of your current billing period.",
            },
          ].map((faq, index) => (
            <div key={index} className="glass-morphic p-6 rounded-lg">
              <h3 className="font-pixel font-bold text-lg mb-2">
                {faq.question}
              </h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-pixel font-bold mb-4 neon-glow">
          Ready to Begin Your Quest?
        </h2>
        <p className="mb-6">
          Join thousands of learners who are leveling up their skills through
          gamified education.
        </p>
        <button className="neon-button px-8 py-3 rounded-xl text-lg">
          Start Your Free Trial
        </button>
      </div>
    </div>
  );
}
