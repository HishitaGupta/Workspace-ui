import React from "react";
import WorkspaceSearch from "./WorkspaceSearch";
import { ArrowRight } from "lucide-react";

const AboutHero = () => {
    return (

        <section className="poppins relative w-full  bg-cover bg-center flex flex-col px-10 sm:px-[2vw] md:px-[4vw] bg-white py-[2vw]  h-screen  overflow-hidden rounded-2xl"
            style={{ backgroundImage: "url('https://blog.thegoodluck.com/wp-content/uploads/2019/07/coworking-spaces-02.jpg')" }}>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-transparent to-black/90 w-full "></div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-transparent to-black/90 w-full "></div>

            <div className="absolute bottom-10  flex  bg-white/30 backdrop-blur-lg rounded-full px-16 py-6">

                <h1 className="relative text-white text-6xl font-semibold  flex gap-4 justify-center items-center">About <ArrowRight className="ml-2 font-semibold -rotate-45 bg-white text-black rounded-full p-2  hover:rotate-4  ease-in-out duration-300" size={60} /></h1>



            </div>

            <div className="absolute top-20 right-10 flex px-4 py-6 w-1/3 justify-end border">

                <h5 className="relative text-gray-200 text-lg  flex gap-4 justify-center items-center tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error alias quae eaque dolorum praesentium iste impedit tenetur facilis necessitatibus asperiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde a laborum non atque doloremque ullam nulla esse excepturi minima vel!</h5>



            </div>

            {/* <div className="absolute bottom-10  flex justify-center items-center bg-transparent z-100 w-full h-1/2">

        <div className=" h-full w-full max-w-2xl rounded-xl border border-white/30 bg-white/30 backdrop-blur">

        </div>


      </div> */}


            {/* <WorkspaceSearch/> */}



        </section>
    );
};

export default AboutHero;
