import { FaUserTie } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { SlBadge } from "react-icons/sl";
import { AiOutlineLaptop } from "react-icons/ai";


let handleUser= ()=>{
  console.log("user")
}

const Sidebar = () => {
  return (
    <>
        <div className="bg-[#fff] w-[25%] py-4 px-3 shadow-lg shadow-slate-100 rounded-md">
          <h4 className="font-Nunito text-xl text-textColor font-semibold">
            Fill section
          </h4>
          <p className="font-Nunito text-base text-textColor">
            Choose the option and write your details.
          </p>
          <div className="choose_part grid grid-rows-4 grid-flow-col gap-3 mt-4">
            <span onClick={handleUser} className="p-6 bg-[#f5f5f5] rounded-md cursor-pointer">
              <FaUserTie className="text-[40px] text-bcolor mx-auto"/>
              <p className="font-Nunito text-base text-textColor font-bold text-center">User info</p>
            </span>
            <span className="p-6 bg-[#f5f5f5] rounded-md cursor-pointer">
              <GiNotebook className="text-[40px] text-bcolor mx-auto"/>
              <p className="font-Nunito text-base text-textColor font-bold text-center">Summary</p>
            </span>
            <span className="p-6 bg-[#f5f5f5] rounded-md cursor-pointer">
              <MdWork className="text-[40px] text-bcolor mx-auto"/>
              <p className="font-Nunito text-base text-textColor font-bold text-center">Experience</p>
            </span>
            <span className="p-6 bg-[#f5f5f5] rounded-md cursor-pointer">
              <SiBookstack className="text-[40px] text-bcolor mx-auto"/>
              <p className="font-Nunito text-base text-textColor font-bold text-center">Educations</p>
            </span>
            <span className="p-6 bg-[#f5f5f5] rounded-md cursor-pointer">
              <FaGlobeAmericas className="text-[40px] text-bcolor mx-auto"/>
              <p className="font-Nunito text-base text-textColor font-bold text-center">Languages</p>
            </span>
            <span className="p-6 bg-[#f5f5f5] rounded-md cursor-pointer">
              <SlBadge className="text-[40px] text-bcolor mx-auto"/>
              <p className="font-Nunito text-base text-textColor font-bold text-center">Achievements</p>
            </span>
            <span className="p-6 bg-[#f5f5f5] rounded-md cursor-pointer">
              <FaUserGraduate className="text-[40px] text-bcolor mx-auto"/>
              <p className="font-Nunito text-base text-textColor font-bold text-center">Courses</p>
            </span>
            <span className="p-6 bg-[#f5f5f5] rounded-md cursor-pointer">
              <AiOutlineLaptop className="text-[40px] text-bcolor mx-auto"/>
              <p className="font-Nunito text-base text-textColor font-bold text-center">Skills</p>
            </span>
          </div>
        </div>
    </>
  )
}

export default Sidebar