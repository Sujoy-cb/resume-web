import logo from "../../assets/logo.png";
import { AiOutlineDashboard } from "react-icons/ai";
import { SlBadge } from "react-icons/sl";
import { FaLanguage } from "react-icons/fa";
import { PiCaretDownBold } from "react-icons/pi";
const Navpart = () => {
  return (
    <>
      <div className="navpart bg-bcolor p-5">
        <div className="container mx-auto">
          <div className="nav_items flex justify-between">
            <div className="logo">
              <img
                src={logo}
                alt="logo"
                width={200}
                height={80}
              />
            </div>
            <div className="nav_item flex items-center">
              <ul className="flex gap-8">
                <li className="font-Nunito text-fcolor text-base font-medium flex items-center gap-1">
                  <span>
                    <AiOutlineDashboard />
                  </span>
                  Dashboard
                </li>
                <li className="font-Nunito text-fcolor text-base font-medium flex items-center gap-1">
                  <span>
                    <SlBadge />
                  </span>
                  Upgrade
                </li>
                <li className="font-Nunito text-fcolor text-base font-medium flex items-center gap-1">
                  <span>
                    <FaLanguage />
                  </span>
                  English
                </li>
                <li className="font-Nunito text-fcolor text-base font-medium flex justify-between items-center">
                <span className="w-10 h-10 border-[2px] border-red-700 p-2 rounded-full mr-2">SC</span>
                  Sujoy Chakraborty
                  <span><PiCaretDownBold/></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navpart;
