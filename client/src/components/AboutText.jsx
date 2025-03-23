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

const AboutText = () => {
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
    <section className="flex justify-center items-center py-10 px-4 h-[80vh] poppins bg-white lg:px-[4vw] gap-20">
        <div className="w-1/4  h-1/2 flex  items-center text-md font-semibold">
        <p>
            Empowering Collaboration <br /> Fostering Innovation
        </p>

        </div>
      <div ref={textRef} className="text-start text-md sm:text-2xl md:text-2xl font-light text-black leading-relaxed max-w-4xl w-3/4">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloremque at ipsa? Cupiditate omnis ratione repellat debitis, ad sint corrupti voluptates perferendis libero amet. Odit asperiores porro necessitatibus? Deserunt, maiores doloremque blanditiis, consectetur fugiat quod eos esse, similique error beatae alias culpa magni iste inventore ratione. Velit voluptas corporis cupiditate!
        </p>
        
      </div>
    </section>
  );
};

export default AboutText;
