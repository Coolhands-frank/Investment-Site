"use client";
import { useState, useEffect } from "react";
import { signIn, getSession } from "../../lib/auth"; 
import { useRouter } from "next/navigation";
import PasswordInput from '@/components/PasswordInput';
import { poppins } from '/app/fonts';
import Image from 'next/image';

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)
    const router = useRouter();

 {/*   useEffect(() => {
        const checkUser = async () => {
          const session = await getSession();
    
          if (session?.user) {
            setMessage("✅ Email verified! Redirecting...");
            setTimeout(() => router.push("/dashboard"), 2000);
          }
        };

        checkUser();
      }, [router]); */}

    useEffect(() => {
        const checkSession = async () => {
            const session = await getSession();
            if (session?.user) {
                router.push("/dashboard"); // Redirect if already signed in
            }
        };
        checkSession();
    }, [router]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            await signIn(email, password);
            router.push("/dashboard")
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false)
        }
    };

    return (
        <main className={`${poppins.className} text-gray-800 bg-gray-100 flex flex-row`}>
            
            <div className="p-6 w-full flex flex-col items-center h-screen">
                <p className="text-sm md:text-base self-end">Dont have an account? <span className="text-orange-700" ><a href="/signup">Sign Up!</a></span></p>
                <div className="flex flex-col items-center justify-center h-full">
                    <h2 className="text-xl lg:text-2xl font-bold">Welcome Back</h2>
                    <p className="mt-2 mb-6 opacity-70">Login into your account</p>

                    {error && <p className="mb-2 text-red-500">{error}</p>}

                    <form onSubmit={handleLogin} className="flex flex-col">

                        <input 
                            type="email" 
                            name="email"
                            value={email}
                            className="rounded-lg border mb-6 p-3" 
                            placeholder="Email" 
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <PasswordInput 
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p className="text-red-600 text-xs md:text-sm mt-2 opacity-70">Recover Password</p>
                        <button type="submit" className="py-2 text-black border border-black rounded-lg mt-6">{loading ? "Signing in" : "log in"}</button>
                    </form>
                </div>
            </div>

            <div className="hidden lg:block relative w-2/3" >
                <Image
                    src="/images/signin-image.png" 
                    alt="signin image"
                    layout="fill" 
                    objectFit="cover" 
                    priority
                />  
            </div>
        </main>
    )
}