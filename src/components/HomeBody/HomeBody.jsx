import { FaUserTie } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { SlBadge } from "react-icons/sl";
import { AiOutlineLaptop } from "react-icons/ai";
const HomeBody = () => {
  return (
    <>
      <div className="container-full flex gap-4 mx-auto p-2">
        <div className="bg-[#fff] w-[20%] py-4 px-3 shadow-lg shadow-slate-100 rounded-md">
          <h4 className="font-Nunito text-xl text-textColor font-semibold">
            Fill section
          </h4>
          <p className="font-Nunito text-base text-textColor">
            Choose the option and write your details.
          </p>
          <div className="choose_part grid grid-rows-4 grid-flow-col gap-3 mt-4">
            <span className="p-8 bg-[#f5f5f5] rounded-md">
              <FaUserTie className="text-[50px] text-bcolor mx-auto"/>
            </span>
            <span className="p-8 bg-[#f5f5f5] rounded-md">
              <GiNotebook className="text-[50px] text-bcolor mx-auto"/>
            </span>
            <span className="p-8 bg-[#f5f5f5] rounded-md">
              <MdWork className="text-[50px] text-bcolor mx-auto"/>
            </span>
            <span className="p-8 bg-[#f5f5f5] rounded-md">
              <SiBookstack className="text-[50px] text-bcolor mx-auto"/>
            </span>
            <span className="p-8 bg-[#f5f5f5] rounded-md">
              <FaGlobeAmericas className="text-[50px] text-bcolor mx-auto"/>
            </span>
            <span className="p-8 bg-[#f5f5f5] rounded-md">
              <SlBadge className="text-[50px] text-bcolor mx-auto"/>
            </span>
            <span className="p-8 bg-[#f5f5f5] rounded-md">
              <FaUserGraduate className="text-[50px] text-bcolor mx-auto"/>
            </span>
            <span className="p-8 bg-[#f5f5f5] rounded-md">
              <AiOutlineLaptop className="text-[50px] text-bcolor mx-auto"/>
            </span>
          </div>
        </div>
        <div className="bg-[#fff] w-[50%] p-4 shadow-lg shadow-slate-100 rounded-md">
          <h4 className="font-Nunito text-xl text-textColor font-semibold">
            Establish fact that a reader
          </h4>
          <p className="font-Nunito text-base text-textColor">
            Fill it out, and land that dream job! Create and download your
            professional resume in less than 5 minutes.
          </p>
        </div>
        <div className="bg-[#fff] w-[30%] p-4 shadow-lg shadow-slate-100 rounded-md">
          <h4 className="font-Nunito text-xl text-textColor font-semibold">
            Preview
          </h4>
          <p className="font-Nunito text-base text-textColor">
            Fill sections with your exact details.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeBody;
