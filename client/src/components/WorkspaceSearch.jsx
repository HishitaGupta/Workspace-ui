import React from 'react'
import Button from './Button';


export default function WorkspaceSearch() {
    return (
      <div className="absolute bottom-6 flex justify-center items-center bg-transparent w-full h-[45vh] poppins">
        <div className="h-full w-full max-w-lg rounded-xl border border-white/30 bg-white/30 backdrop-blur-md p-6 flex flex-col items-center space-y-4">
          <h2 className="text-white text-3xl font-normal text-center ">
            Explore your extra  <br /> comfy workspace.
          </h2>
          
          {/* Location Dropdown */}
          <div className="w-full">
            <div className="relative">
              <span className="absolute left-3 top-3 text-white">📍</span>
              <select className="w-full bg-transparent border border-white/30 text-white py-2 pl-10 pr-4 rounded-full focus:outline-none">
                <option className="text-black">Bali, Indonesia</option>
                <option className="text-black">New York, USA</option>
                <option className="text-black">Tokyo, Japan</option>
                <option className="text-black">London, UK</option>
              </select>
            </div>
          </div>
  
          {/* Date Picker */}
          <div className="w-full">
            <div className="relative">
              <span className="absolute left-3 top-3 text-white">📅</span>
              <input
                type="date"
                className="w-full bg-transparent border border-white/30 text-white py-2 pl-10 pr-4 rounded-full focus:outline-none"
                defaultValue="2024-08-12"
              />
            </div>
          </div>
  
          {/* Button */}
          <Button className="w-full">
            Find Space
          </Button>
        </div>
      </div>
    );
  }

  
  
  
