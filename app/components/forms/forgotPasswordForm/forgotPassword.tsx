"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-2">
          Forgot Password?
        </h1>
        <p className="text-center text-muted-foreground mb-6">
          Enter your Email to receive a code
        </p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Enter Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#FFD43B] hover:bg-[#FFC107] text-black font-semibold py-2 rounded-md"
            >
              Reset Password
            </Button>
          </form>
          <div className="text-center mt-4">
            <a
              href="#"
              className="text-sm text-[#00222E] text-blue-600 hover:underline"
            >
              Back to Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
