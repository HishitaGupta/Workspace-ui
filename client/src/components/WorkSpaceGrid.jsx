import React, { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import gsap from "gsap";
import { Link } from "react-router-dom";

// Updated workspaces data with city information
const workspaces = [
  {
    id: 1,
    name: "Ambarukmo Space",
    price: "$140.55 / Day",
    image: "https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost/2020/03/Ergonomic-Workspace.jpg",
    amenities: ["75 Mbps", "50 Seat", "100 m²"],
    city: "Gurgaon",
    location: "Sohna Road, Sector 48, near Subhash Chowk, Gurgaon",
    details: "100m from Subhash Chowk",
    offeredPrice: "₹8,000 / seat",
    rating: 4.9,
    type:"Private Office",
    reviews: 53
  },
  {
    id: 2,
    name: "Commodities Space",
    price: "$30.00 / Day",
    image: "https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost/2020/03/Ergonomic-Workspace.jpg",
    amenities: ["75 Mbps", "50 Seat", "100 m²"],
    city: "Delhi",
    location: "Connaught Place, Delhi",
    details: "5 min from Rajiv Chowk Metro",
    offeredPrice: "₹5,000 / seat",
    rating: 4.7,
    type:"Private Office",
    reviews: 42
  },
  {
    id: 3,
    name: "Golf Course Work & Cafe",
    price: "$80.80 / Day",
    image: "https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost/2020/03/Ergonomic-Workspace.jpg",
    amenities: ["75 Mbps", "50 Seat", "100 m²"],
    city: "Gurgaon",
    location: "2nd Floor, MPD Tower, Golf Course Road, Gurgaon",
    details: "2 minutes' walk from Sector 42-43 Rapid Metro Station",
    offeredPrice: "₹14,000 / seat",
    rating: 4.9,
    type:"Private Office",
    reviews: 59
  },
  {
    id: 4,
    name: "Golf Course Ext Space",
    price: "$80.80 / Day",
    image: "https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost/2020/03/Ergonomic-Workspace.jpg",
    amenities: ["75 Mbps", "50 Seat", "100 m²"],
    city: "Gurgaon",
    location: "Suncity Success Towers, Golf Course Road Ext., Gurgaon",
    details: "Free parking & Massive terrace with dual decks",
    offeredPrice: "₹7,000 / seat",
    rating: 4.7,
    type:"Private Office",
    reviews: 85
  },
  {
    id: 5,
    name: "Noida Office Hub",
    price: "$60.50 / Day",
    image: "https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost/2020/03/Ergonomic-Workspace.jpg",
    amenities: ["100 Mbps", "30 Seat", "80 m²"],
    city: "Noida",
    location: "Sector 62, Noida",
    details: "Near Fortis Hospital",
    offeredPrice: "₹6,500 / seat",
    rating: 4.8,
    type:"Private Office",
    reviews: 37
  },
  {
    id: 6,
    name: "Hyderabad Tech Park",
    price: "$70.30 / Day",
    image: "https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost/2020/03/Ergonomic-Workspace.jpg",
    amenities: ["120 Mbps", "40 Seat", "120 m²"],
    city: "Hyderabad",
    location: "HITEC City, Hyderabad",
    details: "Close to Mindspace Business Park",
    offeredPrice: "₹9,000 / seat",
    rating: 4.6,
    type:"Private Office",
    reviews: 48

  },
  {
    id: 7,
    name: "Cyber Hub Space",
    price: "$90.40 / Day",
    image: "https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost/2020/03/Ergonomic-Workspace.jpg",
    amenities: ["100 Mbps", "25 Seat", "90 m²"],
    city: "Gurgaon",
    location: "DLF Cyber City, Gurgaon",
    details: "Walking distance from Cyber City Metro",
    offeredPrice: "₹12,000 / seat",
    rating: 4.8,

    reviews: 62,
    type:"Private Office",
  },
  {
    id: 8,
    name: "Noida Express Hub",
    price: "$55.70 / Day",
    image: "https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost/2020/03/Ergonomic-Workspace.jpg",
    amenities: ["90 Mbps", "35 Seat", "95 m²"],
    city: "Noida",
    location: "Sector 16, Noida",
    details: "5 min from Noida Sector 16 Metro Station",
    offeredPrice: "₹5,800 / seat",
    rating: 4.5,
    reviews: 29,
    type:"Private Office",
  },
];

const WorkspaceGrid = () => {
  // List of available cities
  const cities = ["Gurgaon", "Delhi", "Noida", "Hyderabad"];
  
  // State for the selected city filter
  const [selectedCity, setSelectedCity] = useState("all");
  // State for cursor hover
  const [isHovering, setIsHovering] = useState(false);

  // Refs for the custom cursor
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);
  const cursorOuterRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  // Filter workspaces based on selected city
  const filteredWorkspaces = selectedCity === "all" 
    ? workspaces 
    : workspaces.filter(space => space.city === selectedCity);

  useEffect(() => {
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

  // Effect to add/remove the cursor-none class to body when hovering
  useEffect(() => {
    if (isHovering) {
      document.body.classList.add('cursor-none');
    } else {
      document.body.classList.remove('cursor-none');
    }
    
    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove('cursor-none');
    };
  }, [isHovering]);

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
    <section className="px-4 sm:px-[5vw] md:px-[4vw] lg:px-[4vw] py-10 min-h-screen bg-white poppins">
      {/* Heading */}
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl md:text-5xl font-medium">Coworking Spaces</h1>
        <Button className="flex items-center text-gray-700 hover:text-black transition">
          See More <ArrowRight className="ml-2" size={18} />
        </Button>
      </div>

      {/* City Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3  my-10 mb-12">
        <button 
          onClick={() => setSelectedCity("all")}
          className={`px-6 py-2 rounded-md shadow-md transition-all ${
            selectedCity === "all" 
              ? "bg-black text-white" 
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          View all
        </button>
        
        {cities.map(city => (
          <button 
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`px-6 py-2 rounded-md shadow-md transition-all ${
              selectedCity === city 
                ? "bg-black text-white" 
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Workspace Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
        {filteredWorkspaces.map((space) => (
          <Link to={`${space.type}/${space.name}`}>
          <div 
            key={space.id} 
            className="bg-white rounded-xl overflow-hidden shadow-md hover:scale-105 transition-all transform duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-t-xl">
              <img 
                src={space.image} 
                alt={space.name} 
                className="w-full h-80 object-cover hover:scale-110 transition-all transform duration-300" 
              />
              {/* Amenities */}
              <div className="absolute top-3 left-3 flex space-x-2">
                {space.amenities.map((amenity, index) => (
                  <span key={index} className="bg-white text-xs font-medium px-3 py-1 rounded-full shadow">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-4 h-[28vh]">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium my-2">{space.name}</h3>
                <div className="flex items-center text-sm">
                  <span className="text-yellow-500 mr-1 my-2">★</span>
                  <span>{space.rating} ({space.reviews})</span>
                </div>
              </div>
              
              {/* Location */}
              <div className="mt-2 flex items-start">
                <span className="text-red-500 mr-2">
                  <img src="../src/assets/pin.png" alt="map" className="h-4 flex justify-center items-center"/>
                </span>
                <p className="text-gray-600 text-sm">{space.location}</p>
              </div>
              
              {/* Details */}
              <div className="mt-2 flex items-start">
                <span className="text-gray-400 mr-2">
                <img src="../src/assets/checkmark.png" alt="map" className="h-4 flex justify-center items-center"/>
                </span>
                <p className="text-gray-600 text-sm">{space.details}</p>
              </div>
              
              {/* Price */}
              <div className="mt-2 flex items-start">
                <span className="text-gray-400 mr-2">
                <img src="../src/assets/checkmark.png" alt="map" className="h-4 flex justify-center items-center"/>
                </span>
                <p className="text-gray-600 text-sm">Offered Price: {space.offeredPrice}</p>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
     
      
      {/* Custom Cursor Elements */}
      {/* Outer ring cursor */}
      <div
        ref={cursorOuterRef}
        className="fixed w-18 h-18 rounded-full border-2 border-white pointer-events-none z-40"
        style={{ top: 0, left: 0 }}
      ></div>
      
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed flex items-center justify-center w-16 h-16  bg-black/60 backdrop-blur-lg border border-black/30 rounded-full shadow-lg pointer-events-none z-50"
        style={{ top: 0, left: 0 }}
      >
        <div 
          ref={cursorTextRef} 
          className="text-[10px] font-medium text-center text-white"
        >
          Book Now
        </div>
      </div>
      
      {/* Global cursor styles */}
      <style jsx global>{`
        .cursor-none * {
          cursor: none !important;
        }
      `}</style>
    </section>
  );
};

export default WorkspaceGrid;