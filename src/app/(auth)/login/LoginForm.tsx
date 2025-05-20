"use client";

import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import ShowToastify from "@/utils/ShowToastify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useLoginUserMutation } from "@/redux/features/auth/userApi";
import { AppDispatch } from "@/redux/store";
import { logOut, setUser } from "@/redux/ReduxFunction";

type DecodedToken = {
  name: string;
  role: string;
  iat?: number;
  exp?: number;
};

const LoginForm = () => {
  const [logIn, setLogIn] = useState("Login");
  const [showPassword, setShowPassword] = useState(false);
  const [loginFun] = useLoginUserMutation();
  const dispatch = useDispatch<AppDispatch>();
  const route = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setLogIn("Loading...");

    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
      ShowToastify({ error: "Email and password are required." });
      setLogIn("Login");
      return;
    }

    const { data, error } = await loginFun({ email, password });

    if (error || !data?.data?.token) {
      ShowToastify({ error: "Check your email or password." });
      setLogIn("Login");
      return;
    }

    let userInfo: DecodedToken;

    try {
      userInfo = jwtDecode<DecodedToken>(data.data.token);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      ShowToastify({ error: "Invalid token received." });
      setLogIn("Login");
      return;
    }

    if (userInfo?.role !== "SUPER_ADMIN") {
      ShowToastify({ error: "You are not authorized." });
      dispatch(logOut());
      setLogIn("Login");
      return;
    }

    dispatch(setUser({ name: userInfo.name, role: userInfo.role }));
    Cookies.set("token", data.data.token);
    route.push("/");
  };

  return (
    <form
      onSubmit={handleLogin}
      className="mt-8 space-y-6"
      method="POST"
    >
      <div className="space-y-4 rounded-md">
        <div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <div className="relative mt-5">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute right-3 top-3">
              <button
                type="button"
                className="text-xl"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <Link href="/forgetPassword" className="text-gray-600 hover:text-blue-600">
          Forgot password?
        </Link>
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {logIn}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;


// <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <div>
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <div className="text-center text-sm">
//         <a href="#" className="text-gray-600 hover:text-blue-600">
//           Forgot password? <span className="text-gray-400">Reset Request</span>
//         </a>
//       </div>
//       <button
//         type="submit"
//         disabled={isLoading}
//         className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//       >
//         {isLoading ? "Logging in..." : "Login"}
//       </button>
//     </form>
