import Image from "next/image";

import { ToastContainer } from "react-toastify";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-blue-50">
      <div className="w-full max-w-md p-8">
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="Logo" width={80} height={80} priority />
        </div>
        <LoginForm />
      </div>
      <ToastContainer />
    </main>
  );
}
