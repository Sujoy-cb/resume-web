import { FiDownload } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
const Preview = () => {
  return (
    <>
      <div className="bg-[#fff] w-[25%] p-4 shadow-lg shadow-slate-100 rounded-md">
        <h4 className="font-Nunito text-xl text-textColor font-semibold">
          Preview
        </h4>
        <p className="font-Nunito text-base text-textColor">
          Fill sections with your exact details.
        </p>
        <div className="preview relative">
          <div className="preview_overlay w-[270px] h-[330px] absolute top-0 left-[12px] flex justify-center items-center">
            <div className="preview_icon w-12 h-12 text-bcolor bg-fcolor border border-fcolor rounded-full flex justify-center items-center cursor-pointer hover:bg-bcolor hover:border-bcolor hover:text-fcolor">
            <AiOutlineEye className="text-xl hover" />
            </div>
          </div>
          <div className="preview_part bg-[#f5f5f5] w-[270px] h-[330px] mx-auto mt-4 p-2">fgdfdfgdfgdfgdfgfg</div>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-4">
          <div className="p1 bg-[#f33737] h-[100px]"></div>
          <div className="p1 bg-[#f33737] h-[100px]"></div>
          <div className="p1 bg-[#f33737] h-[100px]"></div>
          <div className="p1 bg-[#f33737] h-[100px]"></div>
        </div>
        <div className="buttons flex justify-center">
          <button
            className="flex justify-center items-center bg-bcolor w-[170px] h-[44px] mt-[48px] border border-solid border-[#502acd] rounded font-Nunito text-lg text-[#fff] font-semibold"
            type="button">
            <FiDownload className="mr-[5px]" />
            Download PDF
          </button>
        </div>
      </div>
    </>
  );
};

export default Preview;
