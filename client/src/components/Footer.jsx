import { FaTiktok, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10  poppins ">
      {/* Urbanpace Text with Background Image */}
      <div className="relative text-center text-[5rem] md:text-[12rem] font-bold uppercase tracking-wide text-black ">
        <span className="bg-clip-text text-transparent" style={{ 
          backgroundImage: "url('https://www.dgicommunications.com/wp-content/uploads/2022/08/Design_a_Flexible_Workspace.jpg')", 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}>
          FINSPACE
        </span>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-black  mt-6 px-[5vw]">
        {/* Menu */}
        <div>
          <h3 className="font-semibold mb-3 text-md">Menu</h3>
          <ul className="space-y-4 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Product</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold mb-3 text-md">Features</h3>
          <ul className="space-y-4 text-sm">
            <li>Dashboard Analytics</li>
            <li>Account Connection</li>
            <li>Billing & Invoice</li>
            <li>Transaction</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3 text-md">Resources</h3>
          <ul className="space-y-4 text-sm">
            <li>Forum</li>
            <li>Support</li>
            <li>Partners</li>
            <li>Events</li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className="font-semibold mb-3 text-md">My Account</h3>
          <ul className="space-y-4 text-sm">
            <li>My Orders</li>
            <li>FAQ</li>
            <li>Sales Conditions</li>
            <li>Contact</li>
            <li>Legal Mentions</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs px-[5vw]">
        {/* Terms & Policies */}
        <div className="flex space-x-4">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
          <span>Legal</span>
          <span>Recalls</span>
        </div>

        {/* Copyright */}
        <p className="mt-4 md:mt-0">© 2025 Copyright By Bihar Innovation</p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0 text-black text-lg">
          <FaTiktok />
          <FaLinkedin />
          <FaInstagram />
          <FaFacebook />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
