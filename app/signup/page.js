"use client";
import { useEffect, useState } from "react";
import { signUp } from "../../lib/auth";
import { useRouter } from "next/navigation";
import { getSession } from "../../lib/auth";
import PasswordInput from '@/components/PasswordInput';
import { poppins } from '/app/fonts';
import Image from 'next/image';
import { getUser } from "../../lib/auth";


export default function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });
    const [error, setError] = useState(null);
    const [passwordError, setPasswordError] = useState("");
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [success, setSuccess] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        setSuccess("")
        const checkUser = async () => {
          const session = await getSession();
        //  const authUser = await getUser();
    
          if (session?.user) {
            setMessage("✅ Email verified! Redirecting...");
            setTimeout(() => router.push("/dashboard"), 2000);
          }
        };

        checkUser();
    }, [router]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true)
        setError("");
        setSuccess("");
        // Check if passwords match
        if (formData.password !== confirmPassword) {
            setPasswordError("Passwords do not match!");
            return;
        }
        setPasswordError("");
        console.log("Sign-up successful");

        //const trimedEmail = formData.email.trim().toLowerCase();
        try {
          await signUp(formData);
          setSuccess("sign up successul!✅ Check your email to verify your account!");
          //router.push("/signin");
        } catch (err) {
          setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);

        if (formData.password && value !== formData.password) {
          setPasswordError("Passwords do not match!");
        } else {
          setPasswordError("");
        }
      };

    return (
        <main className={`${poppins.className} text-gray-800 flex flex-row bg-gray-100`}>
            <div className="hidden lg:block relative w-2/3" >
                <Image
                    src="/images/signup-image.png" 
                    alt="signin image"
                    layout="fill" 
                    objectFit="cover" 
                    priority
                />  
            </div>
            <div className="p-6 w-full flex flex-col items-center h-screen">
                <p className="text-sm md:text-base self-end">Have an account? <span className="text-orange-700" ><a href="/signin">Sign In!</a></span></p>
                <div className="flex flex-col items-center justify-center h-full">
                    <h2 className="text-xl lg:text-2xl font-bold">Get Started</h2>
                    <p className="mt-2 mb-6 opacity-70">Getting started is easy</p>
                    
                    {error && <p className="mb-2 text-red-500">{error}</p>}
                    {success && <p className="mb-2 text-red-500">{success}</p>}
                    {message && <p className="mb-2 text-green-500">{message}</p>}

                    <form onSubmit={handleSignUp} className="flex space-y-6 flex-col">
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            className="rounded-lg border p-3" 
                            placeholder="Fullname"
                            onChange={handleChange}
                            required 
                        />

                        <input 
                            type="email" 
                            name="email"
                            value={formData.email} 
                            onChange={handleChange}
                            className="rounded-lg border p-3" 
                            placeholder="Enter Email" 
                            required
                        />

                        <PasswordInput 
                            placeholder="enter password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />

                        <PasswordInput 
                            placeholder="confirm password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />

                        {passwordError && <p className="text-red-500">{passwordError}</p>}

                        <button type="submit" className="bg-orange-500 py-2 text-white rounded-lg">
                            {loading ? "Signing up..." : "Create Account"}
                        </button>
                    </form>
                    <p className="mt-8 text-xs md:text-sm lg:text-base opacity-70">By continuing, you indicate that you read and agreed to the terms of use.</p>
                </div>
            </div>
        </main>
    )
}