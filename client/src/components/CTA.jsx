// import React from "react";
// import WorkspaceSearch from "./WorkspaceSearch";

// const CTA = () => {
//   return (
//     <section className="poppins relative w-full  bg-cover bg-center flex flex-col px-10 sm:px-[2vw] md:px-[4vw] bg-white py-[2vw] border border-white h-screen justify-center items-center overflow-hidden"
//       style={{ backgroundImage: "url('https://www.dgicommunications.com/wp-content/uploads/2022/08/Design_a_Flexible_Workspace.jpg')" }}>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>
//       <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-transparent to-black/90 w-full "></div>
//       <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-transparent to-black/90 w-full "></div>

//       <div className="absolute  w-full   flex justify-center items-center">
//         <div className="relative flex flex-col justify-between items-center">
//           <h1 className="relative text-white text-[300px]   tracking-tighter flex justify-center items-center leading-tight text-center">FINSPACE</h1>
//           <div className="absolute flex bottom-10 justify-between w-full px-4 text-xl text-white ">
//             <h2>Best Website</h2>
//             <h2>To Find WorkSpace</h2>
//           </div>
//         </div>

//       </div>

      



//     </section>
//   );
// };

// export default CTA;


import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      [leftImageRef.current],
      { y: 50, rotate: -10, opacity: 0 },
      {
        y: 0,
        rotate: 10,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // Animation starts when 80% of the section is visible
          toggleActions: "restart none none none", // Play animation once
        },
      }
    );
    gsap.fromTo(
        [ rightImageRef.current],
        { y: 50, rotate: 10, opacity: 0 },
        {
          y: 0,
          rotate: -10,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Animation starts when 80% of the section is visible
            toggleActions: "restart none none none", // Play animation once
          },
        }
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 md:px-20 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.dgicommunications.com/wp-content/uploads/2022/08/Design_a_Flexible_Workspace.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Floating Images */}
      <img
        ref={leftImageRef}
        src="https://www.sohopodomorocity.com/wp-content/uploads/2016/09/4.jpg"
        alt="Workspace Left"
        className="absolute bottom-20 left-10 w-32 md:w-60 rounded-xl shadow-lg transform "
      />
      <img
        ref={rightImageRef}
        src="https://www.invaluable.com/blog/wp-content/uploads/sites/77/2018/05/workspace-hero.jpg"
        alt="Workspace Right"
        className="absolute top-20 right-10 w-32 md:w-60 rounded-xl shadow-lg transform"
      />

      {/* CTA Content */}
      <div className="relative z-10 text-white poppins">
        <h1 className="text-3xl md:text-5xl font-medium leading-tight ">
          Get the Workspace That Fits <br /> Your Needs at Urbanpace.
        </h1>
        <p className="mt-4 text-lg">Join Us Today!</p>
        <Button className="mt-6 cursor-pointer">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default CTA;
