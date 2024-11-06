"use client";

import React, { useState } from "react";
import { useUsersStore } from "@/store/usersStore";
import { useRouter } from "next/navigation";

const SignIn: React.FC = () => {
  const router = useRouter();
  const { login } = useUsersStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    router.push("/webpanel")
  };

  return (
    <div className="grid grid-cols-1 mt-40 2xl:grid-cols-6 xl:grid-cols-8 lg:grid-cols-10 md:grid-cols-10 mx-10">
      <div className="col-span-1 2xl:col-span-2 2xl:col-start-3 xl:col-span-4 xl:col-start-3 lg:col-start-2 lg:col-span-8 md:col-start-2 md:col-span-8">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Sign In to Webpanel
            </h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-white">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="6+ Characters, 1 Capital letter"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <input
                type="submit"
                value="Sign In"
                className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
