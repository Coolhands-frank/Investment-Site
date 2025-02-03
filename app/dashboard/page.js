import Image from "next/image"

export default function Dashboard() {
    return (
            <div className="gap-3 md:h-full w-full flex flex-col items-center md:justify-center">
                <div className="flex flex-col md:flex-row gap-3 text-gray-600 w-full">
                    <div className=" py-8 md:py-0 rounded-xl md:w-1/3 md:max-w-xs bg-white flex flex-col shadow-md items-center justify-center">
                        <Image
                            src={"/images/Bank.png"}
                            width={67}
                            height={67}
                            alt="database icon"
                            className="mr-2 " 
                            priority
                        />
                        <h2 className="text-3xl md:text-4xl font-bold mt-3 md:mt-6">$10,000</h2>
                        <p className="text-xs md:text-sm font-medium">Total Investment</p>
                    </div>
                    <div className="rounded-xl bg-white shadow-md py-8 md:w-2/3 md:max-w-2xl flex flex-col items-center justify-center">
                        <div className=" flex flex-row justify-center items-center">
                            <Image
                                src={"/images/Database.png"}
                                width={67}
                                height={67}
                                alt="database icon"
                                className="mr-3" 
                                priority
                            />
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-2xl md:text-3xl font-medium">$5,000</p>
                                <p className="text-xs md:text-sm font-normal">Active Investment</p>
                            </div>
                        </div>

                        <hr className="w-2/3 border my-2 md:my-4"/>

                        <div className="flex flex-row justify-center items-center">
                            <Image
                                src={"/images/timetopay.png"}
                                width={67}
                                height={67}
                                alt="time icon"
                                className="mr-3 " 
                                priority 
                            />
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-2xl md:text-3xl font-medium">$2,000</p>
                                <p className="text-xs md:text-sm font-normal">Last Investment</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-row gap-3 text-gray-600">
                    <div className="py-8 rounded-xl md:w-1/3 md:max-w-xs bg-white flex flex-col shadow-md items-center justify-center">
                        <Image
                            src={"/images/pinpad.png"}
                            width={67}
                            height={67}
                            alt="database icon"
                            className="mr-2 " 
                            priority
                        />
                        <h2 className="text-3xl md:text-4xl font-bold mt-3 md:mt-6">$5,000</h2>
                        <p className="text-xs md:text-sm font-medium">Total Withdraw</p>
                    </div>
                    <div className="rounded-xl bg-white shadow-md py-8 md:w-2/3 md:max-w-2xl flex flex-col items-center justify-center">
                        <div className="flex flex-row justify-center items-center">
                            <Image
                                src={"/images/hourglass.png"}
                                width={67}
                                height={67}
                                alt="hour glass"
                                className="mr-3" 
                                priority
                            />
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-2xl md:text-3xl font-medium">$5,000</p>
                                <p className="text-xs md:text-sm font-normal">Pending Withdraw</p>
                            </div>
                        </div>

                        <hr className="w-2/3 border my-2 md:my-4"/>

                        <div className="flex flex-row justify-center items-center">
                            <Image
                                src={"/images/timetopay.png"}
                                width={67}
                                height={67}
                                alt="time icon"
                                className="mr-3 " 
                                priority 
                            />
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-2xl md:text-3xl font-medium">$2,000</p>
                                <p className="text-xs md:text-sm font-normal">Last Withdraw</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}