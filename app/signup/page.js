import PasswordInput from '@/components/PasswordInput'
import { poppins } from '/app/fonts'
import Image from 'next/image'

export default function SignUp() {
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
                    <form className="flex space-y-6 flex-col">
                        <input type="text" className="rounded-lg border p-3" placeholder="Fullname" />
                        <input type="text" className="rounded-lg border p-3" placeholder="Enter Email" />
                        <PasswordInput placeholder="enter password"/>
                        <PasswordInput placeholder="confirm password"/>
                        <button className="bg-orange-500 py-2 text-white rounded-lg">Create Account</button>
                    </form>
                    <p className="mt-8 text-xs md:text-sm lg:text-base opacity-70">By continuing, you indicate that you read and agreed to the terms of use.</p>
                </div>
            </div>
        </main>
    )
}