"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/webpanel/Loader";
import { useUsersStore } from "@/store/usersStore";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(null);
  const { initializeAuth } = useUsersStore();

  useEffect(() => {
    const checkAuthentication = async () => {
      setLoading(true); // Start loading

      const Localtoken = localStorage.getItem("token");
      setToken(Localtoken);

      if (!Localtoken) {
        router.push("/webpanel/auth/signin");
        setLoading(false);
        return;
      }

      const checkAuth = await initializeAuth(); // Wait for the promise to resolve

      if (!checkAuth) {
        router.push("/webpanel/auth/signin");
      }

      setLoading(false); // Stop loading
    };

    checkAuthentication(); // Call the async function inside useEffect
  }, [router, initializeAuth]);


  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? <Loader /> : children}
        </div>
      </body>
    </html>
  );
}
