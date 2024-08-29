"use client"
import { useEffect, useRef } from 'react';

export default function OurHistory() {

    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        let scrollAmount = 0;
        const scrollStep = 5; // pixels per step
        const scrollInterval = 100; // milliseconds between steps

        const scrollContent = () => {
        if (scrollContainer) {
            if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                scrollAmount = 0; // Reset scroll position
            } else {
                scrollAmount += scrollStep;
            }
            scrollContainer.scrollTo({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
        };

        const intervalId = setInterval(scrollContent, scrollInterval);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <main className="relative bg-gray-100">
            <div className="px-10 lg:px-20 absolute inset-0 capitalize font-bold flex items-center md:justify-between space-x-8 w-full overflow-x-auto scroll-smooth no-scrollbar" ref={scrollContainerRef}>
                <div className="min-w-52 w-72 shadow-2xl flex flex-col justify-center items-center text-center bg-white px-10 py-4 lg:px-12 lg: py-8 rounded-3xl h-36">
                    <div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl">20+</h1>
                    </div>
                    <div>
                        <p className="text-sm lg:text-lg">years experience</p>
                    </div>
                </div>
                <div className="shadow-2xl flex flex-col min-w-52 w-72 justify-center items-center  h-36 text-center bg-gradient-to-br from-orange-700 to-amber-500 px-10 py-4 lg:px-12 lg:py-8 rounded-3xl text-white">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">5K</h1>
                    <p className="text-sm lg:text-lg">happy clients</p>
                </div>
                <div className="shadow-2xl flex flex-col justify-center items-center min-w-52 w-72 h-36 text-center bg-white px-10 py-4 lg:px-12 lg:py-8 rounded-3xl">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">99%</h1>
                    <p className="text-sm lg:text-lg">successful project</p>
                </div>
                <div className="shadow-2xl flex flex-col justify-center items-center min-w-52 w-72 h-36 text-center bg-white px-10 py-4 lg:px-12 lg:py-8 rounded-3xl">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">520+</h1>
                    <p className="text-sm lg:text-lg">expert staffs</p>
                </div>
            </div>
            <div className="h-72 flex justify-center items-center overflow-hidden">
                <div className="flex justify-center items-center rounded-full border-white border-4" style={{height: "947px", width: "947px"}}>
                    <div className="flex justify-center items-center rounded-full border-white border-4 " style={{height: "731px", width: "731px"}}>
                        <div className="flex justify-center items-center rounded-full border-white border-4 " style={{height: "563px", width: "563px"}}>
                            <div className="h-96 w-96 rounded-full border-white border-4 ">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}