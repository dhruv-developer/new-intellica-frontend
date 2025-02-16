"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

export default function Register() {
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);

  const handleSendOTP = () => {
    setOtpSent(true);
    setTimer(10); // Start 10-second timer
  };

  // Timer countdown effect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-maroon text-center py-4">
        Register for INTELLICA
      </h1>
      <form className="space-y-6 bg-white shadow-lg rounded-lg p-6">
        <div>
          <Label htmlFor="name" className="text-black">Name</Label>
          <Input id="name" placeholder="Enter your full name" className="caret-black text-black placeholder-black" />
        </div>
        <div>
          <Label htmlFor="email" className="text-black">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email address" className="caret-black text-black placeholder-black" />
        </div>
        <div>
          <Label htmlFor="degree" className="text-black">Degree</Label>
          <Input id="degree" placeholder="Enter your highest degree" className="caret-black text-black placeholder-black" />
        </div>
        <div>
          <Label htmlFor="interest" className="text-black">Interest / Specialization</Label>
          <Input id="interest" placeholder="What do you want to learn?" className="caret-black text-black placeholder-black" />
        </div>
        <div>
          <Label htmlFor="level" className="text-black">Current Level</Label>
          <Select className="text-black bg-white border border-gray-300">
            <option value="" className="text-black">Select your current level</option>
            <option value="beginner" className="text-black">Beginner</option>
            <option value="intermediate" className="text-black">Intermediate</option>
            <option value="advanced" className="text-black">Advanced</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="learning-type" className="text-black">Preferred Learning Type</Label>
          <Select className="text-black bg-white border border-gray-300">
            <option value="" className="text-black">Select your preferred learning type</option>
            <option value="text" className="text-black">Text-based</option>
            <option value="video" className="text-black">Video-based</option>
            <option value="mixed" className="text-black">Mixed</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="budget" className="text-black">Budget</Label>
          <Input id="budget" type="number" placeholder="Enter your budget" className="caret-black text-black placeholder-black" />
        </div>

        {/* OTP Button & Timer */}
        <Button
          onClick={handleSendOTP}
          className="bg-orange-500 text-white hover:bg-maroon hover:text-cream transition-colors"
          disabled={otpSent && timer > 0} // Disable during countdown
        >
          {otpSent ? (timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP") : "Send OTP"}
        </Button>

        {otpSent && (
          <div>
            <Label htmlFor="otp" className="text-black">Enter OTP</Label>
            <Input id="otp" placeholder="Enter the OTP sent to your email" className="caret-black text-black placeholder-black" />
            <Button variant="secondary" className="mt-4 bg-orange-500 text-white hover:bg-maroon hover:text-cream transition-colors">
              Verify OTP
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
