import React from "react";
import WorkspaceSearch from "./WorkspaceSearch";

const Hero = () => {
  return (
    <section className="poppins relative w-full  bg-cover bg-center flex flex-col px-10 sm:px-[2vw] md:px-[4vw] bg-white py-[2vw] border border-white h-screen justify-center items-center overflow-hidden"
      style={{ backgroundImage: "url('https://www.dgicommunications.com/wp-content/uploads/2022/08/Design_a_Flexible_Workspace.jpg')" }}>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-transparent to-black/90 w-full "></div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-transparent to-black/90 w-full "></div>

      <div className="absolute top-2 w-full   flex justify-center items-center">
        <div className="relative flex flex-col justify-between items-center">
          <h1 className="relative text-white text-[300px]   tracking-tighter flex justify-center items-center leading-tight text-center">FINSPACE</h1>
          <div className="absolute flex bottom-10 justify-between w-full px-4 text-xl text-white ">
            <h2>Best Website</h2>
            <h2>To Find WorkSpace</h2>
          </div>
        </div>

      </div>

      {/* <div className="absolute bottom-10  flex justify-center items-center bg-transparent z-100 w-full h-1/2">

        <div className=" h-full w-full max-w-2xl rounded-xl border border-white/30 bg-white/30 backdrop-blur">

        </div>


      </div> */}


      <WorkspaceSearch/>



    </section>
  );
};

export default Hero;
