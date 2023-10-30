import { FiDownload } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
const Preview = () => {
  return (
    <>
      <div className="bg-[#fff] w-[30%] p-4 shadow-lg shadow-slate-100 rounded-md">
        <h4 className="font-Nunito text-xl text-textColor font-semibold">
          Preview
        </h4>
        <p className="font-Nunito text-base text-textColor">
          Fill sections with your exact details.
        </p>
        <div className="preview flex justify-center">
          <div className="preview_part bg-[#f5f5f5] w-[270px] h-[330px] mt-4"></div>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-4">
          <div className="p1 bg-[#f33737] h-[100px]"></div>
          <div className="p1 bg-[#f33737] h-[100px]"></div>
          <div className="p1 bg-[#f33737] h-[100px]"></div>
          <div className="p1 bg-[#f33737] h-[100px]"></div>
        </div>
        <div className="buttons flex justify-between">
          <button
            className="flex justify-center items-center bg-[#f5f5f5] w-[170px] h-[44px] mt-[48px] border border-solid border-[#f5f5f5] rounded font-Nunito text-lg text-textColor font-semibold"
            type="button">
            <AiOutlineEye className="mr-[5px]" />
            Preview resume
          </button>
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
