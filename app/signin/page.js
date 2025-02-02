import PasswordInput from '@/components/PasswordInput'
import { poppins } from '/app/fonts'
import Image from 'next/image'

export default function SignIn() {
    return (
        <main className={`${poppins.className} text-gray-800 bg-gray-100 flex flex-row`}>
            
            <div className="p-6 w-full flex flex-col items-center h-screen">
                <p className="text-sm md:text-base self-end">Dont have an account? <span className="text-orange-700" ><a href="/signup">Sign Up!</a></span></p>
                <div className="flex flex-col items-center justify-center h-full">
                    <h2 className="text-xl lg:text-2xl font-bold">Welcome Back</h2>
                    <p className="mt-2 mb-6 opacity-70">Login into your account</p>
                    <form className="flex flex-col">
                        <input type="text" className="rounded-lg border mb-6 p-3" placeholder="Email" />
                        <PasswordInput placeholder="Password"/>
                        <p className="text-red-600 text-xs md:text-sm mt-2 opacity-70">Recover Password</p>
                        <button className="py-2 text-black border border-black rounded-lg mt-6">log in</button>
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