"use client";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { poppins } from "../../app/fonts"
import DashboardNavBar from "@/components/DashboardComponents/DashboardNavBar";

export default function DashboardLayout({ children }) {

  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
      if (!loading && !user) {
          router.push("/signin"); // Redirect if not logged in
      }
  }, [user, loading, router]);

 // if (loading) return <p>Loading...</p>

  return (
      <main className={`${poppins.className} antialiased md:py-8 bg-orange-500 flex flex-col md:flex-row h-screen`}>
        <DashboardNavBar />
        <div className="overflow-auto p-8 md:overflow-hidden drop-shadow-xl md:mr-4 lg:mr-8 md:rounded-xl w-full h-full bg-gray-100">
            {children}
        </div>  
      </main>
  );
}