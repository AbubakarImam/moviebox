import logo from "../assets/logo.svg"
import { AiOutlineHome } from "react-icons/ai";
import { BiCameraMovie, BiLogOut } from "react-icons/bi";
import { PiMonitorPlayThin } from "react-icons/pi";
import { BsCalendar3 } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <IconContext.Provider value={{ className: "w-6 h-6" }}>
        <div className="flex-col w-[12%] border border-black rounded-e-[3rem] h-full text-center ">
          {/* Logo */}
          <Link to={"/"} className="flex justify-between mt-14 mx-5 text-black">
            <img className="w-full" src={logo} alt="MovieBoxIcon" />
          </Link>
          {/* Navigation */}
          <ul className="list-none mt-9  flex flex-col items-start">
            <li className="mb-3  p-5 flex items-center justify-center">
              <AiOutlineHome />
              <span className="ml-4 text-xl">Home</span>
            </li>
            <li className="mb-3 p-5  flex items-center justify-center">
              <BiCameraMovie />
              <span className="ml-4 text-xl">Movies</span>
            </li>
            <li className="mb-3 p-5 flex items-center justify-center">
              <PiMonitorPlayThin />
              <span className="ml-4 text-xl">TV Series</span>
            </li>
            <li className="mb-3 p-5 flex items-center justify-center">
              <BsCalendar3 />
              <span className="ml-4 text-xl">Upcoming</span>
            </li>
          </ul>
          {/* Quiz */}
          <div className="rounded-2xl border-[#BE123CB2] border bg-[#fcf5f7] p-4 w-[70] mx-5">
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

          <div className="mb-3 p-5 flex items-center justify-center">
            <BiLogOut />
            <span className="ml-4 text-xl">Logout</span>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
