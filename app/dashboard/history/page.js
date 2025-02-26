import { useUser } from "@/context/UserContext"

export default function History() {
    return (
        <div className="mx-2 lg:mx-8 pt-8 lg:pt-10 pb-4 lg:pb-8 box-border h-full rounded-lg">
            <div className="bg-white shadow-lg h-full rounded-md">
                <div className="rounded-t-md p-2 lg:p-4 w-full flex justify-between bg-amber-300 font-semibold text-base lg:text-xl">
                    <h2 className="w-1/3 text-center ">Type</h2>
                    <h2 className="w-1/3 text-center ">Amount</h2>
                    <h2 className="w-1/3 text-center ">Date</h2>
                </div>

            </div>
        </div>
    )
}