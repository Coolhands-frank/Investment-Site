"use client";

import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getSession } from "../../lib/auth";

export default function AuthWrapper({ children }) {
//  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
        const session = await getSession();
        if (!session?.user) {
            router.push("/signin"); // Redirect if not signed in
        }
    };
    checkSession();
  }, [router]);

  return <>{children}</>;
}
