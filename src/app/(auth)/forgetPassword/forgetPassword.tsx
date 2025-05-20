"use client";

import ShowToastify from "@/utils/ShowToastify";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation"; // <-- import useRouter
import { useSendOtpMutation } from "@/redux/features/auth/userApi";

interface Props {
  setStep: (val: number) => void;
  setEmail: (email: string) => void;
}

const ForgetPassword = ({ setStep, setEmail }: Props) => {
  const [forgetEmail, setForgetEmail] = useState<string>();
  console.log(forgetEmail)
  const [sendOtp] = useSendOtpMutation();
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // <-- initialize router

  const handleSendOtp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email") as string;

    if (!email) return;

    setLoading(true);
    const res = await sendOtp({ email });
    if (res?.data) {
      setForgetEmail(email)
    }
    console.log(res)

    if (res?.error) {
      ShowToastify({ error: "Failed to send OTP" });
    } else {
      ShowToastify({ success: "OTP sent to your email!" });
      setEmail(email);
      setStep(2); // optional: if you're using step UI
      router.push(`/otpVerification?verify-email=${email}`)
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSendOtp} className="space-y-4">
      <label className="text-sm">Email</label>
      <input
        name="email"
        type="email"
        required
        placeholder="example@email.com"
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {loading ? "Sending..." : "Send OTP"}
      </button>
    </form>
  );
};

export default ForgetPassword;
