/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { useVerifyOtpMutation } from "@/redux/features/auth/userApi";

export default function OtpVerificationPage() {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  const verifyEmail = useSearchParams().get("verify-email");
  console.log(verifyEmail);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 4);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    if (!/^\d+$/.test(pastedData)) return;
    const otpArray = pastedData.slice(0, 4).split("");
    const newOtp = [...otp];
    otpArray.forEach((digit, index) => {
      if (index < 4) {
        newOtp[index] = digit;
      }
    });
    setOtp(newOtp);
    const lastFilledIndex = Math.min(otpArray.length - 1, 3);
    if (lastFilledIndex < 4) {
      inputRefs.current[lastFilledIndex + 1]?.focus();
    } else {
      inputRefs.current[3]?.focus();
    }
  };

  const handleSubmit = async () => {
    const otpString = otp.join("");
    try {
      const payload: any = { email: verifyEmail, otp: Number(otpString) };
      await verifyOtp(payload).unwrap();
      toast.success("OTP verified successfully!");
      router.push(`/newPassword?new-password=${verifyEmail}`);
    } catch (err: any) {
      toast.error(err?.data?.message || "OTP verification failed!");
      console.error("OTP Error:", err);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md p-6">
        <h1 className="text-center text-2xl font-semibold text-blue-500 mb-6">
          OTP Verification
        </h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          We&apos;ve sent a code reset to: {verifyEmail}
        </p>
        <div className="flex justify-center gap-2 mb-8">
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
        <Button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isLoading ? "Verifying..." : "Next"}
        </Button>
      </div>
    </div>
  );
}
