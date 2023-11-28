import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import logo from '../../assets/fbw-logo.png'
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolling = scrollY > 140; // Adjust the threshold as needed
      setScrolling(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
 <nav
        className={`fixed flex flex-row justify-between items-center py-3 px-10 w-[100%] z-10 ${
          scrolling ? "bg-white text-black font-semibold shadow-md " : " text-white font-semibold bg-transparent"
        }`}
      >
  <img src={logo} alt="" className="h-[60px] w-[150px]" />
  <div className="flex gap-8 list-none cursor-pointer">
    <li><Link to='/'>HOME</Link></li>
    <li><Link to='/'>ABOUT US</Link></li>
    <li><Link to='/'>SERVICE</Link></li>
    <li><Link to='/'>PAYMENT PLAN</Link></li>
    <li><Link to='/'>CONTACT</Link></li>
    <li><Link to='/'>MEMBERSIP</Link></li>
  </div>
</nav>

    </>
  )
}

export default Navbar