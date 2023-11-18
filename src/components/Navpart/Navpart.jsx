import { useState } from "react";
import logo from "../../assets/logo.png";
import { AiOutlineDashboard } from "react-icons/ai";
import { SlBadge } from "react-icons/sl";
import { FaLanguage } from "react-icons/fa";
import { PiCaretDownBold } from "react-icons/pi";
const Navpart = () => {
  let [changelanguage, setChangelanguage] = useState(false);

  let handleLanguage = () => {
    setChangelanguage(!changelanguage);
  };
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
                <li
                  onClick={handleLanguage}
                  className="font-Nunito text-fcolor text-base font-medium flex items-center gap-1 cursor-default relative">
                  <span>
                    <FaLanguage />
                  </span>
                  English
                  <div
                    className={
                      changelanguage
                        ? "lan_option bg-[#fff] absolute top-[43px] right-[-40px] border border-textColor z-10 block"
                        : "lan_option bg-[#fff] absolute top-[43px] right-[-40px] border border-textColor z-10 hidden"
                    }>
                    <div className="lang flex justify-between divide-x">
                      <h5 className="font-Nunito text-textColor text-base font-semibold p-4">
                        English
                      </h5>
                      <h5 className="font-Nunito text-textColor text-base font-semibold p-4">
                        Bangla
                      </h5>
                    </div>
                  </div>
                </li>
                <li className="font-Nunito text-fcolor text-base font-medium flex justify-between items-center">
                  <span className="w-10 h-10 border-[2px] border-red-700 p-2 rounded-full mr-2">
                    SC
                  </span>
                  Sujoy Chakraborty
                  <span>
                    <PiCaretDownBold />
                  </span>
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
