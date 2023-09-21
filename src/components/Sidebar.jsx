import logo from "../assets/tv.png"
import { AiOutlineHome } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { PiMonitorPlayThin } from "react-icons/pi";
import { GrLogout } from "react-icons/gr";
import { BsCalendar3 } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <IconContext.Provider value={{ className: "w-6 h-6" }}>
        <div className="flex-col w-[12%] border border-black rounded-e-[3rem] min-h-screen text-center ">
          {/* Logo */}
          <Link to={"/"} className="flex items-center mdmx-2 mt-14 text-black">
            <div className="">
              <img className="w-[80%] md:w-12" src={logo} alt="MovieBoxIcon" />
            </div>
            <div>
              <h1 className="text-gray-600 font-bold text-2xl ml-2 hidden md:block">MovieBox</h1>
            </div>
          </Link>
          {/* Navigation */}
          <ul className="list-none mt-9  flex flex-col items-start space-y-10 ">
            <li className="mb-3  md:p-5 flex items-center justify-center">
              <AiOutlineHome />
              <span className="hidden md:block ml-4 text-xl">Home</span>
            </li>
            <li className="mb-3 md:p-5  flex items-center justify-center">
              <BiCameraMovie />
              <span className="hidden md:block ml-4 text-xl">Movies</span>
            </li>
            <li className="mb-3 md:p-5 flex items-center justify-center">
              <PiMonitorPlayThin />
              <span className="hidden md:block ml-4 text-xl">TV Series</span>
            </li>
            <li className="mb-3 md:p-5 flex items-center justify-center">
              <BsCalendar3 />
              <span className="hidden md:block ml-4 text-xl">Upcoming</span>
            </li>
          </ul>
          {/* Quiz */}
          <div className="rounded-2xl border-[#BE123CB2] border bg-[#fcf5f7] p-4 w-[70] mx-5 hidden md:block">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-semibold text-base">
                Play movie quizes and earn free tickets
              </h1>
              <p className="font-medium text-xs">50k people are playing now</p>
              <div className="rounded-2xl border-[#BE123CB2] border bg-[#fcf5f7]">
                <p className="text-xs font-medium text-[#BE123C]">
                  Start Playing
                </p>
              </div>
            </div>
          </div>
          {/* Logout */}

          <div className="mt-10 mb-3 md:p-5 flex items-start md:items-center justify-center">
            <GrLogout className="w-6 h-6" />
            <span className="hidden md:block ml-4 text-xl">Logout</span>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
