"use client"
import { plus_jakarta_sans } from "../fonts"
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react';

export default function WeChoseUs () {
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(imageRef.current); // Stop observing after it's visible
            }
          },
          { threshold: 0.1 } // Trigger when 10% of the image is visible
        );
    
        if (imageRef.current) {
          observer.observe(imageRef.current);
        }
    /*
        return () => {
          if (imageRef.current) {
            observer.unobserve(imageRef.current);
          }
        };
    */
      }, []);

    return (
        <main >
            <div className="my-8 md:my-16 relative py-8">
                <div className="absolute z-0 left-0 top-0 bottom-56 rounded-r-6xl w-96 bg-gray-100 overflow-hidden">
                </div>
                <div className="relative z-1 px-10 lg:px-20  md:flex md:justify-between md:space-x-12">
                    
                        <Image 
                            src={"/images/WeChoseUs.png"}
                            ref={imageRef}
                            width={472}
                            height={760}
                            className={`mb-8 md:mb-0 shadow-rd md:w-1/3 lg:w-1/2 ${isVisible ? "animate-fadeInLeft" : "opacity-0"}`}
                            alt="WeChoseUs image"
                        />
                    
                    <div className="flex flex-col  md:w-2/3 justify-between space-y-8 md:space-y-2">
                        <div className="capitalize font-bold text-4xl lg:text-6xl tracking-wide leading-tight lg:leading-tight">
                            <h1 className="">Driving Financial Growth through our expertise and passion</h1>
                        </div>
                        <div>
                            <p className={`${plus_jakarta_sans.className} normal-case text-sm lg:text-base font-normal`}>Li Europan lingues es membres del sam familie. Lor separat 
                                existentie es un myth. Por scientie, musica, sport etc, litot 
                                Europa usa li sam vocabular. Li lingues differe solmen in li 
                                grammatica, li pronunciation e li plu commun vocabules. </p>
                        </div>
                        <div className={`${plus_jakarta_sans.className} flex text-sm lg:text-base font-normal`}>
                            <div className="flex">
                                <div className="mr-4">
                                    <Image 
                                        src={"/images/good.png"}
                                        width={24}
                                        height={24}
                                        alt=""
                                    />
                                </div>
                                <p>Li Europan lingues es membres del sam familie.</p>
                            </div>
                            <div className="flex">
                                <div className="mr-4">
                                    <Image 
                                        src={"/images/good.png"}
                                        width={24}
                                        height={24}
                                        alt=""
                                    />
                                </div>
                                <p>Li Europan lingues es membres del sam familie.</p>
                            </div>
                        </div>
                        <div className={`${plus_jakarta_sans.className} flex text-sm lg:text-base font-normal`}>
                            <div className="flex">
                                <div className="mr-4">
                                    <Image 
                                        src={"/images/good.png"}
                                        width={24}
                                        height={24}
                                        alt=""
                                    />
                                </div>
                                
                                <p>Li Europan lingues es membres del sam familie.</p>
                            </div>
                            <div className="flex">
                                <div className="mr-4">
                                    <Image 
                                        src={"/images/good.png"}
                                        width={24}
                                        height={24}
                                        alt=""
                                    />
                                </div>
                                <p>Li Europan lingues es membres del sam familie.</p>
                            </div>
                        </div>
                        <div className={`${plus_jakarta_sans.className} flex text-sm lg:text-base font-normal`}>
                            <div className="flex">
                                <div className="mr-4">
                                    <Image 
                                        src={"/images/good.png"}
                                        width={24}
                                        height={24}
                                        alt=""
                                    />
                                </div>
                                <p>Li Europan lingues es membres del sam familie.</p>
                            </div>
                            <div className="flex">
                                <div className="mr-4">
                                    <Image 
                                        src={"/images/good.png"}
                                        width={24}
                                        height={24}
                                        alt=""
                                    />
                                </div>
                                <p>Li Europan lingues es membres del sam familie.</p>
                            </div>
                        </div>
                        <div>
                            <div className={`${plus_jakarta_sans.className} shadow-rd p-4 rounded-3xl flex text-sm lg:text-base font-normal capitalize w-fit`}>
                                <div className="mr-2 h-16 w-16 rounded-full bg-gray-100 bg-cover bg-center" style={{ backgroundImage: "url('/images/contactImg.jpg')" }}>
                                    
                                </div>
                                <div className="flex flex-col justify-between">
                                    <p>can call us</p>
                                    <p>+2349033476640</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}