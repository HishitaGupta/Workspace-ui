// import React from "react";

// const HomeAbout = () => {
//   return (
//     <section className="flex justify-center items-center py-10 px-4 h-[80vh] poppins bg-white">
//       <div className="text-center text-lg sm:text-2xl md:text-4xl font-light text-black leading-relaxed max-w-4xl ">
//         <p>
//           We're Building A Community{" "}
//           <img
//             src="https://www.dgicommunications.com/wp-content/uploads/2022/08/Design_a_Flexible_Workspace.jpg" // Replace with your image URL
//             alt="Community"
//             className="inline w-16 h-12 -rotate-10 mx-2"
//           />
//           Of Like-Minded Professionals Who Inspire And Support Each Other.
//         </p>
//         <p className="">
//           Our Space Is Designed To Foster Collaboration,{" "}
//           <span className="">
//             Creativity{" "}
//             <img
//               src="https://www.dgicommunications.com/wp-content/uploads/2022/08/Design_a_Flexible_Workspace.jpg" // Replace with your image URL
//               alt="Creativity"
//               className="inline w-16 h-12 mx-2 rotate-8"
//             />
//           </span>
//           And Growth.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HomeAbout;


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeAbout = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll(".word");

    gsap.fromTo(
      words,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // Adjust where animation starts
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="flex justify-center items-center py-10 px-4 h-[80vh] poppins bg-white">
      <div ref={textRef} className="text-center text-lg sm:text-2xl md:text-4xl font-light text-black leading-relaxed max-w-4xl">
        <p>
          <span className="word">We're</span> <span className="word">Building</span> <span className="word">A</span> <span className="word">Community</span>{" "}
          <img
            src="https://www.dgicommunications.com/wp-content/uploads/2022/08/Design_a_Flexible_Workspace.jpg"
            alt="Community"
            className="inline w-16 h-12 -rotate-10 mx-2 word"
          />
          <span className="word">Of</span> <span className="word">Like-Minded</span> <span className="word">Professionals</span> <span className="word">Who</span>{" "}
          <span className="word">Inspire</span> <span className="word">And</span> <span className="word">Support</span> <span className="word">Each</span> <span className="word">Other.</span>
        </p>
        <p>
          <span className="word">Our</span> <span className="word">Space</span> <span className="word">Is</span> <span className="word">Designed</span> <span className="word">To</span>{" "}
          <span className="word">Foster</span> <span className="word">Collaboration,</span>{" "}
          <span className="word">Creativity</span>{" "}
          <img
            src="https://www.dgicommunications.com/wp-content/uploads/2022/08/Design_a_Flexible_Workspace.jpg"
            alt="Creativity"
            className="inline w-16 h-12 mx-2 rotate-8 word "
          />
          <span className="word">And</span> <span className="word">Growth.</span>
        </p>
      </div>
    </section>
  );
};

export default HomeAbout;
