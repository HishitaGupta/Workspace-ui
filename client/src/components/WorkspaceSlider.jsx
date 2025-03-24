// import React, { useRef, useEffect } from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css"; // Core Swiper styles
// import "swiper/css/navigation"; // Navigation module styles
// import heroImage from "../assets/hero-image.jpeg"

// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'; // Ensure proper import




// const WorkspaceSlider = () => {
//     const categories = [
//         {
//             title: "Private Workspace New",
//             description:
//                 "Offering State-of-the-Art Private Workspaces Designed for Optimal Productivity and Comfort.",
//             image: heroImage,
//             discount: "🎉 Discount 50% for member",
//         },
//         {
//             title: "Workspace Green",
//             description:
//                 "Combining Functionality and Eco-Friendly Sustainable Workspace Environments.",
//             image: heroImage,
//         },
//     ];

//     const prevRef = useRef(null);
//     const nextRef = useRef(null);

//     useEffect(() => {
//         const swiperInstance = document.querySelector('.swiper').swiper;
//         if (swiperInstance) {
//             swiperInstance.params.navigation.prevEl = prevRef.current;
//             swiperInstance.params.navigation.nextEl = nextRef.current;
//             swiperInstance.navigation.init();
//             swiperInstance.navigation.update();
//         }
//     }, []);

//     return (

//         <div className="w-full min-h-screen  py-12 flex flex-col items-center justify-center gap-8 relative px-4 sm:px-[5vw] md:px-[4vw] lg:px-[4vw] bg-white poppins ">
//             <div className="w-full flex flex-wrap items-center justify-between ">
//                 <div className="mb-8 flex flex-col gap-2 w-full lg:w-1/2 ">
//                     <h1 className="text-2xl md:text-5xl  font-medium"  >Popular Workspaces</h1>
//                     <p className="text-gray-600 w-full lg:w-3/4 text-sm md:text-base mt-2 ">
//                         Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.
//                     </p>
//                 </div>
//                 <div className="flex justify-start sm:justify-start lg:justify-end  items-center gap-4 w-full lg:w-1/2">
//                     <button
//                         ref={prevRef}
//                         className="prev-arrow bg-black text-white group hover:text-black hover:bg-white transition-transform duration-300 p-3 md:p-4 rounded-full ease-in-out teko border border-black text-sm md:text-xl tracking-wider cursor-pointer"
//                         aria-label="Previous"
//                     >
//                         <FaArrowLeft />
//                     </button>
//                     <button
//                         ref={nextRef}
//                         className="next-arrow bg-black text-white group hover:text-black hover:bg-white transition-transform duration-300 p-3 md:p-4 rounded-full ease-in-out teko border border-black text-sm md:text-xl tracking-wider cursor-pointer"
//                         aria-label="Next"
//                     >
//                         <FaArrowRight />
//                     </button>
//                 </div>
//             </div>

//             <Swiper
//                 modules={[Navigation]}
//                 loop={true}
//                 navigation={{
//                     prevEl: prevRef.current,
//                     nextEl: nextRef.current,
//                 }}
//                 spaceBetween={40} // Ensure proper spacing
//                 slidesPerView={1.5}
//                 breakpoints={{
//                     // 0: { slidesPerView: 2, spaceBetween: 10 }, // 2 slides on phone
//                     // 640: { slidesPerView: 2, spaceBetween: 10 }, // Still 2 slides
//                     // 768: { slidesPerView: 2, spaceBetween: 20 }, // Tablets: 2 slides
//                     // 1024: { slidesPerView: 2, spaceBetween: 30 }, // Desktop: 4 slides
//                     // 1280: { slidesPerView: 2, spaceBetween: 40 }, // Large screens: 6 slides
//                     640: { slidesPerView: 1.5 },
//                     1024: { slidesPerView: 1.5 },
//                 }}
//                 className="w-full "
//             >
//                 {categories.map((category, index) => (
//                     <SwiperSlide key={index} className="flex justify-center ">
//                         <div className="relative flex flex-col items-center  rounded-lg" >
//                                   <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/90 rounded-xl via-transparent to-black/50 w-full "></div>

//                             <div className="w-full max-h-[60vh] overflow-hidden shadow-md rounded-xl">
//                                 <img
//                                     src={category.image}
//                                     alt={category.title}
//                                     className="w-full h-full object-cover hover:scale-110 transition-all transfrom duration-300 ease-in-out"
//                                 />
//                             </div>
//                             <div className='absolute left-0 bottom-4 w-1/2 mt-4 rounded-xl border border-white/30 bg-white/30 backdrop-blur-md p-4 mx-4 flex flex-col gap-2'>
//                                 <h1 className='text-sm md:text-3xl  text-white '>{category.title}</h1>
//                                 <h3 className=" text-sm md:text-sm  text-white ">{category.description}</h3>
//                             </div>



//                             {category.discount ? <div className='absolute right-0 top-00 mt-4 rounded-xl border border-white/30 bg-white/30 backdrop-blur-md p-4 mx-4 flex flex-col gap-2'> <h3 className=" text-sm md:text-sm  text-white ">{category.discount}</h3></div> : " "}




//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>

//     );
// };

// export default WorkspaceSlider;


import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import heroImage from "../assets/hero-image.jpeg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { gsap } from "gsap";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const WorkspaceSlider = () => {
    const categories = [
        {
            title: "Private Office",
            description: "A fully serviced private office space designed for focused work and privacy, ideal for teams and individuals.",
            image: "https://www.collaborative-office.com/wp-content/uploads/2017/10/AMQ_ACTIV-Pro3.jpg",
            discount: "🎉 Discount 50% for members",
        },
        {
            title: "Flexible Workspace",
            description: "A dynamic and adaptable workspace offering hot desks, shared areas, and collaborative zones.",
            image: "https://img.edilportale.com/product-thumbs/b_WINI_WINEA-STARTUP-2_h2d2eqRyn1.jpeg",
            discount: "🔥 First month free trial",
        },
        {
            title: "Virtual Office",
            description: "Get a prestigious business address, mail handling, and phone services without a physical office.",
            image: "https://vibe.us/blog/how-to-build-a-collaborative-workspace-and-why-you-should/cover.jpg",
            discount: "🚀 Special pricing for startups",
        },
        {
            title: "Meeting Rooms",
            description: "Book modern, well-equipped meeting rooms for your business discussions and presentations.",
            image: "https://images.squarespace-cdn.com/content/v1/5877fcf8ebbd1a0e70bf993e/1518123377433-C4EMS0KB4Y8XI8LPW4FB/People+chatting+in+the+lounge+area+of+a+collaborative+workspace",
            discount: "💼 Hourly and daily rates available",
        },
        {
            title: "Shared Workspace",
            description: "Open-plan coworking spaces designed for networking and productivity, with high-speed internet and amenities.",
            image: "https://www.wework.com/ideas/wp-content/uploads/sites/4/2017/06/CollabFacebook.jpg",
        },
        {
            title: "Event Space",
            description: "Host your workshops, seminars, and corporate events in our fully equipped event spaces.",
            image: "https://www.movespacelondon.com/wp-content/uploads/2019/12/Blackfriars-Road-Shared-Lounge.jpg",
        },
    ];
    
    

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const cursorRef = useRef(null);
    const cursorTextRef = useRef(null);
    const cursorOuterRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const mousePosition = useRef({ x: 0, y: 0 });
    
    // Initialize swiper navigation
    useEffect(() => {
        const swiperInstance = document.querySelector(".swiper")?.swiper;
        if (swiperInstance) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
        
        // Set initial cursor state
        if (cursorRef.current) {
            gsap.set(cursorRef.current, {
                xPercent: -50,
                yPercent: -50,
                opacity: 0,
                scale: 0
            });
        }
        
        if (cursorOuterRef.current) {
            gsap.set(cursorOuterRef.current, {
                xPercent: -50,
                yPercent: -50,
                opacity: 0,
                scale: 0,
                rotation: 0
            });
        }
    }, []);

    // GSAP cursor animation
    useEffect(() => {
        if (!cursorRef.current) return;
        
        const cursor = cursorRef.current;
        const cursorOuter = cursorOuterRef.current;
        
        // Handle mouse movement with GSAP
        const onMouseMove = (e) => {
            mousePosition.current = {
                x: e.clientX,
                y: e.clientY
            };
        };
        
        // Add event listener
        window.addEventListener("mousemove", onMouseMove);
        
        // Animation loop
        const render = () => {
            gsap.to(cursor, {
                duration: 0.5,
                ease: "power3.out",
                x: mousePosition.current.x,
                y: mousePosition.current.y
            });
            
            gsap.to(cursorOuter, {
                duration: 0.8,
                ease: "power2.out",
                x: mousePosition.current.x,
                y: mousePosition.current.y
            });
            
            requestAnimationFrame(render);
        };
        
        const animationFrame = requestAnimationFrame(render);
        
        // Cleanup
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    // Handle cursor hover effects
    const handleMouseEnter = () => {
        setIsHovering(true);
        
        // Scale up and fade in both cursors
        gsap.to(cursorRef.current, {
            duration: 0.4,
            scale: 1,
            opacity: 1,
            ease: "power2.out"
        });
        
        gsap.to(cursorOuterRef.current, {
            duration: 0.4,
            scale: 1.2,
            opacity: 0.6,
            ease: "power2.out"
        });
        
        // Start rotating the outer cursor
        gsap.to(cursorOuterRef.current, {
            duration: 8,
            rotation: 360,
            repeat: -1,
            ease: "none"
        });
        
        // Pulse animation for text
        gsap.to(cursorTextRef.current, {
            duration: 0.8,
            scale: 1.1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        
        // Scale down and fade out both cursors
        gsap.to(cursorRef.current, {
            duration: 0.4,
            scale: 0,
            opacity: 0,
            ease: "power2.in"
        });
        
        gsap.to(cursorOuterRef.current, {
            duration: 0.4,
            scale: 0,
            opacity: 0,
            ease: "power2.in",
            rotation: 0
        });
        
        // Stop text animation
        gsap.killTweensOf(cursorTextRef.current);
    };

    const handleMouseDown = () => {
        // Squish effect on click
        gsap.to(cursorRef.current, {
            duration: 0.2,
            scale: 0.9,
            ease: "power2.out"
        });
        
        gsap.to(cursorOuterRef.current, {
            duration: 0.2,
            scale: 1,
            ease: "power2.out"
        });
    };

    const handleMouseUp = () => {
        // Return to hover state
        gsap.to(cursorRef.current, {
            duration: 0.2,
            scale: 1,
            ease: "elastic.out(1, 0.3)"
        });
        
        gsap.to(cursorOuterRef.current, {
            duration: 0.2,
            scale: 1.2,
            ease: "elastic.out(1, 0.3)"
        });
    };

    return (
        <div 
            className="w-full min-h-screen py-12 flex flex-col items-center justify-center gap-8 relative px-4 sm:px-[5vw] md:px-[4vw] lg:px-[4vw] bg-white poppins"
        >
            <div className="w-full flex flex-wrap items-center justify-between">
                <div className="mb-8 flex flex-col gap-2 w-full lg:w-1/2">
                    <h1 className="text-2xl md:text-5xl font-medium">Popular Workspaces</h1>
                    <p className="text-gray-600 w-full lg:w-3/4 text-sm md:text-base mt-2">
                        Here are lots of interesting destinations to visit, but don't be confused—they're already grouped by category.
                    </p>
                </div>
                <div className="flex justify-start sm:justify-start lg:justify-end items-center gap-4 w-full lg:w-1/2">
                    <button 
                        ref={prevRef} 
                        className="prev-arrow bg-black text-white group hover:text-black hover:bg-white transition-transform duration-300 p-3 md:p-4 rounded-full ease-in-out border border-black text-sm md:text-xl tracking-wider cursor-pointer"
                    >
                        <FaArrowLeft />
                    </button>
                    <button 
                        ref={nextRef} 
                        className="next-arrow bg-black text-white group hover:text-black hover:bg-white transition-transform duration-300 p-3 md:p-4 rounded-full ease-in-out border border-black text-sm md:text-xl tracking-wider cursor-pointer"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            <Swiper 
                modules={[Navigation]} 
                loop={true} 
                navigation={{ 
                    prevEl: prevRef.current, 
                    nextEl: nextRef.current 
                }} 
                spaceBetween={40} 
                slidesPerView={1.5} 
                breakpoints={{ 
                    640: { slidesPerView: 1.5 }, 
                    1024: { slidesPerView: 1.5 } 
                }} 
                className="w-full"
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div 
                            className="relative flex flex-col items-center rounded-lg cursor-none" 
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                        >
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/90 rounded-xl via-transparent to-black/50 w-full"></div>

                            <div className="w-full max-h-[60vh] overflow-hidden shadow-md rounded-xl">
                                <img 
                                    src={category.image} 
                                    alt={category.title} 
                                    className="w-full h-full object-cover hover:scale-110 transition-all transform duration-300 ease-in-out" 
                                />
                            </div>
                            <div className="absolute left-0 bottom-4 w-1/2 mt-4 rounded-xl border border-black/10 bg-black/60 backdrop-blur-lg p-4 mx-4 flex flex-col gap-2">
                                <h1 className="text-sm md:text-3xl text-white">{category.title}</h1>
                                <h3 className="text-sm md:text-sm text-white">{category.description}</h3>
                            </div>

                            {category.discount && (
                                <div className="absolute right-0 top-0 mt-4 rounded-xl border border-black/10 bg-black/70 backdrop-blur-lg p-4 mx-4 flex flex-col gap-2">
                                    <h3 className="text-sm md:text-sm text-white">{category.discount}</h3>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* GSAP Animated Cursors */}
            {/* Outer ring cursor */}
            <div
                ref={cursorOuterRef}
                className="fixed w-18 h-18 rounded-full border-2 border-white pointer-events-none z-40"
                style={{ top: 0, left: 0 }}
            ></div>
            
            {/* Main cursor */}
            <div
                ref={cursorRef}
                className="fixed flex items-center justify-center w-16 h-16 bg-white/50 backdrop-blur-lg border-white border rounded-full shadow-lg pointer-events-none z-50"
                style={{ top: 0, left: 0 }}
            >
                <div 
                    ref={cursorTextRef} 
                    className="text-[12px] font-medium  text-center"
                >
                    View Detail
                </div>
            </div>
            
            {/* Hide default cursor */}
            <style jsx global>{`
                ${isHovering ? `
                .cursor-none {
                    cursor: none !important;
                }
                ` : ''}
            `}</style>

            <Button className="mt-4">
                    See More <ArrowRight className="ml-2" size={18} />
            </Button>
        </div>
    );
};

export default WorkspaceSlider;