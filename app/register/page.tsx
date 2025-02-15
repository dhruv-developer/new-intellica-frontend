"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"

export default function Register() {
  const [otpSent, setOtpSent] = useState(false)

  const handleSendOTP = () => {
    setOtpSent(true)
  }

  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-maroon mb-8 text-center">Register for INTELLICA</h1>
      <form className="space-y-6 bg-white shadow-lg rounded-lg p-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your full name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email address" />
        </div>
        <div>
          <Label htmlFor="degree">Degree</Label>
          <Input id="degree" placeholder="Enter your highest degree" />
        </div>
        <div>
          <Label htmlFor="interest">Interest / Specialization</Label>
          <Input id="interest" placeholder="What do you want to learn?" />
        </div>
        <div>
          <Label htmlFor="level">Current Level</Label>
          <Select>
            <option value="">Select your current level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="learning-type">Preferred Learning Type</Label>
          <Select>
            <option value="">Select your preferred learning type</option>
            <option value="text">Text-based</option>
            <option value="video">Video-based</option>
            <option value="mixed">Mixed</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="budget">Budget</Label>
          <Input id="budget" type="number" placeholder="Enter your budget" />
        </div>
        <Button onClick={handleSendOTP}>
          {otpSent ? "Resend OTP" : "Send OTP"}
        </Button>
        {otpSent && (
          <div>
            <Label htmlFor="otp">Enter OTP</Label>
            <Input id="otp" placeholder="Enter the OTP sent to your email" />
            <Button variant="secondary" className="mt-4">
              Verify OTP
            </Button>
          </div>
        )}
      </form>
    </div>
  )
}
