/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { Eye, EyeOff, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useChangePasswordMutation } from "@/redux/features/auth/userApi";
import { logOut } from "@/redux/ReduxFunction";

const SettingsForm = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!email || !oldPassword || !newPassword) {
      setError("Please fill in all fields.");
      return;
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Check password requirements
    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters long.");
      return;
    }

    if (!/[A-Z]/.test(newPassword)) {
      setError("New password must contain at least one uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(newPassword)) {
      setError("New password must contain at least one lowercase letter.");
      return;
    }

    if (!/[0-9]/.test(newPassword)) {
      setError("New password must contain at least one number.");
      return;
    }

    if (!/[^A-Za-z0-9]/.test(newPassword)) {
      setError("New password must contain at least one special character.");
      return;
    }

    if (oldPassword === newPassword) {
      setError("New password must be different from old password.");
      return;
    }

    try {
      const result = await changePassword({ email, oldPassword, newPassword }).unwrap();
      
      if (result?.error) {
        // Handle specific API errors
        if (result.error.includes("incorrect password")) {
          setError("The old password you entered is incorrect.");
        } else if (result.error.includes("user not found")) {
          setError("No account found with this email address.");
        } else {
          setError(result.error);
        }
        return;
      }

      toast.success("Password updated successfully!");

      // Clear auth data
      localStorage.removeItem("accessToken");
      dispatch(logOut());

      // Redirect to login
      router.push("/login");
    } catch (err: any) {
      // Handle different error cases
      if (err?.data?.message) {
        if (err.data.message.includes("Invalid credentials")) {
          setError("The old password you entered is incorrect.");
        } else if (err.data.message.includes("User not found")) {
          setError("No account found with this email address.");
        } else {
          setError(err.data.message);
        }
      } else {
        setError("Failed to update password. Please try again.");
      }
    }
  };

  const getPasswordStrength = (password: string) => {
    if (password.length === 0) return 0;
    // Check for password complexity
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (hasUpper) strength++;
    if (hasLower) strength++;
    if (hasNumbers) strength++;
    if (hasSpecial) strength++;
    
    return Math.min(strength, 5); // Cap at 5
  };

  const passwordStrength = getPasswordStrength(newPassword);

  const getPasswordStrengthMessage = () => {
    if (newPassword.length === 0) return "";
    
    switch (passwordStrength) {
      case 1:
        return "Very weak - must be at least 8 characters";
      case 2:
        return "Weak - add uppercase letters and numbers";
      case 3:
        return "Medium - add special characters";
      case 4:
        return "Strong - good job!";
      case 5:
        return "Very strong password!";
      default:
        return "";
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}

      <div>
        <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="h-12"
        />
      </div>

      <div>
        <Label htmlFor="old-password" className="text-sm font-medium text-gray-700 mb-2 block">
          Old Password
        </Label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Lock className="w-5 h-5 text-gray-400" />
          </div>
          <Input
            id="old-password"
            type={showOldPassword ? "text" : "password"}
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
              setError(""); // Clear error when user types
            }}
            placeholder="************"
            className="pl-10 pr-10 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
          />
          <button
            type="button"
            onClick={() => setShowOldPassword(!showOldPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            {showOldPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
          </button>
        </div>
      </div>

      <div>
        <Label htmlFor="new-password" className="text-sm font-medium text-gray-700 mb-2 block">
          New Password
        </Label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Lock className="w-5 h-5 text-gray-400" />
          </div>
          <Input
            id="new-password"
            type={showNewPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              setError(""); // Clear error when user types
            }}
            placeholder="************"
            className="pl-10 pr-10 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            {showNewPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
          </button>
        </div>

        {newPassword && (
          <div className="mt-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      level <= passwordStrength 
                        ? level <= 2 
                          ? "bg-red-500 text-white" 
                          : level <= 3 
                            ? "bg-yellow-500 text-white" 
                            : "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {level <= passwordStrength ? "✓" : level}
                  </div>
                ))}
              </div>
              <span className="text-xs font-medium">
                {passwordStrength <= 2 ? "Weak" : passwordStrength <= 3 ? "Medium" : "Strong"}
              </span>
            </div>
            <p className={`text-xs ${
              passwordStrength <= 2 ? "text-red-500" : 
              passwordStrength <= 3 ? "text-yellow-600" : 
              "text-green-600"
            }`}>
              {getPasswordStrengthMessage()}
            </p>
            <div className="mt-2 text-xs text-gray-500">
              <p>Password must contain:</p>
              <ul className="list-disc pl-5">
                <li className={newPassword.length >= 8 ? "text-green-500" : ""}>At least 8 characters</li>
                <li className={/[A-Z]/.test(newPassword) ? "text-green-500" : ""}>One uppercase letter</li>
                <li className={/[a-z]/.test(newPassword) ? "text-green-500" : ""}>One lowercase letter</li>
                <li className={/[0-9]/.test(newPassword) ? "text-green-500" : ""}>One number</li>
                <li className={/[^A-Za-z0-9]/.test(newPassword) ? "text-green-500" : ""}>One special character</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-4 pt-4">
        <Button
          type="submit"
          disabled={isLoading}
          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white h-12 rounded-xl font-medium"
        >
          {isLoading ? "Updating..." : "Update Password"}
        </Button>
        <Button
          type="button"
          variant="outline"
          className="flex-1 h-12 rounded-xl font-medium border-gray-200 text-gray-600 hover:bg-gray-50"
          onClick={() => {
            setEmail("");
            setOldPassword("");
            setNewPassword("");
            setError("");
          }}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default SettingsForm;