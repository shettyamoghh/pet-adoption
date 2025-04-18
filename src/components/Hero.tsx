"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Hero() {
  return (
    <section className="w-full min-h-[calc(100vh-50px)] flex flex-col justify-center items-center text-center bg-green-50 px-10">
      <h1 className="text-5xl md:text-6xl font-bold text-green-700">
        Find Your Perfect Pet Companion 🐶🐱
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-700 mt-4 max-w-2xl">
        Discover loving pets ready for adoption, and give them a second chance at a happy home!
      </h2>
      <Button onClick={() => signIn()} className="mt-6 px-6 py-6 text-lg bg-green-600 hover:bg-green-700 text-white">
        Get Started
      </Button>
    </section>
  );
}