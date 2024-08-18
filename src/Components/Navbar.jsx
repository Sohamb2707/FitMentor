import { CornerLeftDown, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.jpg";
import { navItems } from "../constants";

const Navbar = () => {

    const navbarStyle = {
        background: 'var(--header-bg)',
        color:'var(--page-bg)',
    };
    const anchorStyle = {
        color: 'var(--anchor-tags)',
    };
    const btn1={
         background:'var(--page-bg)',
         color:'var(--anchor-tags)',
    };
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b text-neutral-50" style={navbarStyle}>
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                        <span className="text-xl  text-white font-semibold tracking-wider">FitMentor</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} style={anchorStyle} className="font-medium">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="py-2 px-3 border rounded-md "  style={btn1}>Sign In</a>
                        <a href="#" className="bg-gradient-to-r py-2 px-3 border rounded-md" style={btn1}>Create Account</a>
                    </div>
                    <div className="lg:hidden flex flex-col justify-end">
                        <button onClick={toggleNavbar} className="text-white">{mobileDrawerOpen ? <X /> : <Menu />}</button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href} className="text-white hover:text-gray-300">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="#" className="py-2 px-3 border rounded-md" style={btn1}>Sign In</a>
                            <a href="#" className="bg-gradient-to-r  py-2 px-3 border rounded-md" style={btn1}>Create Account</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
